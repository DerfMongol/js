import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDom(note)
            // noteElement.textContent = note.title
            notesEl.appendChild(noteElement)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }

    
}

const generateNoteDom = (note) => {

    const noteElement = document.createElement('a')
    const textElement = document.createElement('p')
    const statusElement = document.createElement('p')

    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unamed Note'
    }
    textElement.classList.add('list-item__title')
    noteElement.appendChild(textElement)

    noteElement.href = `/note.html#${note.id}`
    noteElement.classList.add('list-item')

    statusElement.textContent = generateLastEdited(note.updatedAt)
    statusElement.classList.add('list-item__subtitle')
    noteElement.appendChild(statusElement)


    return noteElement
}

const initializeEditPage = (noteId) => {
    const body = document.querySelector('#note-body')
    const edited = document.querySelector('#edited')
    const title = document.querySelector('#note-title')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/index.html')
    }

    title.value = note.title
    body.value = note.body
    edited.textContent = generateLastEdited(note.updatedAt)
}


const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}

export { generateNoteDom, renderNotes, generateLastEdited, initializeEditPage }