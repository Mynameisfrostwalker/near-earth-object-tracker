import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import init from "./render";
import retrieveInformation from "./fetchData";
import { initialDisplay } from "./display";

retrieveInformation()
  .then((data) => {
    if (data) {
      init(data);
      initialDisplay();
    } else {
      init(null);
    }
  })
  .catch((err) => {
    init(null);
    throw new Error(`Error!`);
  });
