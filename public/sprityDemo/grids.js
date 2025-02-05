import {GRID} from "./constants.js";
import {Move, Pause} from "./energyState.js";

export class Grid {
    constructor(game) {
        this.game = game;
        this.unitSize = GRID.UNIT_SIZE;
        this.horizentalMargin = GRID.HORIZONTAL_MARGIN;
        this.verticalMargin = GRID.VERTICAL_MARGIN;
        this.rows = 6;
        this.cols = 12;

        this.lastVisibleEnergies = new Set(); // 存储上一次的 visibleEnergies
        this.isAccess = false;
        this.landmarkPositions = []; // 存储已选择的 positions

        this.landmarkIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // 索引数组
        this.indexCounter = 0; // 计数器，用于记录当前分配的 landmarkIndex
    }

    draw(context) {
        // 绘制水平线
        for (let j = 0; j <= this.rows; j++) {
            context.beginPath(); // 开始新路径
            context.strokeStyle = "rgba(0, 0, 0, 0.37)"; // 水平线保持黑色
            context.lineWidth = 1; // 水平线宽度为 1

            context.moveTo(0, j * this.unitSize + this.verticalMargin);
            context.lineTo(this.game.width, j * this.unitSize + this.verticalMargin);

            context.stroke(); // 绘制当前路径
        }
        // 绘制垂直线
        for (let i = 0; i <= this.cols; i++) {
            context.beginPath(); // 开始新路径

            // 单独处理第六条竖线
            if (i === 6) { // 第六条竖线
                context.strokeStyle = "rgba(0, 0, 0, 0.37)"; // 红色
                context.lineWidth = 3; // 加粗
            } else {
                context.strokeStyle = "rgba(0, 0, 0, 0.37)"; // 默认黑色
                context.lineWidth = 1; // 默认宽度
            }

            // 绘制竖线
            context.moveTo(i * this.unitSize + this.horizentalMargin, 0);
            context.lineTo(i * this.unitSize + this.horizentalMargin, this.game.height);

            context.stroke(); // 绘制当前路径
        }
    }

    update(input, visibleEnergies) {
        if (this.lastVisibleEnergies.size < visibleEnergies.length && visibleEnergies.length > 0) {
            let inPosition = false;

            // 初始化lastVisibleEnergies集合，记录energies是否进入Pause状态（排除还没就位时的this.lastVisibleEnergies.size !== 0 && this.lastVisibleEnergies.size === visibleEnergies.length情况）
            visibleEnergies.forEach(energy => {
                this.lastVisibleEnergies.add(energy);

                if (energy.currentState instanceof Pause) inPosition = true;
            });

            // 在没有更新下一组energies前只放行一次
            if (this.lastVisibleEnergies.size !== 0 && this.lastVisibleEnergies.size === visibleEnergies.length && inPosition) {
                this.isAccess = true;
                inPosition = false;
            }
        }

        // 清空集合
        if (visibleEnergies.length === 0 && this.lastVisibleEnergies.size !== 0) this.lastVisibleEnergies.clear();
        visibleEnergies.forEach(energy => {
            if (energy.currentState instanceof Move) this.lastVisibleEnergies.clear();
        });

        // 确定/更新landmarks的位置
        if (this.isAccess) {
            const occupiedGrids = this.getOccupiedGrids(this.lastVisibleEnergies);
            const newPositions = this.findLandmarkGrids(occupiedGrids); // 更新 landmark 位置
            this.isAccess = false;

            // 给每个新 position 分配一个 index
            this.landmarkPositions = newPositions.map(position => {
                const index = this.landmarkIndex[this.indexCounter];
                this.indexCounter = (this.indexCounter + 1) % this.landmarkIndex.length; // 索引循环回到开头
                return `${position}-${index}`;
            });

            console.log(this.landmarkPositions)
        }
    }

