import * as actionType from "./actionType";

export function cityName(payload) {
  return { type: actionType.CITY_NAME, payload };
}

export function countryName(payload) {
  return { type: actionType.COUNTRY_NAME, payload };
}

export function search(payload) {
  return { type: actionType.SEARCH, payload };
}

export function searchSuccess(payload) {
  return { type: actionType.SEARCH_SUCCESS, payload };
}

export function searchError(payload) {
  return { type: actionType.SEARCH_ERROR, payload };
}
