let personData = [
    {name: "Bambang", age: "30", sex: "Male"},
    {name: "Roy", age: "27", sex: "Male"},
    {name: "Kiana", age: "25", sex: "Female"},
    {name: "Kurumi", age: "24", sex: "Female"}
]

//! DONT USE module.exports = personData;
exports.personData = personData; 
console.log(module);