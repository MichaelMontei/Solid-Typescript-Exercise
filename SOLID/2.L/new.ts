
//Looked up what an interface is actually doing -> we can pass properties here, but also methods
//So lets pass the two methods used in the old.ts
interface Discounts {
    apply(price : number) : number
    showCalculation(price : number) : string
}

// @ts-ignore
class Discount {

    protected _value: number;

    constructor(value: number) {
        this._value = value;
    }
}

// Here we make the first class that extends from our parent class and we need to implement our interface
class VariableDiscount extends Discount implements Discounts {

    constructor(value: number) {
        // @ts-ignore
        super(value);
    }
    // @ts-ignore
    apply(price : number) : number{
        // @ts-ignore
        return (price - (price * this._value / 100));
    }
    // @ts-ignore
    showCalculation(price : number) : string{
        // @ts-ignore
        return price + " € -  "+ this._value +"%";
    }
}

class FixedDiscount extends Discount implements Discounts {

    constructor(value: number) {
        // @ts-ignore
        super(value);
    }
    // @ts-ignore
    apply(price : number) : number{
        // @ts-ignore
        return Math.max(0, price - this._value);
    }
    // @ts-ignore
    showCalculation(price : number) : string{
        // @ts-ignore
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }
}

class NoDiscount extends Discount implements Discounts {

    constructor(value: number) {
        // @ts-ignore
        super(value);
    }
    // @ts-ignore
    apply(price : number) : number{
        // @ts-ignore
        return price;
    }
    // @ts-ignore
    showCalculation(price : number) : string{
        // @ts-ignore
        return "No discount";
    }
}

