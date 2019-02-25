function test()
{
    return new Promise(function (resolve,reject)
    {
        var a = 0;
        if(a == 1)
        {
            resolve();
        }
        else
        {
            reject();
        }
    })
}
test()
.then(function () {
    console.log("Success");
}, function() {
    console.log("Failure");
})
.then(function (){
    console.log("Success2");
}, function() {
    console.log("Failure2");
})
.catch(function(){
    console.log("Rejected!");
})