import { Oven } from "./Oven";
import { ElectricOven } from "./ElectricOven";


export class Restaurant {

    private _name : string;
    private _type : Oven | ElectricOven;


    constructor(name: string, type: Oven | ElectricOven) {
        this._name = name;
        this._type = type;
    }

    public Cook(item : string) {
        this._type.on();
        this._type.off();
        this._type.bake(item);
    }
}