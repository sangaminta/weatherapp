import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { searchSuccess, searchError } from "../redux/action/action";

function* search(action) {
  try {
    const response = yield axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          action.payload.city
        },${
          action.payload.country
        }&units=metric&appid=${"5d3b72d019b64f7c5e2b0ee30ebe93ca"}`
      )
      .then(response => {
        return response;
      });
    if (response) {
      yield put(searchSuccess(response.data));
    }
  } catch (e) {
    yield put(searchError(e));
  }
}

export default function* rootSaga() {
  yield takeLatest("SEARCH", search);
}
