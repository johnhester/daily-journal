import API from "./data.js" 
import entryGrabber from "./entryGrabber.js"

const updateFormFields = entryId => {

    // Get reference to input fields in the form
    const hiddenEntryId = document.querySelector("#entryId")
    const journalDateInput= document.querySelector("#journalDate")
    const journalConceptsInput = document.querySelector("#journalConcepts")
    const journalEntryInput = document.querySelector("#journalEntry")
    const journalMoodInput = document.querySelector("#mood")

    API.getSingleEntry(entryId)
        .then(entryToEdit => {
            /*
                Now that you KNOW you have the data, render
                an editing form that represents the current
                state of the resource.
            */
            hiddenEntryId.value = entryToEdit.id // Hidden value. User no see. 🙈
            journalDateInput.value = entryToEdit.date
            journalConceptsInput.value = entryToEdit.concepts
            journalEntryInput.value = entryToEdit.entry
            journalMoodInput.value = entryToEdit.mood
        })
}

export default updateFormFields