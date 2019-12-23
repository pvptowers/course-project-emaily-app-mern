//Data layer control (Redux)
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

//Import components
import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers => [], {}, applyMiddleware(reduxThunk));

//Provider tag is a react component that can read from our redux store and update components with the new state
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
