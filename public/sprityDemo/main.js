import {AvatarCj, AvatarCyp} from "./avatar.js";
import {Level1, Level2, Level3, Level4, Level5, Level6} from "./levels.js";
import {Input} from "./input.js";
import {UI} from "./UI.js";
import {Grid} from "./grids.js";
import {CANVAS} from "./constants.js";
import {SETTINGS} from "./settings.js";
import {Landmark} from "./landmark.js";
import {Background} from "./background.js";

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = CANVAS.WIDTH;
    canvas.height = CANVAS.HEIGHT;

    class Game {
        constructor() {
            this.initializeGame(); // 初始化游戏内容
        }

        initializeGame() {
            this.width = canvas.width;
            this.height = canvas.height;

            this.score = 0;

            this.speed = 0;
            this.maxSpeed = 3;

            this.background = new Background(this);
            this.grid = new Grid(this);
            this.input = new Input(this);

            // 所有关卡实例
            this.levels = {
                level1: new Level1(this),
                level2: new Level2(this),
                level3: new Level3(this),
                level4: new Level4(this),
                level5: new Level5(this),
                level6: new Level6(this),
            };

            // 默认当前关卡
            this.currentLevel = this.levels.level1;

            this.cyp = new AvatarCyp(this);
            this.cj = new AvatarCj(this);

            this.UI = new UI(this);

            this.energies = [];
            this.visibleEnergies = [];

            this.landmarks = [];

            this.debug = false;
            this.time = 0;
            this.maxTime = 18000000;
            this.gameOver = false;

            this.particles = [];
            this.maxParticles = 33;

            this.collisions = [];
        }

        draw(context) {
            this.background.draw(context);

            this.landmarks.forEach(landmark => {
                landmark.draw(context);
            });

            if (SETTINGS.SHOW_GRID) this.grid.draw(context);

            this.energies.forEach(energy => {
                energy.draw(context);
            });

            this.cyp.draw(context);
            this.cj.draw(context);

            this.UI.draw(context);

            this.particles.forEach(particle => {
                particle.draw(context);
            });

            this.collisions.forEach(collision => {
                collision.draw(context);
            });
        }

        update(deltaTime) {
            this.time += deltaTime;
            if (this.time >= this.maxTime) this.gameOver = true;

            // 检查能量数组是否为空，若为空则重新添加能量
            if (this.energies.length === 0) {
                this.energies = this.currentLevel.energiesReady();
            }

            this.energies.forEach(energy => {
                energy.update(deltaTime, this.input.keys);
            });

            this.energies = this.energies.filter(energy => !energy.markedForDeletion && energy.y <= this.height - this.grid.verticalMargin - this.grid.unitSize);

            this.visibleEnergies = this.energies.filter(energy => energy.y >= 0 && energy.y < this.height  - this.grid.verticalMargin - this.grid.unitSize);

            this.grid.update(this.input.keys, this.visibleEnergies);

            // 将坐标转换为 Landmark 实例
            this.landmarks = this.grid.landmarkPositions.map(position => {
                const [row, col, frameY] = position.split('-').map(Number); // 解析 '3-4' -> [3, 4]
                return new Landmark(col, row, frameY); // Landmark 的构造函数参数顺序为 x, y
            });

            this.cyp.update(deltaTime, this.input.leftPressed);
            this.cj.update(deltaTime, this.input.rightPressed);

            if (this.particles.length > this.maxParticles) {
                this.particles = this.maxParticles;
            }

            // 碰撞动画
            this.collisions.forEach((collision, index) => {
                collision.update(deltaTime);
                if (collision.markedForDeletion) this.collisions.splice(index, 1);
            });
        }

        // 切换关卡
        switchLevel(levelName) {
            if (this.levels[levelName]) {
                this.currentLevel = this.levels[levelName];
                this.energies = []; // 清空当前能量块以重新生成
                console.log(`Switched to ${levelName}`);
            } else {
                console.error(`Level ${levelName} does not exist.`);
            }
        }

        // 重置游戏并切换到指定关卡
        resetGame(selectedLevel) {
            this.initializeGame(); // 重新初始化游戏状态
            this.switchLevel(selectedLevel); // 切换到选择的关卡
            console.log(`Game has been reset to ${selectedLevel}`);
        }
    }

    const game = new Game();

    // 监听下拉菜单的变化
    const levelSelect = document.getElementById('level-select');
    levelSelect.addEventListener('change', (event) => {
        const selectedLevel = event.target.value;
        game.resetGame(selectedLevel); // 在切换关卡的同时重置游戏
        levelSelect.blur(); // 让 select 元素失去焦点
    });

    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);

        if (!game.gameOver) requestAnimationFrame(animate);
    }

    animate(0);
});