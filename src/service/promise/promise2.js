import { person, address } from "./data.js";
import { addPerson, addAddress } from "./util.js";

console.log("before addPerson");

addPerson(person)
  .then(() => {
    console.log("Person add with Success!");
    addAddress(address)
      .then(() => console.log("Address add with Sucess!"))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

console.log("after addPerson");
