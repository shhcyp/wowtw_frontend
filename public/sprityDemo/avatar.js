import {GRID} from "./constants.js";
import {SETTINGS} from "./settings.js";
import {CollisionAnimation} from "./collisionAniamtion.js";
import {Ready, Waiting} from "./avatarStates.js";

class Avatar {
    constructor() {
        this.image = null;
        this.width = 106;
        this.height = 106;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrameX = 4;
        this.frameTimer = 0;
        this.frameInterval = 17;

        this.angle = 0;
        this.vy = Math.random() * 0.05 - 0.1;

        this.isPause = true;
        this.isMoving = false;

        this.blinkTimer = 0; // 用于控制每个眨眼周期的间隔
        this.blinkLimit = Math.random() < 0.7 ? 1 : 2; // 随机生成1或2
        this.isBlinking = false; // 是否正在眨眼
        this.blinkCount = 0; // 当前眨眼动画的执行次数


        // 曲线移动参数
        this.movingCurve = false; // 是否正在沿曲线移动
        this.t = 0; // 时间参数，用于控制贝塞尔曲线进度
        this.curveControlPoint = {x: 0, y: 0}; // 控制点

        // S形曲线移动参数
        this.movingSCurve = false; // 是否正在沿曲线移动
        this.st = 0; // 时间参数，用于控制曲线进度
        this.sCurveControlPoints = []; // 存储控制点

        this.targetEnergy = null;
        this.lastTargetEnergy = null; // 上一次的 targetEnergy 值
        this.waitingTimer = 0; // 记录 targetEnergy 未变化的时间
        this.waitingInterval = 7000;

        this.state = {
            READY: new Ready(this),
            WAITING: new Waiting(this),
        };
        this.currentState = this.state.READY;
        this.currentState.enter();
    }

