/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import entryMechanism from "./entryDOM.js"
import entryGrabber from "./entryGrabber.js"

// loads previous journal entries
API.getJournalEntries()
    .then((entryData)  => { let journalEntries = entryData
        return journalEntries})
    .then( (journalEntries) => entryMechanism.journalPost(journalEntries) )
//invokes fetch call 


//grabs new entry and passes to API Post
document.querySelector("#myJournalButton").addEventListener("click", event => {

    let entryObj = entryGrabber()

    console.log(entryObj)
    API.saveJournalEntry(entryObj)
       // .then((entries) => console.log(entries))
})






