const yargs = require('yargs')
const yargsCommand = require('./yargs-command.js')

yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
        content: {
            describe: 'content of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        yargsCommand.addNote(argv.title, argv.content)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        yargsCommand.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'read the note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        yargsCommand.readNote(argv.title)
    }
})

yargs.command({
    command: 'update',
    describe: 'update the note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
        newtitle: {
            describe: 'new title of note',
            demandOption: true,
            type: 'string',
        },
        newcontent: {
            describe: 'new content of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        yargsCommand.updateNote(argv.title, argv.newtitle, argv.newcontent)
    }
})


yargs.parse()