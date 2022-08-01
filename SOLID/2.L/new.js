"use strict";
// @ts-ignore
class Discount {
    constructor(value) {
        this._value = value;
    }
}
// Here we make the first class that extends from our parent class and we need to implement our interface
class VariableDiscount extends Discount {
    constructor(value) {
        // @ts-ignore
        super(value);
    }
    // @ts-ignore
    apply(price) {
        // @ts-ignore
        return (price - (price * this._value / 100));
    }
    // @ts-ignore
    showCalculation(price) {
        // @ts-ignore
        return price + " € -  " + this._value + "%";
    }
}
class FixedDiscount extends Discount {
    constructor(value) {
        // @ts-ignore
        super(value);
    }
    // @ts-ignore
    apply(price) {
        // @ts-ignore
        return Math.max(0, price - this._value);
    }
    // @ts-ignore
    showCalculation(price) {
        // @ts-ignore
        return price + "€ -  " + this._value + "€ (min 0 €)";
    }
}
class NoDiscount extends Discount {
    constructor(value) {
        // @ts-ignore
        super(value);
    }
    // @ts-ignore
    apply(price) {
        // @ts-ignore
        return price;
    }
    // @ts-ignore
    showCalculation(price) {
        // @ts-ignore
        return "No discount";
    }
}
