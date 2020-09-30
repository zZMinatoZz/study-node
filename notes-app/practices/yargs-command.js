const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addNote = (title, content) => {
    const notes = loadNotes()
    const noteDuplicate = notes.find(note => note.title === title)
    if (noteDuplicate) {
        console.log(chalk.red.inverse('the title has already exist!'))
    } else {
        const newNote = {
            title: title,
            content: content
        }

        notes.push(newNote)

        saveNotes(notes)

        console.log(chalk.green.inverse('Note was added!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    
    const noteRemove = notes.find(note => note.title === title)

    if (noteRemove) {
        const notesAfterRemove = notes.filter(note => note.title !== title)

        saveNotes(notesAfterRemove)

        console.log(chalk.green.inverse('The note was removed!'))
    } else {
        console.log(chalk.red.inverse("The note doesn't exist!"))
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteToRead = notes.find(note => note.title === title)

    if (noteToRead) {
        console.log(chalk.green.inverse('Title: ' + noteToRead.title) + '\n\n' + 
            '=====================================\n\n' + chalk.blue.inverse(noteToRead.content) + '\n\n')
    } else {
        console.log(chalk.red.inverse('Your note does not exist!'))
    }
}

const updateNote = (title, newtitle, newcontent) => {

    debugger
    
    const notes = loadNotes()
    let count = 0
    for (let i = 0; i < notes.length; i++) {
        if(notes[i].title === title) {
            notes[i].title = newtitle
            notes[i].content = newcontent
            count++
            if(count > 0) {
                break
            }
        }
    }

    if(count > 0) {
        saveNotes(notes)
        console.log(chalk.green.inverse('Your note was updated!'))
    } else {
        console.log(chalk.red.inverse('Your note does not exist!'))
    }
}


const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes-test.json').toString()
        return JSON.parse(notes)
    } catch(ex) {
        return []
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes-test.json', data)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    updateNote: updateNote
}