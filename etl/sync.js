const fs = require("fs");
const csvToJson = require("./utils");

// use fs.readFileSync and fs.writeFileSync

const cars = fs.readFileSync("car.csv", "utf-8");
const customers = fs.readFileSync("customer.csv", "utf-8");

console.log("start");

let carJsonList = csvToJson(cars);
let customerJsonList = csvToJson(customers);

let customerCarDetList = [];

customerJsonList.forEach((customerJson) => {
  let carCompanyJson = carJsonList.find((carJson) => {
    return carJson.id == customerJson.customerId;
  });

  customerCarDetList.push({
    id: customerJson.id,
    name: customerJson.name,
    age: customerJson.age,
    carCompany: carCompanyJson.carCompany,
    carModel: carCompanyJson.carModel,
  });
});

console.log(customerCarDetList);

fs.writeFileSync(
  "customerCarDetList_sync.txt",
  JSON.stringify(customerCarDetList)
);

console.log("end");

/* 
[
    {
        id:1004,
        name:"john",
        age:34,
        carCompany:'ford',
        carName:'figo'
    }
]
 */
