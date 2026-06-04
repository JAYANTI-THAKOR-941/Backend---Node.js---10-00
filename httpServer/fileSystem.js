const fs = require('fs')

// fs.writeFile("student.txt","Welcome to The TechSkillHub.!",(err)=>{
//     if(err) throw err;

//     console.log('File created successfully.!')
// })


// Synchronous Methods
// const data = fs.readFileSync('student.txt','utf8');

// console.log(data);

// console.log("Hello Students..!!");


// Asynchronous Methods

// fs.readFile("student.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(data);
// });

// console.log("Hello Everyone.!");

// fs.appendFile("student.txt","\nNode.js Batch Started.!",(err)=>{
//     if(err) throw err;

//     console.log('File created successfully.!')
// })


// fs.rename("student.txt","data.txt",(err)=>{
//     if(err) throw err;

//     console.log('File renamed successfully.!')
// })



// fs.unlink("data.txt",(err)=>{
//     if(err) throw err;

//     console.log('File Deleted successfully.!')
// })


fs.mkdir("studentData",(err)=>{
    if(err) throw err;

    console.log('Folder created successfully.!')
})
