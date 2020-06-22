import API from "./data.js"
import entryGrabber from "./entryGrabber.js"
import clear from "./clearForm.js"



const saveEntry = () => {

    let entryObj = entryGrabber()

    API.saveJournalEntry(entryObj)
        .then(clear())
        .then(API.getJournalEntries)
        .then(newEntries => entryMechanism.journalPost(newEntries))
}


export default saveEntry