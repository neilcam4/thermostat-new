describe("THERMOSTAT", function(){
    let DEFAULT_TEMP = 20;
    let MIN_TEMP = 10;
    let MAX_TEMP = 32;
    let MAX_TEMP_PSV = 25;

    // Thermostat starts at 20 degrees
    it("describes initial temperature is 20C", function(){
        let thermostat = new Thermostat ()
        expect(thermostat.temperature).toEqual(DEFAULT_TEMP)
    })
    // You can increase the temperature with an up function
    it("describes increasing temperature by 1", function(){
        let thermostat = new Thermostat ()
        thermostat.increase()
        console.log(thermostat.temperature)
        expect(thermostat.temperature).toEqual(DEFAULT_TEMP + 1)
    })
    // You can decrease the temperature with a down function
    it("describes increasing temperature by 1", function(){
        let thermostat = new Thermostat ()
        thermostat.decrease()
        expect(thermostat.temperature).toEqual(DEFAULT_TEMP - 1)
    })
    // The minimum temperature is 10 degrees
    it("describes minimum temperature is 10C", function(){
        let thermostat = new Thermostat ()
        thermostat.temperature = MIN_TEMP
        thermostat.decrease()
        expect(thermostat.temperature).toEqual(MIN_TEMP)
    })
    // If the maximum temperature is 32 degrees
    it("describes the maximum temperature is 32 degrees", function(){
        let thermostat = new Thermostat ()
        thermostat.temperature = 32
        thermostat.increase()
        expect(thermostat.temperature).toEqual(MAX_TEMP)
    })
    // If power saving mode is on, the maximum temperature is 25 degrees
    it("describes the maximum temperature is 25 degrees if power saving mode ON", function(){
        let thermostat = new Thermostat ()
        thermostat.temperature = MAX_TEMP_PSV
        thermostat.powerSavingModeOn()
        thermostat.increase()
        expect(thermostat.temperature).toEqual(MAX_TEMP_PSV)
    })
    //Power saving mode is on by default
    it("describes power saving mode ON by default", function(){
        let thermostat = new Thermostat ()
        expect(thermostat.powerSaveMode).toBe(true)
    })
    //You can reset the temperature to 20 with a reset function
    it("describes resetting temp to 20", function(){
        let thermostat = new Thermostat ()
        thermostat.increase()
        thermostat.reset()
        expect(thermostat.temperature).toEqual(DEFAULT_TEMP)
    })
    // You can ask about the thermostat's current energy usage: 
    // < 18 is low-usage,
    //  < 25 is medium-usage, anything else is high-usage.
    it("describes current energy usage as low if below 18", function(){
        let thermostat = new Thermostat ()
        thermostat.decrease()
        thermostat.decrease()
        thermostat.decrease()
        console.log(thermostat.temperature)
        thermostat.checkEnergyUsage()
        expect(thermostat.energyUsage).toEqual("LOW")
    })
})