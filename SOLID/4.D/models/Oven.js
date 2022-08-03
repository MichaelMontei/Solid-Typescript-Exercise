export class Oven {
    constructor() {
        this._isOn = false;
    }
    // @ts-ignore
    on() {
        this.lightGas();
    }
    // @ts-ignore
    off() {
        this.extinguishGas();
    }
    lightGas() {
        setTimeout(function () {
            // @ts-ignore
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }
    extinguishGas() {
        setTimeout(function () {
            // @ts-ignore
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
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
            console.log("there is no gas!"); //insert fart humor here
        }
    }
}
