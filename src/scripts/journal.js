/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import entryMechanism from "./entryDOM.js"

// let journalEntries = [] 
API.getJournalEntries()
    .then((entryData)  => { let journalEntries = entryData
        return journalEntries})
    .then( (journalEntries) => entryMechanism.journalPost(journalEntries) )
//invokes fetch call 







