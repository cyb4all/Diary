const addBtn = document.querySelector('.add');
const notesContainer = document.querySelector('.notes-container');


window.addEventListener('DOMContentLoaded', () => {
  const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
  savedNotes.forEach(text => createNote(text));
});


function createNote(text = "") {
  const note = document.createElement('p');
  note.className = 'input-box';
  note.contentEditable = true;
  note.textContent = text;

  const img = document.createElement('img');
  img.src = 'https://i.postimg.cc/9fWvb9Nx/garbage.png'; 
  img.addEventListener('click', () => {
    note.remove();
    saveNotes();
  });

  note.appendChild(img);
  notesContainer.appendChild(note);

  note.addEventListener('input', saveNotes);
}

addBtn.addEventListener('click', () => {
  createNote();
  saveNotes();
});

function saveNotes() {
  const notes = document.querySelectorAll('.input-box');
  const data = [];

  notes.forEach(note => {
    const text = note.textContent;
    data.push(text);
  });

  localStorage.setItem('notes', JSON.stringify(data));
}
