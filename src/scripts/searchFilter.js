export default {
    filterEntries (journalEntries, search) {
        const results = []
        //iterate through entries
        journalEntries.forEach( entry => {
        //filter entries based on search criteria
        if (entry.date.includes(search) || entry.concepts.includes(search) || entry.entry.includes(search) || entry.mood.includes(search)) {
            results.push(entry)
    
        }       
    }) 
    console.log(results)
    return results
    }
}