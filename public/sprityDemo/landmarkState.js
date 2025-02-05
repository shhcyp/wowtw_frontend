const states = {
    READY: 0,
    SHOW: 1,
    DISAPPEAR: 2,
}

class LandmarkState {
    constructor(state) {
        this.state = state;
    }
}

export class Ready extends LandmarkState {
    constructor(landmark) {
        super('READY');
        this.landmark = landmark;
    }

    enter() {}
}