
//event handler that runs getWeatherData function when button is clicked.
document.getElementById('displaydata')
.addEventListener('click', getWeatherData);


//Function that assigns inputed text from zipinput to zip variable.
function zipfunction() {

    zip = document.getElementById("zipinput").value

    console.log(zip)

    getWeatherData()
   
}

//function that fetches openweather API with the zip variable inserted into the html address. The API returns area data. 
function getWeatherData(){
     // fetch('http://api.openweathermap.org/data/2.5/weather?q=Louisville,us&APPID=f360ccaab20b5b1f7087127ed1a6d955')
      fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip +',us&APPID=f360ccaab20b5b1f7087127ed1a6d955')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main.temp)
        document.getElementById('weatherdiv').innerHTML = "The temperature in " + data.name + " right now is" + " " + data.main.temp + " " + "Kelvin";
      })}

function radiotempcheck() {
    if (document.getElementById("faranheit").checked){
contemp = document.getElementById('fname').value
findegree = parseFloat(contemp)
console.log(contemp)
document.getElementById('dataoutput').innerHTML =  ((findegree-273.15)*1.8)+32
    }
     else if (document.getElementById('celcius').checked)
        {

        contemp = document.getElementById('fname').value     
        findegree = parseFloat(contemp)

        document.getElementById('dataoutput').innerHTML = findegree - 273.15
        }

            }





