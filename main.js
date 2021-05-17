$.getJSON(
    "https://api.openweathermap.org/data/2.5/onecall?lat=32.5822&lon=0.3163&units=metric&exclude=minutely,hourly,alerts&appid=e6aea0474f2b4a44e1f0c3ddadc0b4ed",
    function(data) {

        var temp = Math.round(data.current.temp);
        var main = data.current.weather[0].main;
        var description = data.current.weather[0].description;
        var tomorrow = data.daily[0].temp.day;
        var icon = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x" + ".png";
        $(".date").append(new Date());
        $(".temp").prepend(temp);
        $(".weather").append(main);
        $(".icon").attr('src', icon);
        $(".description").append(description);
        $(".tomorrow").prepend(tomorrow);
    }
);