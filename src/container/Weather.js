import React, { Component } from "react";
import WeatherPage from "../component/WeatherPage";
import { connect } from "react-redux";
import { cityName, countryName, search } from "../redux/action/action";

class Weather extends Component {
  handleCity = e => {
    const city = e.target.value;
    this.props.actionForSetCityName(city);
  };
  handleCountry = e => {
    const country = e.target.value;
    this.props.actionForSetCountryName(country);
  };

  handlerSearch = e => {
    const value = {
      city: this.props.cityName,
      country: this.props.countryName
    };
    this.props.actionForSearch(value);
  };

  render() {
    console.log("Data", this.props.error);
    return (
      <div>
        <WeatherPage
          handleCity={this.handleCity}
          handleCountry={this.handleCountry}
          handlerSearch={this.handlerSearch}
          cityName={this.props.cityName}
          weatherData={this.props.weatherData}
          countryName={this.props.countryName}
          isLoading={this.props.isLoading}
          loaded={this.props.loaded}
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityName: state.reducer.cityName,
    countryName: state.reducer.countryName,
    detail: state.reducer.detail,
    weatherData: state.reducer.weatherData,
    isLoading: state.reducer.isLoading,
    loaded: state.reducer.loaded,
    error: state.reducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionForSetCityName: value => dispatch(cityName(value)),
    actionForSetCountryName: value => dispatch(countryName(value)),
    actionForSearch: value => dispatch(search(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
