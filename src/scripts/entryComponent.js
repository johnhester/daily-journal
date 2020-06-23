// Journal entry converter object -> html


const htmlConverter = {
    entry (journalObject) {
        const entryHTMLRep = `
        <section class="entry--${journalObject.Id} prevEntry">
            <div class="prevEntry__banner">
                <div class="prevEntry__banner--element">Date: ${journalObject.date}</div>
                <div class="prevEntry__banner--element">Concepts: ${journalObject.concepts}</div>
                <div class="prevEntry__banner--element">Mood: ${journalObject.mood}</div>
            </div>
            <p class="prevEntry__text" id="entryBody">${journalObject.entry}</p>
            <button class= "prevEntry__delete prevEntry--button" id="deleteEntry--${journalObject.id}">
                Delete Entry
            </button>
            <button class= "prevEntry__edit prevEntry--button" id="editEntry--${journalObject.id}">
            Edit Entry
        </button>
        </section>
        `
        return entryHTMLRep;
    }
}


export default htmlConverter