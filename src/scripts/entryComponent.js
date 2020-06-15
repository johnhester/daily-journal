// Journal entry converter object -> html


const htmlConverter = {
    entry (journalObject) {
        const entryHTMLRep = `
        <section class="prevEntry">
            <div class="prevEntry__banner">
                <div class="prevEntry__banner--element">Date: ${journalObject.date}</div>
                <div class="prevEntry__banner--element">Concepts: ${journalObject.concepts}</div>
                <div class="prevEntry__banner--element">Mood: ${journalObject.mood}</div>
            </div>
            <p class="prevEntry__text">${journalObject.entry}</p>
        </section>
        `
        return entryHTMLRep;
    }
}


export default htmlConverter