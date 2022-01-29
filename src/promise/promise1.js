const addPerson = (person) => {
  return new Promise((resolve, reject) => {
    if (person) {
      console.log("before timeout");
      setTimeout(() => {
        console.log(person.name);
        resolve();
      }, 2000);
      console.log("after timeout");
    } else {
      reject("Error to add Person!");
    }
  });
};

const person = {
  name: "Gabriel",
  surname: "Deuterostonilds",
  birthday: "01/01/2000",
};

console.log("before addPerson");

addPerson(person)
  .then(() => console.log("Add with Success!"))
  .catch((err) => console.log(err));

console.log("after addPerson");
