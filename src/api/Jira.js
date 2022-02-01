class Jira {
  connect() {
    const jiraUrl = "https://jira.fesctecnologia.com.br/";
    const user = "gbalestrin";
    const password = "gab139057";
    const token = (user + ":" + password).toString("base64");
    const url = "https://jira.fesctecnologia.com.br/";
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Basic " + token,
    };
    axios({
      url: url,
      method: "GET",
      headers,
    })
      .then((response) => {
        console.log(response);
        say(`I connected with Confluence!`);
      })
      .catch((error) => {
        console.log("ERROR!!!");
        console.log(error);
        say(`Ooops, something went wrong when trying to connect to Confluence`);
      });
  }
}

export { Jira };
