export class Restaurant {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    Cook(item) {
        this._type.on();
        this._type.off();
        this._type.bake(item);
    }
}
