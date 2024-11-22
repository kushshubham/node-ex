const fs = require('fs')

// fs.readFile('file.txt', 'utf8', (err, data )=>{
//     console.log(err, data)
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

fs.writeFile('file.txt','this the data',()=>{
    console.log("written in the fiel")
})

console.log('this is the file')