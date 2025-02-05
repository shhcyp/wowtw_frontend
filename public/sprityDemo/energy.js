import {states, Move, Pause} from "./energyState.js";
import {CANVAS, GRID} from "./constants.js";
import {SETTINGS} from "./settings.js";

export class Energy {
    constructor(char, image, frameX, frameY, xModifier, yModifier) {
        this.char = char;
        this.image = image;
        this.frameX = frameX;
        this.frameY = frameY;
        this.xModifier = xModifier;
        this._yModifier = yModifier;  // 使用私有变量存储 yModifier

        this.width = 106;
        this.height = 106;

        this.containerSize = GRID.UNIT_SIZE;

        // 初始化位置
        this.x = this.calculateX();
        this.y = this.calculateY();

        this.speed = 0;
        this.maxSpeed = this.containerSize;

        this.markedForDeletion = false;

        this.state = [new Pause(this), new Move(this)];
        this.currentState = this.state[0];
        this.remainingDistance = 0; // 剩余需要移动的距离
        this.currentState.enter();

        // 旋转动画相关属性
        this.rotationAngle = 0; // 初始旋转角度为 0
        this.rotationState = 0; // 旋转动画状态: 0 = 无旋转，1 = 顺时针，2 = 逆时针
        this.rotationStep = 7; // 每次旋转的步长
        this.rotationDelay = Math.random() * 1000 + 3000; // 旋转停顿时间
        this.isRotating = false; // 是否正在旋转

        // 浮动相关属性
        this.floatDirection = Math.random() > 0.5 ? 1 : -1; // 随机决定浮动方向
        this.angle = 0; // 控制浮动的角度
        this.vy = Math.random() * 0.05 - 0.07; // 随机浮动速度
    }

    // 动态计算 x 的方法
    calculateX() {
        return GRID.HORIZONTAL_MARGIN + this.xModifier * this.containerSize + this.containerSize * 0.5 - this.width * 0.5;
    }

    // 动态计算 y 的方法
    calculateY() {
        return GRID.VERTICAL_MARGIN + this._yModifier * this.containerSize + this.containerSize * 0.5 - this.height * 0.5;
    }

    // 设置 yModifier 时自动更新 y 的值
    set yModifier(value) {
        this._yModifier = value; // 更新私有变量
        this.y = this.calculateY(); // 重新计算 y
    }

    // 获取 yModifier 的值
    get yModifier() {
        return this._yModifier;
    }

    draw(context) {
        if (this.y > 0 && this.y < CANVAS.HEIGHT - GRID.VERTICAL_MARGIN - GRID.UNIT_SIZE * 1.7) {
            if (SETTINGS.DEBUG) context.strokeRect(this.x, this.y, this.width, this.height);

            context.save(); // 保存当前绘图状态
            context.translate(this.x + this.width * 0.5, this.y + this.height * 0.5); // 移动到中心点
            context.rotate(this.rotationAngle * Math.PI / 180); // 旋转角度转换为弧度
            context.translate(-(this.x + this.width * 0.5), -(this.y + this.height * 0.5)); // 恢复原点

            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
            context.restore(); // 恢复绘图状态
        }
    }

    update(deltaTime, input) {
        this.currentState.handleInput(input);

        if (this.y > 0) {
            if (this.isRotating) {
                this.animateRotation(deltaTime);
            } else {
                this.rotationDelay -= deltaTime;
                if (this.rotationDelay <= 0) {
                    this.startRotation(); // 开始旋转动画
                }
            }

            // 浮动动画处理
            this.angle += this.vy;
            this.y += Math.cos(this.angle) * this.floatDirection * 0.3; // 使用不同的幅度和方向
        }

        // 根据剩余距离和速度进行移动
        if (this.remainingDistance > 0) {
            const moveStep = Math.min(50, this.remainingDistance); // 确保不会移动超出剩余距离
            this.y += moveStep;
            this.remainingDistance -= moveStep;

            if (this.remainingDistance <= 0) {
                this.setState(states.PAUSE); // 移动完成后切换回 PAUSE 状态
            }
        }

        if (this.y >= CANVAS.HEIGHT - GRID.VERTICAL_MARGIN - GRID.UNIT_SIZE * 1.7) this.markedForDeletion = true;
    }

    setState(state) {
        this.currentState = this.state[state];
        this.currentState.enter();
    }

    // 开始旋转动画
    startRotation() {
        this.isRotating = true;
        this.rotationState = 1; // 顺时针旋转
    }

    // 处理旋转动画
    animateRotation(deltaTime) {
        if (this.rotationState === 1) {
            // 顺时针旋转
            this.rotationAngle += this.rotationStep;
            if (this.rotationAngle >= 37) {
                this.rotationState = 2; // 旋转到 30 度后切换到逆时针
            }
        } else if (this.rotationState === 2) {
            // 逆时针旋转
            this.rotationAngle -= this.rotationStep;
            if (this.rotationAngle <= 0) {
                this.rotationState = 3; // 旋转回原位置后切换到逆时针 30 度
            }
        } else if (this.rotationState === 3) {
            // 逆时针旋转 30 度
            this.rotationAngle -= this.rotationStep;
            if (this.rotationAngle <= -37) {
                this.rotationState = 4; // 旋转到 -30 度后切换到顺时针 30 度
            }
        } else if (this.rotationState === 4) {
            // 顺时针旋转 30 度
            this.rotationAngle += this.rotationStep;
            if (this.rotationAngle >= 0) {
                this.rotationState = 0; // 旋转回原位置后完成动画
                this.isRotating = false; // 停止旋转
                this.rotationDelay = Math.random() * 1000 + 3000; // 重新设置随机延迟
            }
        }
    }
}
