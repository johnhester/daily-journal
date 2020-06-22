import API from "./data.js"
import entryMechanism from "./entryDOM.js"
import clear from "./clearForm.js"


const editEntry = id => {
    const updatedObject = {
        date: document.querySelector("#journalDate").value,
        concepts: document.querySelector("#journalConcepts").value,
        entry: document.querySelector("#journalEntry").value,
        mood: document.querySelector("#mood").value
    }

    // Logic for the PUT operation
    API.editEntry(id, updatedObject)
    .then(() => {
        /*
            Since this is the point in the code where you KNOW
            the operation completed successfully, clear the
            value of the hidden input field to that your
            application is back to the state of creating instead
            of editing
        */

        clear()
    })
    .then(API.getJournalEntries).then(entries => entryMechanism.journalPost(entries))
    

}


export default editEntry