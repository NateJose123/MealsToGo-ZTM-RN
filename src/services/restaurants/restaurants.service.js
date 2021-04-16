import { mocks } from "./mock";
import camelize from "camelize";
export const restaurantRequest = (location = "37.774929,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
restaurantRequest()
  .then((result) => {
    console.log(camelize(result));
  })
  .catch((err) => {
    console.log("error");
  });
