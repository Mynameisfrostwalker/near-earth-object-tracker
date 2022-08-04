import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import init from "./render";
import retrieveInformation from "./fetchData";
import { initialDisplay, errorDisplay } from "./display";

retrieveInformation()
  .then((data) => {
    if (data) {
      init(data);
      initialDisplay();
    } else {
      init(null);
      errorDisplay();
    }
  })
  .catch((err) => {
    init(null);
    errorDisplay();
    throw new Error(`Error!`);
  });
