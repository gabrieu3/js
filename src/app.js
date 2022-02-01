//import { home } from "./pages/Home.js";
import { PersonPage } from "./pages/PersonPage.js";
import { TopMenu } from "./pages/TopMenu.js";
const local = window.location;

//home();

var top = document.getElementById("top");
top.appendChild(new TopMenu().create());

var app = document.getElementById("app");
app.appendChild(new PersonPage().createForm());

/*import { Jira } from "./api/Jira.js";

const jira = new Jira();

jira.connect();
*/
