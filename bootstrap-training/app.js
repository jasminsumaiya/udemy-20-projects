let givenArr = [{ name: "sumaiya", age: 26, gender: "female" },
                { name: "rizwan", age: 30, gender: "male" },
                { name: "mohamed", age: 46, gender: "male" }];

function ArrIntoObj (arr){
    let newObj = {};

    arr.forEach((element) => {
        let key = element.gender;
        let value = {};
        if(newObj[key]){
            newObj[key].push(element);
        }else {
            let arr = [element];
            newObj[key] = arr;
        } 
    });
    return newObj;
}

let newObj = ArrIntoObj (givenArr);
console.log(newObj);