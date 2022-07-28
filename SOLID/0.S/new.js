var Car = /** @class */ (function () {
    function Car() {
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var Engine = /** @class */ (function () {
    function Engine() {
        this._fuel = 0;
        this._miles = 0;
        this._engineStatus = false;
        this.FUEL_MILEAGE = 10;
    }
    Object.defineProperty(Engine.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    return Engine;
}());
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    Object.defineProperty(MusicPlayer.prototype, "musicLevel", {
        get: function () {
            return this._musicLevel;
        },
        set: function (value) {
            this._musicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    MusicPlayer.prototype.turnMusicOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    MusicPlayer.prototype.turnMusicOff = function () {
        this._musicLevel = 0;
    };
    return MusicPlayer;
}());
