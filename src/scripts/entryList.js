


const journalPost = () => {

    for (const currentEntry of journalEntries) {
        //convertys object into html entry
        const entryHTML = entryConverter(currentEntry)
        console.log(currentEntry)
        
        //locate html tag to post entries in
        const journalEntryElement =  document.querySelector('.oldEntries')

        //post entries
        journalEntryElement.innerHTML += entryHTML
    }

}