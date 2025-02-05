const states = {
    READY: 0,
    WAITING: 1,
    FLOATING: 2,
    JUMPING: 3,
    FLYING: 4,
    FLASHING: 5
}

class State {
    constructor(avatar, state) {
        this.avatar = avatar;
        this.state = state;
    }

    update(deltaTime) {
        /* 眨眼状态 */
        if (!this.avatar.isBlinking) {
            this.avatar.blinkTimer += deltaTime;
            if (this.avatar.blinkTimer >= this.avatar.blinkInterval) {
                this.avatar.isBlinking = true;
                this.avatar.blinkTimer = 0;
                this.avatar.blinkCount = 0;
                this.avatar.blinkLimit = Math.random() < 0.7 ? 1 : 2;
                if (this.avatar.frameY !== 0) this.avatar.frameY = Math.floor(Math.random() * 8) + 1;
            }
        }

        if (this.avatar.isBlinking) {
            this.avatar.frameTimer += deltaTime;
            if (this.avatar.frameTimer >= this.avatar.frameInterval) {
                this.avatar.frameTimer = 0;
                if (this.avatar.frameX < this.avatar.maxFrameX) {
                    this.avatar.frameX++;
                } else {
                    this.avatar.frameX = 0;
                    this.avatar.blinkCount++;
                    if (this.avatar.blinkCount >= this.avatar.blinkLimit) {
                        this.avatar.blinkInterval = Math.random() * 2000 + 1000;
                        this.avatar.isBlinking = false;
                        this.avatar.blinkTimer = 0;
                    }
                }
            }
        }
    }
}

export class Ready extends State {
    constructor(avatar) {
        super(avatar, 'READY');
    }

    enter() {
        this.avatar.frameX = 0;
        this.avatar.frameY = 0;
        this.avatar.maxFrameX = 4;
        console.log('READY')
    }
}

export class Waiting extends State {
    constructor(avatar) {
        super(avatar, 'WAITING');
    }

    enter() {
        this.avatar.frameX = 0;
        this.avatar.frameY = Math.floor(Math.random() * 8) + 1;
        this.avatar.maxFrameX = 4;
    }
}