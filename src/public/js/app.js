const noteContainer = document.querySelector(".note-container");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector("form");
const title = document.querySelector("#title");

class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Math.random();
  }
}

// UI updates on pug
function addNoteToList(note) {
  const newUINote = document.createElement("div");
  newUINote.classList.add("note");
  newUINote.innerHTML = `
    <span hidden>${note.id}</span>
    <h2 class="note_title">${note.title}</h2>
    <p class="note_body">${note.body}</p>
    <div class="note_button_box">
      <button class="note_button note_view">View Detail</button>
      <button class="note_button note_delete">Delete Note</button>
      <button class="note_button note_download">Download Note</button>
    </div>
  `;
  noteContainer.appendChild(newUINote);
}

function getNotes() {}

function displayNotes() {
  const notes = getNotes();
  notes.forEach((note) => {
    addNoteToList(note);
  });
}

const addNotesToDb = async (note) => {
  console.log(note, "note");
};

// Event: note form submit
function handleForm(event) {
  event.preventDefault();
  const titleInput = document.querySelector("#title");
  const noteInput = document.querySelector("#note");

  // validate inputs
  if (titleInput.value.length > 0 && noteInput.value.length > 0) {
    const newNote = new Note(titleInput.value, noteInput.value);
    addNoteToList(newNote);
    addNotesToDb(newNote);
    titleInput.value = "";
    noteInput.value = "";
    titleInput.focus();
  }
  console.log(titleInput.value);
}
form.addEventListener("submit", handleForm);
