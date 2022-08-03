const baseLog = (x: number, y: number) => Math.log(x) / Math.log(y);

const pseudoRandom = (id: string) => {
  const number = parseFloat(id);
  const sum = id
    .split("")
    .map((num) => parseFloat(num))
    .reduce((acc, curr) => acc + curr, 0);
  const value = (number - sum) / (number + sum);
  const valueArr = value
    .toString()
    .split("")
    .filter((str) => {
      if (str !== ".") {
        return true;
      }

      return false;
    });

  valueArr[valueArr.length - 1] = "0";
  valueArr[valueArr.length - 2] = ".";
  const num = parseFloat(valueArr.reverse().join(""));
  return num;
};

const randomPosition = (id: string, distance: number) => {
  const value1 = pseudoRandom(`${id}12345`) * distance;
  const value2 =
    pseudoRandom(id + id) * (pseudoRandom(`${id}53241`) > 0.5 ? -1 : 1);
  const intermediate = value1 ** 2 + value2 ** 2;
  const value3 = (distance ** 2 - intermediate) ** 0.5;

  const random = pseudoRandom(id + id) * 2;

  if (random > 1) {
    return {
      x: value1 * (pseudoRandom(`${id}87605`) > 0.5 ? 1 : -1),
      y: value2,
      z: value3 * (pseudoRandom(id + id) > 0.5 ? 1 : -1),
    };
  }

  return {
    x: value3 * (pseudoRandom(`${id}21398`) > 0.5 ? 1 : -1),
    y: value2,
    z: value1 * (pseudoRandom(id + id) > 0.5 ? 1 : -1),
  };
};

export { baseLog, randomPosition };
