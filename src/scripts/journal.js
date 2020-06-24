/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import entryMechanism from "./entryDOM.js"
import event from "./eventListeners.js"
import list from "./moodList.js"


//loads mood selector list for new entries
document.querySelector("#mood").innerHTML += list.moods

//loads mood selector list for mood filter
document.querySelector("#moods").innerHTML += list.moods



// loads previous journal entries
API.getJournalEntries()
    .then( journalEntries => entryMechanism.journalPost(journalEntries) )

// listens for delete command via click
    event.registerDeleteListener()
    event.registerEditListener()
    event.saveButtonListener()
    event.moodFilterListener()
    event.searchBoxListener()


