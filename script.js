let fromapi = fetch('http://api.openweathermap.org/data/2.5/weather?q=Louisville,us&APPID=6368a49d701b9248d5d30b549448ea4a')
.then(function(res){console.log(res.json())})

document.getElementById('displaydata')
.addEventListener('click', getText);

function getText(){
  console.log(fromapi);
    document.getElementById("headerone")
    .innerHTML = "<h1>" + fromapi + "</h1>"
}



