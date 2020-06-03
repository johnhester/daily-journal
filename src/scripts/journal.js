// Journal entry converter object -> html
const entryConverter = (journalObject) => {
    const entryHTMLRep = `
    <section class="prevEntry">
        <div class="prevEntry__banner">
            <div class="prevEntry__banner--element">${journalObject.journaldate}</div>
            <div class="prevEntry__banner--element">Concepts: ${journalObject.journalConcepts}</div>
            <div class="prevEntry__banner--element">Mood: ${journalObject.mood}</div>
        </div>
        <p class="prevEntry__text">${journalObject.journalEntry}</p>
    </section>
    `
    return entryHTMLRep;
}