const fs = require('fs');
const readLine = require('readline');
const rl = readLine.createInterface({input: process.stdin, output: process.stdout});
rl.question('Choose between [CREATE/REMOVE]\n', (answer)=>{
    answer = answer.trim().toLocaleLowerCase();
    console.log(`You chose option ${answer.toUpperCase()}.`);
    menu(answer);
});


function menu(input){
    if(input == 'create'){
        fs.mkdir('./Tutorial', (err)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log("Folder successfully created.");
                fs.writeFile('./Tutorial/TutorialFile.txt', '', (err)=>{
                    if(err){
                        console.log(err.message);
                    }else{
                        console.log("Successfully created file.");
                        fs.appendFile("./Tutorial/TutorialFile.txt","This is an example.", (err)=>{
                            if(err){
                                console.log(err.message);
                            }else{
                                console.log("Succesfully appended file.");
                            }
                        });
                    }
                });
                
            }
        });
    }else if(input == 'remove'){
        fs.rm('./Tutorial', {recursive: true}, (err)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log('Successfully deleted the folder and it\'s contents.');
            }
        });
    }
}
