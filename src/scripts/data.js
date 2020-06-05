let journalEntries = []

const getJournalData = () => {

    return fetch("http://localhost:8088/entries").then(

        (httpResponse) => {return httpResponse.json()}

    ).then(

        (entryArray) => {journalEntries = entryArray}

    )
}

console.log('outside', journalEntries)