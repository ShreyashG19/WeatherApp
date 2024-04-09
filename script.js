const API_KEY = "7de2778808ed56eeb94af5394ed84e8f";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function getWeather(city) {
    try {
        let response = await fetch(
            API_URL + `&q=${city}` + `&appid=${API_KEY}`
        );
        let data = await response.json();
        console.log(data);

        //data values
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${data.main.temp}&#8451`;
        document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

        //setting main logo
        if (data.weather[0].main.toLowerCase() === "Clear".toLowerCase()) {
            document.querySelector(".weather-icon").src = "imgs/sun.png";
        }
    } catch (error) {
        console.log(error);
    }
}

document.querySelector("#btn-search").addEventListener("click", function () {
    let city = document.querySelector(".inputCity");
    getWeather(city.value);
});

document.querySelector(".inputCity").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        const city = this.value;
        getWeather(city);
    }
});
