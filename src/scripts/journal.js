/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

let journalEntries = []
API.getJournalEntries()
    .then(entryData => journalEntries = entryData)
    .then( () => entryMechanism.journalPost() )
//invokes fetch call 






