
const fs = require('fs');
const fetch = require("node-fetch");
const path = require('path'); 
//const extract = require('extract-zip')

fs.readFile('dependencies.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let dep = JSON.parse(data);      
  let dependancies = dep.libs;
  console.log("dependancies");
  console.log(dependancies);

  fetch("https://packagemanager.vercel.app/registry.json")
        .then(res => res.json())
        .then(data => {
            let registry = data.configs;

            console.log("registry");
            console.log(registry);

            dependancies.forEach((depData) => {
            
                let registryItem = registry.find((registryData) => depData.name == registryData.name && depData.version == registryData.version);
                console.log(registryItem);

                let dir = path.join(__dirname, 'ppm_modules');

                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                    console.log('Directory created successfully!'); 
                }

                if(registryItem != undefined){
                    creatModule(registryItem);
                }else {
                    console.log(` Module: ${depData.name} not found`);
                }
            });
        });
});

   
function creatModule(registryItem) {
    let fileName = registryItem.name;

    fs.writeFile(path.join(__dirname, 'ppm_modules',fileName), JSON.stringify(registryItem), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}








