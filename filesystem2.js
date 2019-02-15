const fs = require('fs');
const path = require('path');
console.log(__dirname);
fs.writeFile(
    path.join(__dirname,'/test2','Hello.txt'),
    'Hello!!!',
    err => {
        if (err) throw err;
        console.log("File Write complete");
        fs.appendFile(
            path.join(__dirname,'/test2','Hello.txt'),
            'Hello123',
            err => {
                if (err) throw err;
                console.log("File Write Complete!!");
            }
        );
    }
);