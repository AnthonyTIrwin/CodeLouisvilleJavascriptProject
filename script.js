


//implementation of regex on zip code input, only 5 characters. 
function zipfunction() {  
    zip = document.getElementById('zipinput').value
    var regex = /^\d{1,5}$/;
    if (regex.test(zip)){
        console.log("true")
        
        //calls getweatherdataunction
        getWeatherData() 
        getplotdata()
    }
    else
    {
        console.log("false")
        document.getElementById('weatherdiv').innerHTML = "Please Input a Valid Zip Code"
    }
}
//function that fetches openweather API with the zip variable inserted into the html address. The API returns area data. 
function getWeatherData(){
      fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip +',us&APPID=f360ccaab20b5b1f7087127ed1a6d955')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main.temp)
        document.getElementById('weatherdiv').innerHTML = "The temperature in " + data.name + " right now is" + " " + data.main.temp + " " + "Kelvin";
      })}


//function for radio buttons

function radiotempcheck() {
    if (document.getElementById("faranheit").checked){
contemp = document.getElementById('fname').value
findegree = parseFloat(contemp)
console.log(contemp)
document.getElementById('dataoutput').innerHTML =  Math.round(((findegree-273.15)*1.8)+32) + " F"
    }
     else if (document.getElementById('celcius').checked)
        {
            contemp = document.getElementById('fname').value     
            findegree = parseFloat(contemp)
            document.getElementById('dataoutput').innerHTML = Math.round(findegree - 273.15) + " C" 
        }
        
    }
    //arrays for x and y data

    let xarr = []
    let yarr = []
    
    //function for retreiving and grahing api data from second api with 5-day weather data, every three hours.

    function getplotdata(){
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=louisville&appid=f360ccaab20b5b1f7087127ed1a6d955')
        .then((res) => res.json())
        .then((data)=> {  
            
            for (i = 0; i < data.list.length; i++) {          
                var layout = {
                    title:"Temperature in K Over Time"}
            yarr.push(data.list[i].main.temp)
            xarr.push(data.list[i].dt_txt)
            TESTER = document.getElementById('tester');
            Plotly.newPlot( TESTER, [{
            x: xarr,
            y: yarr }], {
            margin: { t: 0 } }, layout );
              };

          
    }
    
);

    }


