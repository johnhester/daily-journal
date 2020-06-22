import API from "./data.js"
import entryMechanism from "./entryDOM.js"

const entryList = document.querySelector(".oldEntries")

export default {
    registerDeleteListener () {
        entryList.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry--")) {
                // Extract recipe id from the button's id attribute
                const entryToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                API.deleteJournalEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then(entries => entryMechanism.journalPost(entries))
            }
        })
    }
}