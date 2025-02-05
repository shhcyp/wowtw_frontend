export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 45;
        this.fontFamily = 'Helvetica';
        // this.fontFamily = 'impact';
    }

    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.fontStyle = 'black';
        context.textAlign = 'left';

        // score
        context.fillText('Score: ' + this.game.score, 10, 45)

        // timer
        context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 10, 90);

        // game over message
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            context.fillText('GAME OVER', this.game.width * 0.5, this.game.height * 0.5);
        }
    }
}