export class FixedDiscount {
    constructor(value) {
        this._value = value;
    }
    apply(price) {
        let divide = 100;
        return (price - (price * this._value / divide));
    }
    showCalculation(price) {
        return price + " € -  " + this._value + "%";
    }
}
