const fs = require('fs');
const readStream = fs.createReadStream('./Example.txt', 'utf-8');
const writeStream = fs.createWriteStream('./WriteExample.txt');
readStream.on('data', (chunk)=>{
    console.log(chunk);
    writeStream.write(chunk, (err) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Successfully wrote");
        }
    })
});