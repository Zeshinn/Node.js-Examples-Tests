const fs = require('fs');
//create a file

// fs.writeFile("example.txt", 'This is an example', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File successfully created");
//         fs.readFile("./example.txt", "utf-8",(err,file) =>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(file);
//             }
//         });
//     }
// });

//Rename a file

// fs.rename("./example.txt", "./exampleRenamed.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully renamed the file.");
//     }
// });

//Append to file
// fs.appendFile("./exampleRenamed.txt", " that is renamed and appended", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Appened data successfully.");
//     }
// });

fs.unlink('exampleRenamed.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Successfully deleted the file.");
    }
});