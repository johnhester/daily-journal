/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import entryMechanism from "./entryDOM.js"
import event from "./eventListeners.js"


// loads previous journal entries
API.getJournalEntries()
    .then( journalEntries => entryMechanism.journalPost(journalEntries) )

//test




// listens for delete command via click
    event.registerDeleteListener()
    event.registerEditListener()
    event.saveButtonListener()


