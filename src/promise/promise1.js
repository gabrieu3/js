import { addPerson } from "./util.js";
import { person } from "./data.js";

console.log("before addPerson");

addPerson(person)
  .then(() => console.log("Add with Success!"))
  .catch((err) => console.log(err));

console.log("after addPerson");
