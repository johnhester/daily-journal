
// API object has methods to get & post data 

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    helloWorld () {
        console.log("Hello World")
    },
    saveJournalEntry (newEntryObject) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json())
    }
}

export default API