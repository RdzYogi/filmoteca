import { Controller } from "@hotwired/stimulus"
import React from "react";
import { createRoot } from "react-dom/client";
import store from "../redux/store";
import { Provider } from "react-redux";
import App from "../App";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const app = document.getElementById("app");
    createRoot(app).render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
