/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import entryMechanism from "./entryDOM.js"
import entryGrabber from "./entryGrabber.js"
import deleteEvent from "./deleteListener.js"


// loads previous journal entries
API.getJournalEntries()
    .then((entryData)  => { let journalEntries = entryData
        return journalEntries})
    .then( (journalEntries) => entryMechanism.journalPost(journalEntries) )


//grabs new entry and passes to API Post
 document.querySelector("#myJournalButton").addEventListener("click", event => {

    //journal entry factor function
    let entryObj = entryGrabber()

    API.saveJournalEntry(entryObj).then(document.querySelector(".oldEntries").innerHTML = "")
       .then(API.getJournalEntries()
            .then((newData) => {let newEntries = newData
                console.log(newEntries)
                return newEntries})
            .then((newEntries) => entryMechanism.journalPost(newEntries)))
})


// listens for delete command via click
    deleteEvent.registerDeleteListener()



