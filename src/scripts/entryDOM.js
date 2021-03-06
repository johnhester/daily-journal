import htmlConverter from "./entryComponent.js"

// deals with modifying the dom
const entryMechanism = {
    journalPost (journalEntries) {
        document.querySelector('.oldEntries').innerHTML = ""
        for (const currentEntry of journalEntries) {
            const entryHTML = htmlConverter.entry(currentEntry)
            const journalEntryElement =  document.querySelector('.oldEntries')
            journalEntryElement.innerHTML += entryHTML
        }
    }
}


export default entryMechanism