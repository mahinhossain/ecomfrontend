// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import swDev from "./swDev";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Redux/Store";
let store = Store();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// swDev();
