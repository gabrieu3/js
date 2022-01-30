class AddressController {
  addAddress(adress) {
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
  }
}

export { AddressController };
