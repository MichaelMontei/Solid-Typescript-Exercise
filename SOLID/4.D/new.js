// @ts-ignore
import { Oven } from "./Oven";
// @ts-ignore
import { ElectricOven } from "./ElectricOven";
// @ts-ignore
import { Restaurant } from "./Restaurant";
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");
let crepery = new Restaurant("Crepery", new ElectricOven());
crepery.Cook("crepes");
