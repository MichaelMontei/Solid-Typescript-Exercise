export class Animal {

    protected _name: string;
    protected _sound: string;
    protected _type: string;


    constructor(name: string, sound: string, type: string) {
        this._name = name;
        this._sound = sound;
        this._type = type;
    }

    get name(): string {
        return this._name;
    }

    get sound(): string {
        return this._sound;
    }

    get type(): string {
        return this._type;
    }
}