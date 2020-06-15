/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import entryMechanism from "./entryDOM.js"

// loads previous journal entries
API.getJournalEntries()
    .then((entryData)  => { let journalEntries = entryData
        return journalEntries})
    .then( (journalEntries) => entryMechanism.journalPost(journalEntries) )
//invokes fetch call 


//grabs new entry and passes to API Post
document.querySelector("#myJournalButton").addEventListener("click", event => {

    const journalEntryObj = {}

    journalEntryObj.date = document.querySelector("#journalDate").value
    journalEntryObj.concepts = document.querySelector("#journalConcepts").value
    journalEntryObj.entry = document.querySelector("#journalEntry").value
    journalEntryObj.mood = document.querySelector("#mood").value

    console.log(journalEntryObj)
    API.saveJournalEntry(journalEntryObj)
})






