function getWeather() {
    const apiKey = "88a81f264cf1afdb078d0583b78df271";
    const cityName = document.getElementById("cityName").value;
    console.log("CITYNAME----->", cityName);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            console.log(response);
            return response.json()})
        .then(data => {
            console.log(data);
            const weather = document.getElementById("weather");
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

            weather.innerHTML=`
            <div class="footerContainer">
            <h2 style="text-transform: uppercase;color:"> ${cityName} Weather </h2>
            <p>Temperature: ${temp}&deg;C</p>
        <p>Description: ${description}</p>
        <img src="${iconUrl}" alt="${description}">
        </div>`;
        })
        .catch(error => console.log(error));
}