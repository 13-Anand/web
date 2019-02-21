function test()
{
    return new Promise(function (resolve,reject)
    {
        var a = 0;
        if(a == '1')
        {
            resolve();
        }
        else
        {
            console.log("Rejected!");
        }
    })
}
test()
.then(function () {
    console.log("Success");
} )
.catch()