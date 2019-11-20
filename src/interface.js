$(document).ready(function(){
    var thermostat = new Thermostat()
    $("#energyUsage").text(thermostat.energyUsage)
    $("#temperature").text(thermostat.temperature)
    $("#PSV").text("ON")

    $("#increaseTemp").click(function(){
        thermostat.increase()
        thermostat.checkEnergyUsage()
        $("#temperature").text(thermostat.temperature)
        $("#energyUsage").text(thermostat.energyUsage)
    })

    $("#decreaseTemp").click(function(){
        thermostat.decrease()
        thermostat.checkEnergyUsage()
        thermostat.color()
        $("#temperature").text(thermostat.temperature)
        $("#energyUsage").text(thermostat.energyUsage)
    })

    $("#powerSaveOn").click(function(){
        thermostat.powerSavingModeOn()
        $("#PSV").text("ON")
    })

    $("#powerSaveOff").click(function(){
        thermostat.powerSavingModeOff()
        $("#PSV").text("OFF")
    })

    
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#city').text(data.name);
    $("#temp").text(Math.round(data.main.temp))
    $("#wind").text(Math.round(data.wind.speed))
    let dateRise = data.sys.sunrise
    let date = new Date(dateRise*1000);
    let hours = date.getHours()
    let minutes = "0" + date.getMinutes()
    let seconds = "0" + date.getSeconds()
    console.log(date)
    $("#sunrise").text(hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2))
    let dateSet = data.sys.sunset
    let sunset = new Date(dateSet*1000)
    let hoursSet = sunset.getHours()
    let minutesSet = "0" + sunset.getMinutes()
    let secondsSet = "0" + sunset.getSeconds()
    $("#sunset").text(hoursSet + ":" + minutesSet.substr(-2) + ":" + secondsSet.substr(-2))
    console.log(data)
      })
})