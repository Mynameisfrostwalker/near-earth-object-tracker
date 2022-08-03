import "../styles/main.scss";
import init from "./render";
import fetchData from "./fetchData";

fetchData("2022-07-26", "2022-08-02")
  .then((data) => {
    if (data) {
      init(data);
    }
  })
  .catch((err) => {
    console.log(err);
  });
