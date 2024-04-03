//variaveis e seleção de elementos
const apiKey = "1d7a6557f13578958a732520fa686bc6";
const apiCountryURL = "https://flagsapi.com//shiny/64.png"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//Funções
const getWeatherData = async (city) => {
    toggleLoader();
  
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
  
    toggleLoader();
  
    return data;

const showWeartherData = (city) => {
    cgetWeatherData(city);
}

//Eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city = cityInput.value;

    showWeartherData(city);

    //console.log("teste")  teste do botão
});