let weather = {
    apiKey: "183b970fc24b83f2e6e005223846e37f",
fetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "&units=metric&appid="
     + this.apiKey
    )
    .then((response) => response.json())
    .then ((data) => this.displayWeather(data));

},
displayWeather: function(data){
const { name} = data;
const { icon, description} = data.weather[0];
const { temp, humidity } = data.main;
const {speed} = data.wind;
console.log(name, icon, description, temp, humidity, speed);
document.querySelector(".city").innerText = "Weather in " + name;
document.querySelector(".icon").src =
  "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed" + speed + "km/h";
  document.querySelector(".weather").classList.remove("loading")
  document.body.style.backgroundImage = "url('https://imgs.search.brave.com/23njXgB74T4PPonLH5rTwwY8AGoB3-rs7lTDvFXIrYg/rs:fit:1200:1080:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsLzIvZi8zLzI1/Nzk5LmpwZw')";
},
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};

document.querySelector(".search button").addEventListener("click" , function(){
weather.search();


});

document.querySelector(".search-bar").addEventListener("keyup" , function(event){ 

if (event.key == "Enter") {
weather.search();
}


});

weather.fetchWeather("Mexico");