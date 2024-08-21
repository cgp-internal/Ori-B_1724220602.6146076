import React, { useState, useContext } from 'react';
import { NoteContext, useNotes, updateNote } from '../context/NoteContext';

const NoteEditor = ({ id }) => {
  const { notes } = useNotes();
  const currentNote = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(currentNote?.title ?? '');
  const [content, setContent] = useState(currentNote?.content ?? '');
  const [status, setStatus] = useState(currentNote?.status ?? '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(id, title, content, status);
    setTitle('');
    setContent('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="new">New</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <br />
      <button type="submit">Update Note</button>
    </form>
  );
};

export { NoteEditor };
export default NoteEditor;