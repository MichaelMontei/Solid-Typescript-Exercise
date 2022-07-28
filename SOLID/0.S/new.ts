class Car {
    private _engine : Engine;
    private _radio : MusicPlayer;


    get engine(): Engine {
        return this._engine;
    }

    get radio(): MusicPlayer {
        return this._radio;
    }
}

class Engine {
    private _fuel : number = 0;
    private _miles : number = 0;
    private _engineStatus: boolean = false;
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    get miles(): number {
        return this._miles;
    }

    get fuel(): number {
        return this._fuel;
    }

}

class MusicPlayer {
    private _musicLevel : number = 0;
    private _oldMusicLevel : number = 50;

    get musicLevel(): number {
        return this._musicLevel;
    }

    set musicLevel(value: number) {
        this._musicLevel = value;
    }

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }
}
