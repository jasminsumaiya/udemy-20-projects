'use strict';
const fs = require('fs');
const fetch = require("node-fetch");
const path = require('path');
const axios = require('axios');
var AdmZip = require('adm-zip');

let dependencies = JSON.parse(fs.readFileSync('dependencies.json'));
console.log(`dependencies: ${JSON.stringify(dependencies)}`)

fetch("https://packagemanager.vercel.app/registry.json")
    .then(res => res.json())
    .then(data => {
        let dir = path.join(__dirname, 'ppm_modules/');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            console.log('Directory created successfully!');
        }
        let registry = data.configs;
        downloadPPMModules(dependencies, registry);
    });

function downloadPPMModules(dependencies, registry){
    for(var key in dependencies) {
        let registryItem = registry.find((registryData) => key == registryData.name && dependencies[key] == registryData.version);
        if(registryItem != undefined){
            creatModule(registryItem);
        }else {
            console.log(` Module: ${key} not found`);
        }
    }
}
function creatModule(registryItem) {
    let fromFile = registryItem.path;
    let toFile = path.join(__dirname, 'ppm_modules');
    axios({
        method: 'get',
        url: fromFile,
        responseType: 'arraybuffer'
    })
        .then(function (response) {
            var zip = new AdmZip(response.data);
            zip.extractAllTo(toFile, true);
            console.log(`Module ${registryItem.name} Installed @ ${toFile} path`);
        })
        .catch(function (error) {
            return console.error(`Error occurred while download a module - ${registryItem.name}`)
        });
}
