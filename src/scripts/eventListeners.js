import API from "./data.js"
import entryMechanism from "./entryDOM.js"
import updateFormFields from "./updateEntry.js"
import editEntry from "./editEntry.js"

const entryList = document.querySelector(".oldEntries")
const saveButton = document.querySelector("#myJournalButton")

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
    },
    registerEditListener () {
        entryList.addEventListener("click", event => {
            if (event.target.id.startsWith("editEntry--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
        
                /*
                    This function will get the recipe from the API
                    and populate the form fields (see below)
                */
                updateFormFields(entryIdToEdit)
            }
        })
    },
    saveButtonListener () {
        saveButton.addEventListener("click", event => {
            const hiddenEntryId = document.querySelector("#entryId").value
            console.log(hiddenRecipeId)

            // If the input field has a value, then user is editing
            // If the input field has no value, then user is creating

            if (hiddenEntryId.value !== "") {
                editEntry(hiddenEntryId)
            } else {
                //save functionality goes here
            }
        })
    }
}