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

const addAddress = (adress) => {
  return new Promise((resolve, reject) => {
    if (adress) {
      console.log("before timeout adress");
      setTimeout(() => {
        console.log(adress.street);
        resolve();
      }, 2000);
      console.log("after timeout adress");
    } else {
      reject("Error to add Adress!");
    }
  });
};

export { addPerson, addAddress };
