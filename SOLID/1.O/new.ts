import {Animal} from "./models/Animal.js";
import {Cat} from "./models/Cat.js";
import {Dog} from "./models/Dog.js";
import {Parrot} from "./models/Parrot.js";
import {Saapjen} from "./models/Saapjen.js";

class Zoo {

    private _animals: Array<Animal> = new Array<Animal>();

    public addAnimal(animal: Animal) { // original code: public addAnmial(animal; Object)
        this._animals.push(animal);
    }

    get animals(): Array<Animal> { //original code: get animals()= Array<object>
        return this._animals;
    }

}

let zoo = new Zoo;
zoo.addAnimal(new Cat("Nala", "Miaaaauw", "Cat"));
zoo.addAnimal(new Dog("Cookie", "Wafwafwaf", "Doggo"));
zoo.addAnimal(new Parrot("Jefke", "Halloooo, CoooCooa", "Parrot"));
zoo.addAnimal(new Saapjen("Bart", "Meeeeuuueueueeheh", "Sheep"));
zoo.animals.forEach((animal: Animal) => {
    // @ts-ignore
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.sound + "<br>");
});

