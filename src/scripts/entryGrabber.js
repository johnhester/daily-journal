import API from "./data.js"

// grabs new entry data 



document.getElementById("#myJournalButton").addEventListener("click", event => {

    const journalEntryObj = {}

    journalEntryObj.date = document.querySelector("#journalDate").value
    journalEntryObj.concepts = document.querySelector("#journalConcepts").value
    journalEntryObj.entry = document.querySelector("#journalEntry").value
    journalEntryObj.mood = document.querySelector("#mood").value

    
    API.saveJournalEntry(journalEntryObj)
})
