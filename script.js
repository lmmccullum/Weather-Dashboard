var GiphyKeyToApi = '6Mv9o9kgMAzsmGffGxhK8eyrsh1gT4NE'
var KeyToApi = '1c9c10e62fb18c7cc074af909e114759'
var theCities = [];

function renderCities() {
    var storedCities = JSON.parse(localStorage.getItem('cities'))

    if (storedCities !== null) {
        theCities = storedCities
    }

    $('#searchcity-buttons').empty()
    for (var i = 0; i < theCities.length; i++) {
        searchcity_button = $('<a>');
        searchcity_button.attr('data-city', theCities[i])
        searchcity_button.addClass('data-list-item data-list-item-action')
        searchcity_button.text(theCities[i])

        $('#searchcity-buttons').prepend(searchcity_button)
    }
}

function setupStorage() {
    localStorage.setItem("cities", JSON.stringify(theCities));
}

function init() {
    var storedCities = JSON.parse(localStorage.getItem('cities'))

    if (storedCities !== null) {
        theCities = storedCities
    }

    var city = theCities[theCities.length - 1]
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 1c9c10e62fb18c7cc074af909e114759 + "&units=imperial";

    $.ajax({ url: url, method: 'GET' })
        .then(function (response) {
            var simpleDateFormat = thedateObject.toLocaleString()
            var milliseconds = response.dt * 1000
            var thedateObject = new theDate(milliseconds)
            $('#citysearch-title').text(response.name)
            $('#weather-icon').attr('src', "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
            $('#thedate').text(simpleDateFormat)
            $('#temperature').text("Temp: " + response.main.temp + "°F")
            $('#wind-speed').text("Wind-Speed: " + response.wind.speed + 'MPH')
            $('#humidity').text("Humidity: " + response.main.humidity + '%')

            var uvUurl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + 1c9c10e62fb18c7cc074af909e114759

            $.ajax({ url: uvUrl, method: 'GET' })
                .then(function (uvResponse) {
                    var uvDiv = $('#uv-index')
                    uvDiv.text('UV Index: ' + uvResponse.value)

                    if (uvResponse.value <= 3) {
                        uvDiv.attr('class', 'alert alert-dismissible alert-success')
                    } else if (uvResponse.value >= 4 && uvResponse.value < 7) {
                        uvDiv.attr('class', 'alert alert-dismissible alert-info')
                    } else if (uvResponse.value >= 7) {
                        uvDiv.attr('class', 'alert alert-dismissible alert-warning')
                    }
                })

            var fiveDayForecastUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 1c9c10e62fb18c7cc074af909e114759 + "&units=imperial"; "
            $.ajax({ url: fiveDayForecastUrl, method: 'GET' })
                .then(function (fiveDayForecastResponse) {
                    for (var i = 3; i < fiveDayForecastResponse.list.length; i += 8) {
                        var date = fiveDayForecastResponse.list[i].dt_txt.replace('12:00:00', '')
                        $(`#date${i}`).text(date)
                        $(`#temp${i}`).text("Temperature: " + fiveDayForecastResponse.list[i].main.temp + "ᵒF")
                        $(`#img${i}`).attr('src', "https://openweathermap.org/img/wn/" + fiveDayForecastResponse.list[i].weather[0].icon + "@2x.png")
                        $(`#hum${i}`).text("Humidity: " + fiveDayForecastDayResonse.list[i].main.humidity + "%")
                    }
                })

            var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + response.weather[0].description + "&api_key=" + 6Mv9o9kgMAzsmGffGxhK8eyrsh1gT4NE + "&limit=1"

            $.ajax({ url: giphyUrl, method: 'GET' })
                .then(function (giphyResponse) {
                    $('#weather-giphy').attr('src', giphyResponse.data[Math.floor(Math.random() * 10)].embed_url)
                })

            function displayWeatherOnSubmit() {
                var city = $(citysearch - input).val()
                var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 1c9c10e62fb18c7cc074af909e114759 + "&units=imperial";

                $.ajax({ url: url, method: 'GET' })
                    .then(function (response) {
                        var milliseconds = response.dt * 1000
                        var thedateObject = new Date(milliseconds)
                        var simpleDateFormat = thedateObject.toLocaleString()
                        $('#citysearch-title').text(response.name)
                        $('#weather-icon').attr('src', "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
                        $('#thedate').text(simpleDateFormat)
                        $('#temperature').text("Temp: " + response.main.temp + "°F")
                        $('#wind-speed').text("Wind-Speed: " + response.wind.speed + 'MPH')
                        $('#humidity').text("Humidity: " + response.main.humidity + '%')

                        var uvUurl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + 1c9c10e62fb18c7cc074af909e114759

                        $.ajax({ url: uvUrl, method: 'GET' })
                            .then(function (uvResponse) {
                                var uvDiv = $('#uv-index')
                                uvDiv.text('UV Index: ' + uvResponse.value)

                                if (uvResponse.value <= 3) {
                                    uvDiv.attr('class', 'alert alert-dismissible alert-success')
                                } else if (uvResponse.value >= 4 && uvResponse.value < 7) {
                                    uvDiv.attr('class', 'alert alert-dismissible alert-info')
                                } else if (uvResponse.value >= 7) {
                                    uvDiv.attr('class', 'alert alert-dismissible alert-warning')
                                }
                            })

                        var fiveDayForecastUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 1c9c10e62fb18c7cc074af909e114759 + "&units=imperial"; "
                        $.ajax({ url: fiveDayForecastUrl, method: 'GET' })
                            .then(function (fiveDayForecastResponse) {
                                for (var i = 3; i < fiveDayForecastResponse.list.length; i += 8) {
                                    var date = fiveDayForecastResponse.list[i].dt_txt.replace('12:00:00', '')
                                    $(`#date${i}`).text(date)
                                    $(`#temp${i}`).text("Temperature: " + fiveDayForecastResponse.list[i].main.temp + "ᵒF")
                                    $(`#img${i}`).attr('src', "https://openweathermap.org/img/wn/" + fiveDayForecastResponse.list[i].weather[0].icon + "@2x.png")
                                    $(`#hum${i}`).text("Humidity: " + fiveDayForecastDayResonse.list[i].main.humidity + "%")
                                }
                            })

                        var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + response.weather[0].description + "&api_key=" + 6Mv9o9kgMAzsmGffGxhK8eyrsh1gT4NE + "&limit=1"

                        $.ajax({ url: giphyUrl, method: 'GET' })
                            .then(function (giphyResponse) {
                                $('#weather-giphy').attr('src', giphyResponse.data[Math.floor(Math.random() * 10)].embed_url)
                            })

                        function displayWeatherOnSubmit() {
                            var city = $(citysearch - input).val()
                            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 1c9c10e62fb18c7cc074af909e114759 + "&units=imperial";

                            $.ajax({ url: url, method: 'GET' })
                                .then(function (response) {
                                    var milliseconds = response.dt * 1000
                                    var thedateObject = new Date(milliseconds)
                                    var simpleDateFormat = thedateObject.toLocaleString()
                                    $('#citysearch-title').text(response.name)
                                    $('#weather-icon').attr('src', "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
                                    $('#thedate').text(simpleDateFormat)
                                    $('#temperature').text("Temp: " + response.main.temp + "°F")
                                    $('#wind-speed').text("Wind-Speed: " + response.wind.speed + 'MPH')
                                    $('#humidity').text("Humidity: " + response.main.humidity + '%')

                                    var uvUurl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + 1c9c10e62fb18c7cc074af909e114759

                                    $.ajax({ url: uvUrl, method: 'GET' })
                                        .then(function (uvResponse) {
                                            var uvDiv = $('#uv-index')
                                            uvDiv.text('UV Index: ' + uvResponse.value)

                                            if (uvResponse.value <= 3) {
                                                uvDiv.attr('class', 'alert alert-dismissible alert-success')
                                            } else if (uvResponse.value >= 4 && uvResponse.value < 7) {
                                                uvDiv.attr('class', 'alert alert-dismissible alert-info')
                                            } else if (uvResponse.value >= 7) {
                                                uvDiv.attr('class', 'alert alert-dismissible alert-warning')
                                            }
                                        })

                                    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + response.weather[0].description + "&api_key=" + 6Mv9o9kgMAzsmGffGxhK8eyrsh1gT4NE + "&limit=1"

                                    $.ajax({ url: giphyUrl, method: 'GET' })
                                        .then(function (giphyResponse) {
                                            $('#weather-giphy').attr('src', giphyResponse.data[Math.floor(Math.random() * 10)].embed_url)
                                        })
                                })
                        }
                        $('#citysearch-submit-button').on('click', function (event) {
                            event.preventDefault();

                            var city_name = $('#citysearch-input').val().trim();
                            theCities.push(city_name)
                            setupStorage();
                            displayWeatherOnSubmit();
                            renderCities();

                            $('#citysearch-input').val('')
                        })

                        $(document).on("click", '.data-list-item', displayWeatherOnClick);

                        renderCities();
                        init();











