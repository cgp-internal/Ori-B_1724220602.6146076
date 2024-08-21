import { useContext } from 'react';
import { NoteContext, useNotes } from '../context/NoteContext';

const NotesList = () => {
  const notes = useNotes();

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p>Status: {note.status}</p>
        </li>
      ))}
    </ul>
  );
};

export { NotesList };
export default NotesList;