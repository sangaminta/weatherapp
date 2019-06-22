import * as actionType from "../action/actionType";

const initialState = {
  cityName: "",
  countryName: "",
  isloading: false,
  detail: "",
  weatherData: "",
  loaded: false,
  error: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CITY_NAME:
      return Object.assign({}, state, { cityName: action.payload });

    case actionType.COUNTRY_NAME:
      return Object.assign({}, state, { countryName: action.payload });

    case actionType.SEARCH:
      return Object.assign({}, state, {
        isloading: true,
        detail: action.payload
      });

    case actionType.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        error: false,
        isLoading: false,
        loaded: true,
        weatherData: action.payload
      });
    case actionType.SEARCH_ERROR:
      return Object.assign({}, state, {
        loaded: false,
        isLoading: false,
        error: true,
        weatherData: ""
      });

    default:
      return state;
  }
};

export default reducer;
