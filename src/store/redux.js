import { createStore } from "redux";
import newsApp from "../reducers";

const store = createStore(
  newsApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