    getOccupiedGrids(objects) {
        const occupiedGrids = new Set();
        objects.forEach(object => {
            const row = Math.floor((object.y + GRID.UNIT_SIZE * 0.5) / GRID.UNIT_SIZE);
            const col = Math.floor((object.x + GRID.UNIT_SIZE * 0.5) / GRID.UNIT_SIZE);

            // 添加当前网格
            occupiedGrids.add(`${row}-${col}`);

            // 添加相邻网格
            occupiedGrids.add(`${row - 1}-${col}`);      // 上方网格
            occupiedGrids.add(`${row}-${col - 1}`);      // 左侧网格
            occupiedGrids.add(`${row - 1}-${col - 1}`);  // 左上角网格
        });

        return occupiedGrids;
    }

    findLandmarkGrids(occupiedGrids) {
        // 获取当前可用网格
        const validGrids = getValidGrids();

        // 找到图片可用位置
        return findLandmarkPositions(validGrids); // 将位置返回给调用者

        // 判断一个网格是否有效func
        function isValidGrid(row, col) {
            return !occupiedGrids.has(`${row}-${col}`);
        }

        // 筛选出所有可用网格func
        function getValidGrids() {
            const leftValid = [];
            const rightValid = [];

            for (let row = 0; row < 4; row++) {
                for (let col = 0; col < 11; col++) {
                    if (isValidGrid(row, col)) {
                        if (col > 0 && col < 5) {
                            leftValid.push(`${row}-${col}`);
                        } else if (col >= 6 && col < 10) {
                            rightValid.push(`${row}-${col}`);
                        }
                    }
                }
            }

            return {leftValid, rightValid};
        }

        // 随机选择两个不重叠的有效位置
        function getRandomNonConflictingPosition(validPositions) {
            // 随机选择第一个位置
            let index1 = Math.floor(Math.random() * validPositions.length);
            let pos1 = validPositions[index1];

            // 根据第一个位置找到不与其相交的第二个位置
            let index2 = Math.floor(Math.random() * validPositions.length);
            let pos2 = validPositions[index2];

            // 确保两个位置不相交
            while (arePositionsConflicting(pos1, pos2)) {
                index2 = Math.floor(Math.random() * validPositions.length);
                pos2 = validPositions[index2];
            }

            return [pos1, pos2];
        }

        // 判断两个位置是否相交（即它们的2x2单元格是否重叠）
        function arePositionsConflicting(pos1, pos2) {
            const [row1, col1] = pos1.split('-').map(Number);
            const [row2, col2] = pos2.split('-').map(Number);

            // 获取两个位置的占用单元格范围（假设图片占用2x2单元格）
            const pos1Grid = [
                [row1, col1], [row1, col1 + 1],
                [row1 + 1, col1], [row1 + 1, col1 + 1]
            ];
            const pos2Grid = [
                [row2, col2], [row2, col2 + 1],
                [row2 + 1, col2], [row2 + 1, col2 + 1]
            ];

            // 判断两个占用单元格范围是否有重叠
            for (let [r1, c1] of pos1Grid) {
                for (let [r2, c2] of pos2Grid) {
                    if (r1 === r2 && c1 === c2) {
                        return true; // 有重叠
                    }
                }
            }
            return false; // 没有重叠
        }

        // 确定放置landmark图片的位置func
        function findLandmarkPositions(validGrids) {
            const {leftValid, rightValid} = validGrids;
            const lengthCompare = leftValid.length - rightValid.length;

            // 如果能量块完全占据左侧或者右侧
            if (lengthCompare <= -9) { // 6 rows * 5 columns
                // 右侧随机找两个位置
                return getRandomNonConflictingPosition(rightValid);
            } else if (lengthCompare >= 7) { // 6 rows * 5 columns
                // 左侧随机找两个位置
                return getRandomNonConflictingPosition(leftValid);
            } else {
                // 左右两侧各找一个位置
                const leftPosition = getRandomNonConflictingPosition(leftValid);
                const rightPosition = getRandomNonConflictingPosition(rightValid);
                return [leftPosition[0], rightPosition[0]]; // 返回左右各一个位置
            }
        }
    }


}