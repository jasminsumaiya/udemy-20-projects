'use strict';

const fs = require('fs');
const fetch = require("node-fetch");
const path = require('path'); 
const AnyFile = require('any-file');
const http = require('https');
const request = require('superagent');

fs.readFile('dependencies.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
       
  let dependancies = JSON.parse(data);
  //console.log(dependancies);

  fetch("https://packagemanager.vercel.app/registry.json")
        .then(res => res.json())
        .then(data => {
            let registry = data.configs;
            //console.log("registry");
            //console.log(registry);

            let dir = path.join(__dirname, 'ppm_modules/');
            fs.rmdirSync(dir, {recursive: true});
            console.log("Folder Deleted!");

            fs.mkdirSync(dir);
            console.log('Directory created successfully!'); 

            downloadPPMModules(dependancies, registry);
        });
});

function downloadPPMModules(dependancies, registry){
    
    for(var key in dependancies) {
        let registryItem = registry.find((registryData) => key == registryData.name && dependancies[key] == registryData.version);
        //console.log(`registryItem ${JSON.stringify(registryItem)}`);

        if(registryItem != undefined){
            creatModule(registryItem);
        }else {
            console.log(` Module: ${key} not found`);
        }
    }
}
   
function creatModule(registryItem) {
    let fileName = registryItem.name;
    let af = new AnyFile();
    let fromFile = registryItem.path;
    let toFile = path.join(__dirname, 'ppm_modules', `${fileName}.zip`);

    console.log(`fromfile: ${fromFile}`);
    console.log(`toFile: ${toFile}`);
    
    fs.mkdirSync(toFile);

    request.get(fromFile).on('error', (error) => {
            console.log(error);
        })
        .pipe(fs.createWriteStream(toFile))
        .on('finish', () => {
            console.log("finish");
    });  
}

/*
    af.from(fromFile).to(toFile, function(err, res) {
        if (res) {
            console.log("File copied!");
        } else {
            console.log("File not copied!");
        }
    });

    download(fromFile, toFile, function(err) {
        if (err) {
            console.log("File not copied!");
        } else {
            console.log("File copied!");
        }
    });

    function download(url, dest, cb) {
        var file = fs.createWriteStream(dest);
        http.get(url, (response) => {
            response.pipe(file);
                file.on('finish', () => {
                file.close(cb);  
                });
        }).on('error', (err) => { 
            fs.unlink(dest); 
            if (cb) cb(err.message);
        });
    };
 */


