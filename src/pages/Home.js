import { promise1 } from "../service/promise/promise1.js";
export const home = () => {
  var hist = window.history;
  var app = document.getElementById("app");
  app.innerHTML = "Home";
  promise1();
};
