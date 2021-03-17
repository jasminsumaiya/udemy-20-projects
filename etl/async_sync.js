const fs = require("fs");
const csvToJson = require("./utils");

// //use fs.readFile and fs.writeFileSync

fs.readFile("car.csv", "utf-8", (err, cars) => {
  console.log("car start");
  let carJsonList = csvToJson(cars);

  fs.readFile("customer.csv", "utf-8", (err, customers) => {
    console.log("customer start");
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
    console.log("end");

    fs.writeFileSync(
      "customerCarDetList_sync_sync.txt",
      JSON.stringify(customerCarDetList)
    );
  });
});
