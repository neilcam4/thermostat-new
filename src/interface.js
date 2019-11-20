$(document).ready(function(){
    var thermostat = new Thermostat()
    $("#energyUsage").text(thermostat.energyUsage)
    $("#temperature").text(thermostat.temperature)

    $("#increaseTemp").click(function(){
        thermostat.increase()
        thermostat.checkEnergyUsage()
        $("#temperature").text(thermostat.temperature)
        $("#energyUsage").text(thermostat.energyUsage)
    })

    $("#decreaseTemp").click(function(){
        thermostat.decrease()
        thermostat.checkEnergyUsage()
        $("#temperature").text(thermostat.temperature)
        $("#energyUsage").text(thermostat.energyUsage)
    })

    $("#powerSaveOn").click(function(){
        thermostat.powerSavingModeOn()
    })

    $("#powerSaveOff").click(function(){
        thermostat.powerSavingModeOff()
    })

    
    
    
})