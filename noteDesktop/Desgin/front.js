// Get reference to the "Add" button element
const addButton = document.getElementById('add')

// Retrieve notes from local storage and parse them as JSON
const notes = JSON.parse(localStorage.getItem('notes'))

// If there are existing notes, add each one to the UI
if (notes) {
    notes.forEach(note => addNewNote(note))
}

// Add an event listener to the "Add" button to create a new note
addButton.addEventListener('click', () => addNewNote())

// Function to add a new note to the UI
function addNewNote(text = '') {
    // Create a new note element
    const note = document.createElement('div')
    note.classList.add('note')

    // Set the HTML content of the note element
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    // Get references to various elements within the note
    const editButton = note.querySelector('.edit')
    const deleteButton = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    // Set the initial values for text and HTML content
    textArea.value = text
    main.innerHTML = marked(text)

    // Add event listener for the delete button
    deleteButton.addEventListener('click', () => {
        note.remove()

        // Update local storage after removing a note
        updateLS()
    })

    // Add event listener for the edit button
    editButton.addEventListener('click', () => {
        // Toggle visibility of main and textArea elements
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    // Add event listener for input changes in the textArea
    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        // Update the HTML content of the main element with marked text
        main.innerHTML = marked(value)

        // Update local storage after modifying the note
        updateLS()
    })

    // Append the new note to the body of the document
    document.body.appendChild(note)
}

// Function to update local storage with the current notes
function updateLS() {
    // Get all textarea elements
    const notesText = document.querySelectorAll('textarea')

    // Initialize an array to store the notes
    const notes = []

    // Populate the notes array with the values from textareas
    notesText.forEach(note => notes.push(note.value))

    // Update local storage with the JSON stringified notes array
    localStorage.setItem('notes', JSON.stringify(notes))
}
