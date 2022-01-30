import { PersonController } from "../../controllers/PersonController.js";
import { Person } from "../../models/Person.js";

export const promise1 = () => {
  console.log("before addPerson");

  var person = new Person("Gabriel", "Beirute");
  var personController = new PersonController();

  personController
    .addPerson(person)
    .then(() => {
      var app = document.getElementById("app");
      app.innerHTML = "Pessoa inserida com sucesso!";
    })
    .catch((err) => console.log(err));

  console.log("after addPerson");
};
