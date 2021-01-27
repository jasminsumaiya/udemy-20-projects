import React from "react";
import ReactDom from "react-dom";

const element = <h1>Hello World</h1>;

ReactDom.render(element, document.getElementById("root"));


function hello() {
    for(var i= 0; i < 5; i++){
        console.log(i);
    }
}

hello();