    draw(context) {
        if (SETTINGS.DEBUG) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    //曲线移动
    update(deltaTime, input) {
        /* 动画/状态 相关 */
        if (this.targetEnergy !== this.lastTargetEnergy || input.has(' ')) {
            this.lastTargetEnergy = this.targetEnergy;
            this.waitingTimer = 0;
            if (this.currentState instanceof Waiting) {
                this.setState('READY');
            }
        } else {
            this.waitingTimer += deltaTime;
        }

        // 如果 targetEnergy 未发生变化超过 7 秒，进入转眼状态
        if (this.waitingTimer >= this.waitingInterval && !(this.currentState instanceof Waiting)) {
            this.setState('WAITING');
        }

        // 更新当前状态
        this.currentState.update(deltaTime);

        /* 位移 相关 */
        // const xJustify = (GRID.UNIT_SIZE - ENERGY.WIDTH) * 0.5;
        // const yJustify = (GRID.UNIT_SIZE - ENERGY.HEIGHT) * 0.5;
        const xJustify = 0;
        const yJustify = 0;

        // 当不移动时，执行晃动动画
        if (this.isPause) {
            this.angle += this.vy;
            this.x += Math.sin(this.angle / 1.3);
            this.y += Math.cos(this.angle) * 0.3;
        }

        input.forEach(key => {
            const targetEnergy = this.game.energies.find(energy => !this.isMoving && energy.char === key && energy.y >= 0);
            if (targetEnergy) {
                this.targetEnergy = targetEnergy;
                const farTarget = Math.abs(this.currentY - targetEnergy.y) >= 3 * GRID.UNIT_SIZE || Math.abs(this.currentX - targetEnergy.x) >= 3 * GRID.UNIT_SIZE;
                this.isMoving = true;
                farTarget ? this.moveSTo(targetEnergy.x, targetEnergy.y) : this.moveTo(targetEnergy.x, targetEnergy.y);
            }
        });

        // 曲线返回逻辑
        const isAtVeryFirstPosition = this.currentX !== this.veryFirstX || this.currentY !== this.veryFirstY
        const isAtTargetPosition = this.currentX !== this.veryFirstX + xJustify || this.currentY !== this.veryFirstY + yJustify
        if (input.has(' ') && isAtVeryFirstPosition && isAtTargetPosition) {
            this.moveTo(this.veryFirstX + xJustify, this.veryFirstY + yJustify);
        }


        // 移动和碰撞检测
        if (this.movingCurve || this.movingSCurve) {
            // 曲线移动，如果正在曲线移动，则更新位置
            if (this.movingCurve) {
                this.t += 0.1; // 增加时间参数，控制移动速度
                if (this.t > 1) {
                    this.t = 1;
                    this.movingCurve = false; // 到达目标位置后停止曲线移动
                    this.isPause = true;
                    this.isMoving = false;
                }

                // 二次贝塞尔曲线计算
                this.x = Math.pow(1 - this.t, 2) * this.startX +
                    2 * (1 - this.t) * this.t * this.curveControlPoint.x +
                    Math.pow(this.t, 2) * this.targetX - xJustify;

                this.y = Math.pow(1 - this.t, 2) * this.startY +
                    2 * (1 - this.t) * this.t * this.curveControlPoint.y +
                    Math.pow(this.t, 2) * this.targetY - yJustify;
            }

            // S曲线移动
            if (this.movingSCurve) {
                this.st += 0.1; // 增加时间参数，控制移动速度
                if (this.st > 1) {
                    this.st = 1;
                    this.movingSCurve = false; // 到达目标位置后停止曲线移动
                    this.isPause = true;
                    this.isMoving = false;
                }

                // 三次贝塞尔曲线计算
                const [P0, P1, P2, P3] = this.sCurveControlPoints;
                this.x = Math.pow(1 - this.st, 3) * P0.x +
                    3 * Math.pow(1 - this.st, 2) * this.st * P1.x +
                    3 * (1 - this.st) * Math.pow(this.st, 2) * P2.x +
                    Math.pow(this.st, 3) * P3.x - xJustify;

                this.y = Math.pow(1 - this.st, 3) * P0.y +
                    3 * Math.pow(1 - this.st, 2) * this.st * P1.y +
                    3 * (1 - this.st) * Math.pow(this.st, 2) * P2.y +
                    Math.pow(this.st, 3) * P3.y - yJustify;
            }
            if (
                this.targetEnergy &&
                this.targetEnergy.x < this.x + this.width &&
                this.targetEnergy.x + this.targetEnergy.width > this.x &&
                this.targetEnergy.y < this.y + this.height &&
                this.targetEnergy.y + this.targetEnergy.height > this.y
            ) {
                this.targetEnergy.markedForDeletion = true;
                this.game.collisions.push(new CollisionAnimation(this.game, this.targetEnergy.x + this.targetEnergy.width * 0.5, this.targetEnergy.y + this.targetEnergy.height * 0.5))
                this.game.score++;
                this.targetEnergy = null;
            }
        }
    }

    // 曲线移动
    moveTo(targetX, targetY) {
        // 设置目标位置和控制点
        this.targetX = targetX;
        this.targetY = targetY;

        // 设置控制点位置（例如位于起点和终点的中点上方）
        this.curveControlPoint.x = (this.x + targetX) / 2;
        this.curveControlPoint.y = Math.min(this.y, targetY) - 37; // 控制点向上偏移

        this.startX = this.x;
        this.startY = this.y;

        this.currentX = this.targetX;
        this.currentY = this.targetY;

        this.t = 0; // 重置时间参数
        this.isPause = false;
        this.movingCurve = true; // 开始曲线移动
    }

    // S曲线移动
    moveSTo(targetX, targetY) {
        // 设置目标点
        const P0 = {x: this.x, y: this.y}; // 起点
        const P3 = {x: targetX, y: targetY}; // 终点

        this.targetX = targetX;
        this.targetY = targetY;

        this.currentX = this.targetX;
        this.currentY = this.targetY;

        // 定义两个控制点，生成 S 形曲线
        const P1 = {x: (P0.x + P3.x) / 2 - 123, y: (P0.y + P3.y) / 2 - 33}; // 偏左
        const P2 = {x: (P0.x + P3.x) / 2 + 123, y: (P0.y + P3.y) / 2 + 33}; // 偏右

        this.sCurveControlPoints = [P0, P1, P2, P3];
        this.st = 0; // 重置时间参数
        this.isPause = false;
        this.movingSCurve = true; // 开始曲线移动
    }

    setState(state) {
        this.currentState = this.state[state];
        this.currentState.enter();
    }
}

export class AvatarCyp extends Avatar {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('cyp_1x');
        this.blinkInterval = Math.random() * 2000 + 1000; // 每个眨眼周期的停顿时间（2～3秒）
        this.veryFirstX = GRID.HORIZONTAL_MARGIN + 4 * this.width;
        this.veryFirstY = GRID.VERTICAL_MARGIN + 5 * this.height;
        this.startX = this.veryFirstX;
        this.startY = this.veryFirstY;
        this.x = this.veryFirstX;
        this.y = this.veryFirstY;
        this.targetX = this.veryFirstX;
        this.targetY = this.veryFirstY;
        this.currentX = this.veryFirstX;
        this.currentY = this.veryFirstY;
    }
}

export class AvatarCj extends Avatar {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('cj_1x');
        this.blinkInterval = Math.random() * 2000 + 1000; // 每个眨眼周期的停顿时间（1～2秒）
        this.veryFirstX = GRID.HORIZONTAL_MARGIN + 7 * this.width;
        this.veryFirstY = GRID.VERTICAL_MARGIN + 5 * this.height;
        this.startX = this.veryFirstX;
        this.startY = this.veryFirstY;
        this.x = this.veryFirstX;
        this.y = this.veryFirstY;
        this.targetX = this.veryFirstX;
        this.targetY = this.veryFirstY;
        this.currentX = this.veryFirstX;
        this.currentY = this.veryFirstY;
    }
}