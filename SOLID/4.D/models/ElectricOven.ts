import { devices } from "./InterfaceDevice";

export class ElectricOven implements devices {

    private _isOn : boolean = false;

    public on() : void {
        this.electricityOn();
    }

    // @ts-ignore
    public off() : void {
        this.electricityOff();
    }

    public electricityOn() : void
    {
        setTimeout(function (){
            // @ts-ignore
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRICITY IS ON!</p>";
        }, 1000);
        console.log("THE ELECTRICITY IS ON!");
        this._isOn = true;
    }

    public electricityOff() : void
    {
        setTimeout(function (){
            // @ts-ignore
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRICITY IS OFF!</p><hr>";
        }, 3000);
        console.log("THE ELECTRICITY IS OFF!");
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                // @ts-ignore
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                // @ts-ignore
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no electricity!");
        }


}