function csvToJson(csvString) {
  console.log("implement logic here");
  let csvList = csvString.split("\n");
  let contentString = csvList.shift();
  let contentList = contentString.split(","); //[ 'customerId', 'carCompany', 'carModel' ]

  let outputList = [];

  csvList.forEach((csvItem) => {
    let outputObj = {};
    let csvItemList = csvItem.split(","); //[ '1001', 'ford', 'figo' ]

    contentList.forEach((contentItem, index) => {
      outputObj[contentItem] = csvItemList[index];
    });
    outputList.push(outputObj);
  });
  return outputList;
}

module.exports = csvToJson;
