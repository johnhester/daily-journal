
// API object has methods to get & post data 

const jsonUrl = "http://localhost:8088/"

const API = {
    getJournalEntries () {
        return fetch(`${jsonUrl}entries`)
            .then(response => response.json())
    },
    helloWorld () {
        console.log("Hello World")
    },
    saveJournalEntry: (newEntryObject) => {
        return fetch(`${jsonUrl}entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json())
    },
    deleteJournalEntry (entryId) {
        return fetch(`${jsonUrl}entries/${entryId}`, {
            method: "DELETE"
        })
            .then(response => response.json())

    },    
    getSingleEntry (entryId) {
        return fetch(`${jsonUrl}entries/${entryId}`)
        .then(response => response.json())
    },
    editEntry: (entryId, updatedEntryObject) => {
        return fetch(`${jsonUrl}entries/${entryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEntryObject)
        })
        .then(response => response.json())
    }
}

export default API