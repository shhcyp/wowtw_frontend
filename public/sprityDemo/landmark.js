import {GRID} from "./constants.js";

const landmarks = {
    HOMETOWN: 0,
    MIDDLE_SCHOOL: 1,
    HIGH_SCHOOL: 2,
    UNIVERSITY: 3,
    DIAN_CHI: 4,
    XI_SHAN: 5,
    CUI_HU: 6,
    JIN_MA_BI_JI: 7,
    HOME: 8,
}

export class Landmark {
    constructor(x, y, frameY) {
        this.image = document.getElementById('places_1x');
        this.width = GRID.UNIT_SIZE * 2;
        this.height = GRID.UNIT_SIZE * 2;

        this.frameX = 0;
        this.frameY = frameY;

        this.x = x * GRID.UNIT_SIZE + GRID.HORIZONTAL_MARGIN;
        this.y = y * GRID.UNIT_SIZE + GRID.VERTICAL_MARGIN;
    }

    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    update() {
    }
}