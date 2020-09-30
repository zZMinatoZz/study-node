// const square = function(x) {
//     return x* x
// }

// const square = (x) => {
//     return x* x
// }

// const square = (x) => x * x


// const event = {
//     name: 'Nguyen Hoai Nam',
//     print: function () {
//         console.log(this.name)
//     }
// }
// return 'Nguyen Hoai Nam'
// event.print()

// const event = {
//     name: 'arrow function',
//     print: () => {
//         console.log(this.name)
//     }
// }
// // return 'undefined' because arrow function cannot access the 'name' property
// event.print()

// const event = {
//     name: 'test',
//     print() {
//         console.log(this.name)
//     }
// }
// // return 'test'
// event.print()

// const event = {
//     name: 'Test something',
//     arrayUser: ['nam', 'trung', 'cuong'],
//     print() {
//         console.log(this.name);
//         this.arrayUser.forEach(function(user) {
//             console.log(user + ' is ' + this.name)
//         })
//     }
// }
// each item in array return 'name' is undefined because they were not binded with 'name' value
// event.print()


// const event = {
//     name: 'Test something',
//     arrayUser: ['nam', 'trung', 'cuong'],
//     print() {
//         const that = this
//         console.log(this.name);
//         this.arrayUser.forEach(function(user) {
//             console.log(user + ' is ' + that.name)
//         })
//     }
// }
// create 'that' variable to bind data with 'this', then we can use it to get data
// return 'test something' for each element of array
// event.print()

const event = {
    name: 'Test something',
    arrayUser: ['nam', 'trung', 'cuong'],
    print() {
        console.log(this.name);
        this.arrayUser.forEach((user) => {
            console.log(user + ' is ' + this.name)
        })
    }
}

// return right data instead of 'undefined'
event.print()

// => arrow function se k the access truc tiep toi data thong qua 'this'
// nhung no co the access neu no nam trong 1 function