


# This is a Javascript Weather Dashboard.

# Retreive from Current Conditions API

The user is asked to input a zip code to return the current temperature 
for that area in the USA from the Openweather API.

# Graphing Data from Forcast API 

Upon inputting the zip code, a graph is presented using a library from ploty.com. A second api from
Openweather which returns historical weather data, which is pushed into an array, along with another
array which gets timestamp data.  The arrays are then used to plot a graph of temperature over time, 
in three hour intervals over the course of five days.   
The temperature is graphed in Kelvin. 

# Conversion from K

Then since it's in Kelvin, the option of converting the temperature to Farenheit and Celcius
is presented.  Simply input the temperature and select either celcius or farenheit, and then press
the 'convert' button.  


# The app can be executed by placing files in a local directory and then running the index.html file
in a web browser.

