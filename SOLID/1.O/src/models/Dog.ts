import {Animal} from "./Animal";

export class Dog extends Animal {

    constructor(name: string, sound: string, type: string) {
        super(name, sound, type);
    }
}