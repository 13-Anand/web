console.log("Hello");
function show()
{
    console.log("Everyone");
}
setTimeout(show, 2000);
setTimeout(() => {console.log("Wait!!!")}, 6000)
console.log("4000");
// var a = console.log(() => {"Hello"});
// setTimeout(a,5000);
// setTimeout(console.log("We"), 200);
// Error with invalid call back for using console.log alone