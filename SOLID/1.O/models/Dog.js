"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(name, sound, type) {
        super(name, sound, type);
    }
}
exports.Dog = Dog;
