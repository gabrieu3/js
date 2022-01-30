//import { home } from "./pages/Home.js";
import { PersonPage } from "./pages/PersonPage.js";
const local = window.location;
var app = document.getElementById("app");
//home();

var pg = new PersonPage();

const form = pg.createForm();

app.appendChild(form);
