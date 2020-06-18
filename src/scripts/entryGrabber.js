
// grabs new entry data 



const entryGrabber = () => {

    const journalEntryObj = {}

    journalEntryObj.date = document.querySelector("#journalDate").value
    journalEntryObj.concepts = document.querySelector("#journalConcepts").value
    journalEntryObj.entry = document.querySelector("#journalEntry").value
    journalEntryObj.mood = document.querySelector("#mood").value

   return journalEntryObj
}


export default entryGrabber