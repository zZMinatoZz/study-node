// // require('fs'): load all stuff of 'fs' module
// // const fs = require('fs')

// // // create file with 'path' & 'data'
// // //fs.writeFileSync('notes.txt', 'content updated!')

// // // append content to the 'path'
// // fs.appendFileSync('notes.txt', '\tcontent was appended')

// // sau khi 'require' file 'utils.js', run file 'app.js', code trong 'utils'
// // se duoc thuc thi
// const add = require('./utils.js')
// // const name = require('./utils.js')
// // const name = 'Andrew'
// const result = add(4,5)
// // const name = utils.name

// console.log(result)
// // console.log(name)

// const getText = require('./notes.js')
// const message = getText()

// console.log(message)

// const validator = require('validator')
// import validator from 'validator'
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { string } = require('yargs')

// const message = getMessage()

// console.log(message)
// console.log(chalk.red('Registration ') + chalk.white.bgRed('Successfully'))
// console.log(chalk.red.bgYellow.bold('test chalk!!!'))

// console.log(process.argv)

// console.log(validator.isURL('namnguyen@'))

// const command = process.argv[2]

// customize yargs version
yargs.version('1.1.0')

// create 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    // add more options for command (ex: --title)
    builder: {
        title: {
            describe: 'note title',
            // bat buoc phai truyen option title
            demandOption: true,
            // gia tri mac dinh la string thay vi boolean
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
        // console.log(argv)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})



// console.log(process.argv)

// if(command === 'add') {
//     console.log('Adding somthing!')
// }else if(command === 'remove') {
//     console.log('Removing somthing!')
// }

// console.log(yargs.argv)
yargs.parse()


