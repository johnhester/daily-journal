import API from "./saveJournalEntry"

// grabs new entry data 



document.querySelector("#myJournalButton").addEventListener("click", event => {

    const journalEntryObj = {}

    journalEntryObj.date = document.querySelector("#journalDate").value
    console.log("date", journalEntryObj.date)
    journalEntryObj.concepts = document.querySelector("#journalConcepts").value
    journalEntryObj.entry = document.querySelector("#journalEntry").value
    journalEntryObj.mood = document.querySelector("#mood").value

    console.log(journalEntryObj)

    API.saveJournalEntry(journalEntryObj)
})
