export class Animal {
    constructor(name, sound, type) {
        this._name = name;
        this._sound = sound;
        this._type = type;
    }
    get name() {
        return this._name;
    }
    get sound() {
        return this._sound;
    }
    get type() {
        return this._type;
    }
}
