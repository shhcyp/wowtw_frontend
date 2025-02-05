import {Energy} from "./energy.js";
import {Landmark} from "./landmark.js";

class Level {
    constructor() {
        // this.level = level;
    }

    generateEnergies(chars, xModifiers) {
        const charArray = typeof chars === 'string' ? chars.split('') : chars;

        return charArray.map((char, index) => {
            const xModifier = xModifiers[index] || 0; // 从固定的数组中取值
            const yModifier = -(index + 1); // 初始 yModifier 赋值为 -(index + 1)
            return new Energy(char, this.image, 0, index, xModifier, yModifier);
        });
    }

    shuffleEnergies(energies) {
        // 打乱数组顺序
        for (let i = energies.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [energies[i], energies[j]] = [energies[j], energies[i]]; // 交换位置
        }

        // 更新 yModifier 为 -(index + 1)
        energies.forEach((energy, index) => {
            energy.yModifier = -(index + 1);
        });

        return energies;
    }

    generateLandmark(char, xs, ys) {
        const charArray = typeof char === 'string' ? char.split('') : char;

        return charArray.map((_, index) => {
            const x = xs[index] || 0;
            const y = ys[index] || 0;
            return new Landmark(x, y);
        });

    }
}

// 整体布局
export class Level0 extends Level {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('a_z_1x');
    }

    generateLevel0Energies(chars, startX, startY) {
        // 将字符串转换为数组
        const charArray = typeof chars === 'string' ? chars.split('') : chars;

        return charArray.map((char, index) => {
            const x = startX + (index % 10);
            const y = startY + Math.floor(index / 10);
            return new Energy(char, this.image, 0, index, x, y);
        });
    }
}

// 1～0 + A ～ Z + ，。；正常顺序
export class Level1 extends Level {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('level1_energy_1x');
    }

    energiesReady() {
        const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ,./;';
        const xModifiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 5, 3, 3, 3, 4, 5, 6, 8, 7, 8, 9, 7, 6, 9, 10, 1, 4, 2, 5, 7, 4, 2, 2, 6, 1, 8, 9, 10, 10];

        // 调用父类方法
        return this.generateEnergies(chars, xModifiers);
    }
}

// 1～0 + A ～ Z + ，。；随机顺序
export class Level2 extends Level {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('level1_energy_1x');
    }

    energiesReady() {
        const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ,./;';
        const xModifiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 5, 3, 3, 3, 4, 5, 6, 8, 7, 8, 9, 7, 6, 9, 10, 1, 4, 2, 5, 7, 4, 2, 2, 6, 1, 8, 9, 10, 10];
        const energies = this.generateEnergies(chars, xModifiers); // 调用父类方法生成能量实例

        return this.shuffleEnergies(energies); // 打乱顺序并更新 yModifier
    }
}

// 声母 + 单韵母正常顺序（带提示）
export class Level3 extends Level {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('level3_energy_1x');
    }

    energiesReady() {
        const chars = 'AOEIUUBPMFDTNLGKHJQXZCSVIURYW';
        const xModifiers = [1, 9, 3, 8, 7, 7, 5, 10, 7, 4, 3, 5, 6, 9, 5, 8, 6, 7, 1, 2, 1, 3, 2, 4, 8, 7, 4, 6, 2];
        return this.generateEnergies(chars, xModifiers);
    }
}

// 复韵母正常顺序（带提示）
export class Level4 extends Level {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('level4_energy_1x');
    }

    energiesReady() {
        const chars = 'LZVKBQXTRJFNPPHG;SWCMDSWOYRD';
        const xModifiers = [9, 1, 4, 8, 5, 1, 2, 5, 4, 7, 4, 6, 10, 10, 6, 5, 10, 2, 2, 3, 7, 3, 2, 2, 9, 6, 4, 3];
        return this.generateEnergies(chars, xModifiers);
    }
}

export class Level5 extends Level {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('level5_energy_1x');
    }

    energiesReady() {
        const chars = 'AOEIUUBPMFDTNLGKHJQXZCSVIURYW';
        const xModifiers = [1, 9, 3, 8, 7, 7, 5, 10, 7, 4, 3, 5, 6, 9, 5, 8, 6, 7, 1, 2, 1, 3, 2, 4, 8, 7, 4, 6, 2];
        return this.generateEnergies(chars, xModifiers);
    }
}

// 复韵母正常顺序（带提示）
export class Level6 extends Level {
    constructor(game) {
        super();
        this.game = game;
        this.image = document.getElementById('level6_energy_1x');
    }

    energiesReady() {
        const chars = 'LZVKBQXTRJFNPPHG;SWCMDSWOYRD';
        const xModifiers = [9, 1, 4, 8, 5, 1, 2, 5, 4, 7, 4, 6, 10, 10, 6, 5, 10, 2, 2, 3, 7, 3, 2, 2, 9, 6, 4, 3];
        return this.generateEnergies(chars, xModifiers);
    }
}