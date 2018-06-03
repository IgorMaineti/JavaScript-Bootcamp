const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const noteId = uuidv4()
    notes.push({
        id: noteId,
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
    goToEditPage(noteId)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})