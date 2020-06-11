


const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    helloWorld () {
        console.log("Hello World")
    }
}

