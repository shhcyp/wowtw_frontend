export class CollisionAnimation {
    constructor(game, x, y) {
        this.game = game;
        this.image = document.getElementById('collisionAnimation');
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.sizeModifier = 1.1;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.frameX = 0;
        this.maxFrame = 4;
        this.markedForDeletion = false;
        this.fps = Math.random() * 10 + 17;
        this.frameTimer = 0;
        this.frameInterval = 1000 / this.fps;
    }

    draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }

    update(deltaTime) {
        this.frameTimer += deltaTime;
        if (this.frameTimer > this.frameInterval) {
            this.frameX++;
            this.frameTimer = 0;
        }
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
}