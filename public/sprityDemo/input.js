import {SETTINGS} from "./settings.js";

export class Input {
    constructor(game) {
        this.game = game;
        this.keys = []
        this.leftKeys = ['Q', 'W', 'E', 'R', 'T', 'A', 'S', 'D', 'F', 'G', 'Z', 'X', 'C', 'V', 'B', '1', '2', '3', '4', '5', ' '];
        this.rightKeys = ['Y', 'U', 'I', 'O', 'P', 'H', 'J', 'K', 'L', ';', 'N', 'M', ',', '.', '/', '6', '7', '8', '9', '0', ' '];
        this.leftPressed = new Set();
        this.rightPressed = new Set();

        window.addEventListener('keydown', e => {
            const key = e.key.toUpperCase();

            if (this.leftKeys.includes(key)) this.leftPressed.add(key);

            if (this.rightKeys.includes(key)) this.rightPressed.add(key);

            if (this.keys.indexOf(e.key) === -1) this.keys.push(key);

            if (key === 'F2') SETTINGS.DEBUG = !SETTINGS.DEBUG;
            if (key === 'F1') SETTINGS.SHOW_GRID = !SETTINGS.SHOW_GRID;

            // console.log(this.leftPressed);
        });

        window.addEventListener('keyup', e => {
            const key = e.key.toUpperCase();
            const index = this.keys.indexOf(key);

            if (this.leftKeys.includes(key)) this.leftPressed.delete(key);

            if (this.rightKeys.includes(key)) this.rightPressed.delete(key);

            if (index > -1) this.keys.splice(index, 1);

            // console.log(this.rightPressed);
        });
    }
}