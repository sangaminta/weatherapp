import React, { Component } from "react";
import "../style/weather.scss";
import haze from "../image/Haze.png";
import rain from "../image/rain.svg";
import cloudy from "../image/cloudy.svg";
import sun from "../image/sun.svg";
import notavl from "../image/not-available.png";
import loading from "../image/loading.svg";

export default class WeatherPage extends Component {
  render() {
    let img = "",
      status = "",
      discription = "",
      temprature = "",
      humidity = "",
      message = "";

    if (this.props.isLoading) {
      img = loading;
    }

    if (this.props.weatherData && this.props.weatherData.weather) {
      if (this.props.weatherData.weather[0].main === "Haze") {
        img = haze;
        status = this.props.weatherData.weather[0].main;
        discription = this.props.weatherData.weather[0].description;
        temprature = this.props.weatherData.main.temp;
        humidity = this.props.weatherData.main.humidity;
      } else if (this.props.weatherData.weather[0].main === "Rain") {
        img = rain;
        status = this.props.weatherData.weather[0].main;
        discription = this.props.weatherData.weather[0].description;
        temprature = this.props.weatherData.main.temp;
        humidity = this.props.weatherData.main.humidity;
      } else if (this.props.weatherData.weather[0].main === "Clouds") {
        img = cloudy;
        status = this.props.weatherData.weather[0].main;
        discription = this.props.weatherData.weather[0].description;
        temprature = this.props.weatherData.main.temp;
        humidity = this.props.weatherData.main.humidity;
      } else if (this.props.weatherData.weather[0].main === "Clear") {
        img = sun;
        status = this.props.weatherData.weather[0].main;
        discription = this.props.weatherData.weather[0].description;
        temprature = this.props.weatherData.main.temp;
        humidity = this.props.weatherData.main.humidity;
      } else {
        img = notavl;
      }
    }
    if (this.props.error) {
      message = "City not found in weather data.......";
    }

    return (
      <div>
        <div className="info-weather">Today's Weather</div>
        <hr className="underline" />
        <div className="message">{message}</div>
        <div className="form">
          <span>
            City:
            <input
              type="text"
              className="input-type"
              onChange={this.props.handleCity}
              value={this.props.cityName}
            />
          </span>
          <span>
            Country:
            <input
              type="text"
              className="input-type"
              onChange={this.props.handleCountry}
              value={this.props.countryName}
            />
          </span>
          <span>
            <button className="search" onClick={this.props.handlerSearch}>
              Search
            </button>
          </span>
        </div>
        <div className="weather-pic">
          <div>
            <img className="weather" src={img} />
            <div className="weather-status">
              <span>{status}</span>
              <br />
              <span className="discrip">{discription}</span>
            </div>
          </div>
        </div>
        {this.props.loaded ? <h2>Temperature - {temprature}°C </h2> : ""}
        {this.props.loaded ? <h2> Humidity - {humidity}% </h2> : ""}
      </div>
    );
  }
}
