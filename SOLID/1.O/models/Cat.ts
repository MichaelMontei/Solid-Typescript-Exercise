import {Animal} from "./Animal";

export class Cat extends Animal {

    constructor(name: string, sound: string, type: string) {
        super(name, sound, type);
    }
}