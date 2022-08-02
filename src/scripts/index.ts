import "../styles/main.scss";
import init from "./render";
import fetchData from "./fetchData";

fetchData("2022-08-01", "2022-08-02")
  .then((data) => {
    if (data) {
      console.log(data.element_count);
      console.log(data.near_earth_objects["2022-08-02"][0]);
    }
  })
  .catch((err) => {
    console.log(err);
  });
init();
