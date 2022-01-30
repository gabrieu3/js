import { PersonController } from "../controllers/PersonController.js";
import { Person } from "../models/Person.js";

class PersonPage {
  constructor() {
    this.name = "";
    this.surname = "";
    this.controller = new PersonController();
  }

  createForm() {
    // create a new div element
    console.log(this);
    const newForm = document.createElement("form");

    // and give it some content
    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "name");
    inputName.addEventListener(
      "input",
      (function (scope) {
        return () => scope.setName();
      })(this),
      false
    );
    newForm.appendChild(inputName);

    // add the text node to the newly created div
    const inputSurname = document.createElement("input");
    inputSurname.setAttribute("type", "text");
    inputSurname.setAttribute("id", "surname");
    inputSurname.addEventListener(
      "input",
      (function (scope) {
        return () => scope.setSurname();
      })(this),
      false
    );
    newForm.appendChild(inputSurname);

    const btnAdd = document.createElement("button");
    btnAdd.innerHTML = "Adicionar";
    btnAdd.setAttribute("id", "btnAdd");
    btnAdd.setAttribute("type", "button");
    btnAdd.addEventListener(
      "click",
      (function (scope) {
        return () => scope.addPerson();
      })(this),
      false
    );
    newForm.appendChild(btnAdd);

    const newlabel = document.createElement("Label");
    newlabel.setAttribute("id", "msg");
    newForm.appendChild(newlabel);

    return newForm;
  }

  async addPerson() {
    var person = new Person(this.name, this.surname);
    const msg = document.getElementById("msg");
    await this.controller.addPerson(person, msg);
    setTimeout(() => (msg.innerHTML = ""), 3000);
  }

  setName() {
    const name = document.getElementById("name");
    this.name = name.value;
  }

  setSurname() {
    const surname = document.getElementById("surname");
    this.surname = surname.value;
  }
}

export { PersonPage };
