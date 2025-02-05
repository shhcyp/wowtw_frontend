class Layer {
    constructor(image, width, height, speedModifier) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.x = 0;
        this.y = 0;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
export class Background {
    constructor(game) {
        this.game = game;
        this.image01 = document.getElementById('background_test_01_1x');
        this.width = 1314;
        this.height = 720;
        this.x = 0;
        this.y = 0;

        this.layer01 = new Layer(this.image01, this.width, this.height, 0);

        this.backgrounds = [this.layer01];
    }

    draw(context) {
        this.backgrounds.forEach(layer => {
            layer.draw(context);
        });
    }
}