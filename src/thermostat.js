let MIN_TEMP = 10;
let DEFAULT_TEMP = 20;
let MAX_TEMP = 32
let MAX_TEMP_PSV = 25

function Thermostat(){
    this.temperature = DEFAULT_TEMP;
    this.powerSaveMode = true;
    this.energyUsage = "MEDIUM"
}

Thermostat.prototype.increase =  function(){
    if (this.powerSaveMode === false){
        if(this.temperature < MAX_TEMP ){
            return this.temperature += 1;
        }  
            MAX_TEMP
       } 
        else if (this.powerSaveMode === true){
            if(this.temperature < MAX_TEMP_PSV){
                return this.temperature += 1
            } 
            return MAX_TEMP_PSV
        }
}
Thermostat.prototype.decrease = function(){
    if(this.temperature > MIN_TEMP){
        return this.temperature -= 1;
} else {
    return MIN_TEMP
    }
}

Thermostat.prototype.powerSavingModeOn =  function(){
    return this.powerSaveMode = true;
}

Thermostat.prototype.reset = function(){
    return this.temperature = DEFAULT_TEMP;
}

Thermostat.prototype.checkEnergyUsage = function(){
    if(this.temperature < 19){
        return this.energyUsage = "LOW"
    } else if(this.temperature > 18 && this.temperature < 25){
        return this.energyUsage = "MEDIUM"
    } else if(this.temperature >= 25){
        return this.energyUsage = "HIGH"
    }
}

Thermostat.prototype.powerSavingModeOff = function(){
    return this.powerSaveMode = false;
}

