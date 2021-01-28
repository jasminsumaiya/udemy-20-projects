
const fs = require('fs');
const fetch = require("node-fetch");
const path = require('path'); 
const AnyFile = require('any-file');

fs.readFile('dependencies.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let dep = JSON.parse(data);      
  let dependancies = dep.libs;
  //console.log(dependancies);

  fetch("https://packagemanager.vercel.app/registry.json")
        .then(res => res.json())
        .then(data => {
            let registry = data.configs;
            //console.log(registry);

            dependancies.forEach((depData) => {
                let registryItem = registry.find((registryData) => depData.name == registryData.name && depData.version == registryData.version);
                //console.log(registryItem);

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
    const af = new AnyFile();
    let fromFile = registryItem.path;
    let toFile = path.join(__dirname, 'ppm_modules', fileName);

        af.from(fromFile).to(toFile, function(err, res) {
            if (res) {
            console.log("File copied!");
            } else {
            console.log("File not copied!");
            }
        });
}

/*fs.writeFile(modulePath, Buffer.alloc(data, 'utf-8'), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });*/








