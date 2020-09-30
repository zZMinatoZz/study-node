const task = {
    tasks: [
        {
            text: 'Grocery shopping',
            complete: true
        },
        {
            text: 'Clean yard',
            complete: false
        },
        {
            text: 'Film course',
            complete: false,
        }
    ],
    getTasksTodo() {
        const arrayIncomplete = this.tasks.filter((task) => task.complete === false)
        console.log(arrayIncomplete)
    }
}

task.getTasksTodo()