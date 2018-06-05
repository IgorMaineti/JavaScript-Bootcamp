const titleElement = document.querySelector('#note-title') 
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const updateElement = document.querySelector('#note-update')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find( (note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

// Edit time
updateEdit(notes)

// Note title
titleElement.value = note.title
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    updateEdit(notes)
    
})

//Note body
bodyElement.value = note.body
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    updateEdit(notes)
    
})

//Remove button
removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
       notes = JSON.parse(e.newValue)

       let note = notes.find(function (note){
        return note.id === noteId
    })
            
    if (!note) {
        location.assign('/index.html')
    }
    titleElement.value = note.title
    bodyElement.value = note.body
    notes.updatedAt = moment().valueOf()
    updateEdit(notes)
    }
})

