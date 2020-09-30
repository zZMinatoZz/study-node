const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const getNotes = function() {
    return 'Your notes...'
}

// module.exports = getNotes

const getMessage = function() {
    return 'Message you want'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    debugger

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)

        console.log('New note added')
    }else {
        console.log('Note title taken!')
    }

    
}

const removeNote = function(title) {
    let paramCheck = 0;
    const notes = loadNotes()
    for (var i = 0; i < notes.length; i ++) {
        if(notes[i].title === title) {
            notes.splice(i,1)
            paramCheck++;
        }
    }

    if(paramCheck === 0) {
        console.log(chalk.bgRed.inverse(`the "${title}" note is not exist!`))
    } else {
        saveNotes(notes)

        console.log(chalk.bgGreen.inverse(`The "${title}" note was removed!`))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length) {
        console.log(chalk.green.inverse('Your notes: '))
        notes.forEach(note => {
            console.log(note.title)
        })
    }else {
        console.log("You don't have any notes!")
    }
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteNeeded = notes.find(note => note.title === title)
    if(noteNeeded) {
        console.log('Your note you want: \n======================')
        console.log(`Title: ${noteNeeded.title}`)
        console.log(`Body: \n ${noteNeeded.body}`)
    } else {
        console.log(`The ${title} note does not exist!`)
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }catch(e) {
        return []
    }
    
}

// module.exports = getMessage
// exports multiple function
module.exports = {
    getNotes: getNotes,
    getMessage: getMessage,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}