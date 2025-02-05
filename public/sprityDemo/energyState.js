export const states = {
    PAUSE: 0,
    MOVE: 1,
}

class State {
    constructor(state) {
        this.state = state;
    }
}

export class Pause extends State {
    constructor(energy) {
        super('PAUSE');
        this.energy = energy;
    }

    enter() {
    }

    handleInput(input) {
        if (input.includes(' ')) this.energy.setState(states.MOVE);
    }
}

export class Move extends State {
    constructor(energy) {
        super('MOVE');
        this.energy = energy;
    }

    enter() {
        // this.energy.speed = 0;
        this.energy.remainingDistance = 5 * this.energy.maxSpeed;
    }

    handleInput(input) {
    }
}