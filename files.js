// READ FILES

const fs = require('fs');

// fs.readFile('./docs/doc1.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('last line of the code.')

// WRITING FILES

// fs.writeFile('./docs/doc1.txt', 'hello world', () => {
//     console.log('file was written')
// }) 

// if(!fs.existsSync('./assets1')){
// fs.mkdir('./assets1', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('file created successfully!')
// })
// } else {
//     fs.rmdir('./assets1', (err) => {
//         if (err) {
//             console.log(err)            
//         }
//     })
//     console.log('folder deleted!')
// }

//deleting files

// if (fs.existsSync('./docs/delete.txt')) {
//     fs.unlink('./docs/delete.txt' , (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('deleted successfully')
//     })
// }

fs.mkdir('./assets3', (err) => {
    if(err){
        console.log(err)
    }
    console.log('gdtyef')
})