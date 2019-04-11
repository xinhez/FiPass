import React from "react";
import { CookiesProvider } from "react-cookie";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import rootReducer from "./reducers/rootReducer";

import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
