


const entryMechanism = {
    journalPost () {
        for (const currentEntry of journalEntries) {
            const entryHTML = entryConverter(currentEntry)
            const journalEntryElement =  document.querySelector('.oldEntries')
            journalEntryElement.innerHTML += entryHTML
        }
    }
}

