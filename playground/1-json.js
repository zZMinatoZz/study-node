const fs = require('fs')

// const book = {
//     title: 'Lap trinh node js',
//     author: 'Nguyen Hoai Nam'
// }

// // convert ve data json type
// const bookJson = JSON.stringify(book)

// // console.log(bookJson.title)
// // console.log(book.title)

// // // convert from json to object
// // const parsedData = JSON.parse(bookJson)

// // console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// // in ra data kieu bytes
// // console.log(dataBuffer)
// // in ra data kieu string
// // console.log(dataBuffer.toString())
// const data = JSON.parse(dataJson)

// console.log(data.author)

// const information = {
//     name: 'Nguyen Hoai Nam',
//     address: 'Ha Noi',
//     age: 27
// }

// const dataJson = JSON.stringify(information)

// fs.writeFileSync('2-json.json', dataJson)

const dataJson = fs.readFileSync('2-json.json').toString()
// console.log(dataJson)

const dataObject = JSON.parse(dataJson)

dataObject.name = 'Nguyen Hoai Nam 2'
dataObject.address = 'Viet Nam'
dataObject.age = 26

fs.writeFileSync('2-json.json', JSON.stringify(dataObject))

