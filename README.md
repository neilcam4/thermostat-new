# Thermostat and Global Weather API

This is a hobby project, built with Javascript deployed here http://pure-meadow-00554.herokuapp.com/

The first goal was to produce a thermostat that has a number of prototype functions to change the thermostat according to the User Stories below. It was built with TDD and Jasmine test suite.

The second goal was to add Global Weather Checker is built using an API call to Open Weather API. The object received is reformatted and displayed on screen.

Bootstrap is used to style the page.

`User Stories for Thermostat`

Thermostat starts at 20 degrees

You can increase the temperature with an up function

You can decrease the temperature with a down function

The minimum temperature is 10 degrees

If power saving mode is on, the maximum temperature is 25 degrees

If power saving mode is off, the maximum temperature is 32 degrees

Power saving mode is on by default

You can reset the temperature to 20 with a reset function

You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

`User Stories for Global Weather API`

User to select from a range of 5 global cities

User to see local temperature

User to see wind speed

User to see sunrise time in hours/minutes/seconds

User to see sunset time in hours/minutes/seconds

![Thermostat](https://github.com/neilcam4/thermostat-new/blob/master/thermostat.png "Thermostat")

