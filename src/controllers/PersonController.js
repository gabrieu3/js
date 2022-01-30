class PersonController {
  addPerson(person, msg) {
    return new Promise((resolve, reject) => {
      if (person) {
        msg.innerHTML = "Enviando dados...";
        setTimeout(() => {
          console.log(person.name);
          msg.innerHTML = "Dados enviados com sucesso!";
          resolve();
        }, 3000);
      } else {
        msg.innerHTML = "Error to add Person!";
        reject("Error to add Person!");
      }
    });
  }
}

export { PersonController };
