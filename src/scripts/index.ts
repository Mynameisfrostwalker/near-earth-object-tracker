import "../styles/main.scss";
import init from "./render";
import retrieveInformation from "./fetchData";

retrieveInformation()
  .then((data) => {
    if (data) {
      init(data);
    } else {
      console.log("Error");
    }
  })
  .catch((err) => {
    console.log(err);
  });
