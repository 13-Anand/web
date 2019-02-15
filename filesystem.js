// Problem: To create a folder
// Node js > fs module (system)
// fs provides an API to interact with file system 
// const fs = require('fs');
// const path = require('path');
// Create folder
// query
//console.log(__dirname);
//fs.mkdir(path.join(__dirname,'/test'),{}, error => {
  //  console.log("Folder created");
//});
function test()
{
    return "test2";
}
console.log(test());
//anonymous function using fat arrow
console.log((() => "test3")());
//anonymous function using normal function
console.log(function () { console.log("test4")}());
// function with paramters
function show(i,j)
{
    console.log(i*j);
}
console.log(show('3','2'));
console.log(((a,b) => console.log(a*b))(5,2));
