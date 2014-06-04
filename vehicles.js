var vehicles = (function () {

    Function.prototype.inherits = function (parent) {
        this.prototype = new parent();
        this.prototype.constructor = parent;
    };

    Function.prototype.extends = function (parent) {
        for (var i = 1; i < arguments.length; i += 1) {
            var name = arguments[i];
            this.prototype[name] = parent.prototype[name];
        }

        return this;
    }

    //Vehicle
    function Vehicle(speed, propulsionUnits) {
        this.speed = speed;
        this.propulsionUnits = propulsionUnits;
    }
    Vehicle.prototype.accelerate = function () {
        for (var i = 0, len = this.propulsionUnits.length; i < len; i++) {
            this.speed += this.propulsionUnits[i].getAcceleration();
        }
    }

    //Land Vehicle
    function LandVehicle(speed, wheels) {
        Vehicle.apply(this, arguments);
    }
    LandVehicle.inherits(Vehicle);

    //Air vehicle
    function AirVehicle(speed, propelingNozzle) {
        Vehicle.apply(this, arguments)
    }
    AirVehicle.inherits(Vehicle);
    AirVehicle.prototype.switchAfterBurners = function () {
        if (this.propulsionUnits.propelingNozzle.afterburner == "off") {
            this.propulsionUnits.propelingNozzle.afterburner = "on";
        } else {
            this.propulsionUnits.propelingNozzle.afterburner = "off";
        }
    }

    //Water vehicle
    function WaterVehicle(speed, propellers, numberOfPropellers) {
        Vehicle.apply(this, arguments);
    }
    WaterVehicle.inherits(Vehicle);
    WaterVehicle.prototype.setPropellersRotationDirection = function (rotationDirection) {
        for (var i = 0; i < this.propulsionUnits.length; i++) {
            if (this.propulsionUnits[i] instanceof Propeller) {
                this.propulsionUnits[i].rotationDirection = rotationDirection;
            }
        }
    }

    // Amphibian vehicle
    function Amphibian(speed, propellers, wheels, mode) {

        var propulsionUnits = [];
        for (var i = 0; i < propellers.length; i++) {
            propulsionUnits.push(propellers[i]);
        }

        for (var j = 0; j < wheels.length; j++) {
            propulsionUnits.push(wheels[i]);
        }

        Vehicle.call(this, speed, propulsionUnits);
        this.mode = mode;
    }

    Amphibian.inherits(Vehicle);
    Amphibian.extends(WaterVehicle, "setPropellersRotationDirection");

    Amphibian.prototype.accelerate = function () {
        if (this.mode == "land") {
            for (var i = 0; i < this.propulsionUnits.length; i++) {
                if (this.propulsionUnits[i] instanceof Wheel) {
                    this.speed += this.propulsionUnits[i].getAcceleration();
                }
            }
        } else {
            for (var i = 0; i < this.propulsionUnits.length; i++) {
                if (this.propulsionUnits[i] instanceof Propeller) {
                    this.speed += this.propulsionUnits[i].getAcceleration();
                }
            }
        }
    }

    //Propulsion Unit
    function PropulsionUnit() {
    }

    //Wheel unit
    function Wheel(radius) {
        this.radius = radius;
    }
    Wheel.inherits(PropulsionUnit);
    Wheel.prototype.getAcceleration = function () {
        return parseInt(2 * Math.PI * this.radius);
    }

    //Propelling nozzle unit
    function PropellingNozzle(power, afterburner) {
        this.power = power;
        this.afterburner = afterburner;
    }
    PropellingNozzle.inherits(PropulsionUnit);
    PropellingNozzle.prototype.getAcceleration = function () {
        if (this.afterburner || this.afterburner=="on") {
            return parseInt(this.power * 2);
        } else {
            return parseInt(this.power);
        }
    }

    //Propeller unit
    function Propeller(fins, spinDirection) {
        this.fins = fins;
        this.spinDirection = spinDirection;
    }
    Propeller.inherits(PropulsionUnit);
    Propeller.prototype.getAcceleration = function () {
        if (this.spinDirection == "counter-clockwise") {
            return paerseInt(-this.fins);
        } else {
            return this.fins;
        }
    }
	
	 return {
        LandVehicle: LandVehicle,
        AirVehicle: AirVehicle,
        WaterVehicle: WaterVehicle,
        Amphibian: Amphibian
    };
})();