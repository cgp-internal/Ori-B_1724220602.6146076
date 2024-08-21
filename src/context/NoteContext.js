import { createContext, useState } from 'react';
import { notesData } from '../data/notes';

const NoteContext = createContext();

const useNotes = () => {
  const [notes, setNotes] = useState(notesData);

  const updateNote = (id, title, content, status) => {
    setNotes(notes.map((note) => {
      if (note.id === id) {
        return { id, title, content, status };
      }
      return note;
    }));
  };

  return [notes, updateNote];
};

const NoteProvider = ({ children }) => {
  const [notesState, updateNote] = useNotes();

  return (
    <NoteContext.Provider value={{ notes: notesState, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteProvider, NoteContext, useNotes };
export const { updateNote } = useNotes();