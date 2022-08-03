export class ElectricOven {
    constructor() {
        this._isOn = false;
    }
    on() {
        this.electricityOn();
    }
    // @ts-ignore
    off() {
        this.electricityOff();
    }
    electricityOn() {
        setTimeout(function () {
            // @ts-ignore
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE ELECTRICITY IS ON!</p>";
        }, 1000);
        console.log("THE ELECTRICITY IS ON!");
        this._isOn = true;
    }
    electricityOff() {
        setTimeout(function () {
            // @ts-ignore
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE ELECTRICITY IS OFF!</p><hr>";
        }, 3000);
        console.log("THE ELECTRICITY IS OFF!");
        this._isOn = false;
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function () {
                // @ts-ignore
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                // @ts-ignore
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no electricity!");
        }
    }
}
