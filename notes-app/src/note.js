
import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const body = document.querySelector('#note-body')
const edited = document.querySelector('#edited')
const title = document.querySelector('#note-title')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

title.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    edited.textContent = generateLastEdited(note.updatedAt)
})
// .value = note.title
body.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    edited.textContent = generateLastEdited(note.updatedAt)
})

document.querySelector('#remove-note').addEventListener('click', (e) => {
    removeNote(noteId)
    location.href = location.origin
})
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})

