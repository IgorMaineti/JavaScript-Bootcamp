let  notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const noteId = uuidv4()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    })
    saveNotes(notes)
    goToEditPage(noteId)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change',(e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
    notes = JSON.parse(e.newValue)
    
    renderNotes(notes, filters)
    }
})
