const journalPost = () => {

    for (const property in journalEntries) {
        //convertys object into html entry
        const journalEntryHTML = entryConverter(property)
        
        //locate html tag to post entries in
        const journalEntryElement =  document.querySelector('.oldEntries')

        //post entries
        journalEntryElement += journalEntryHTML
    }

}