import React from 'react';
import ReactDOM from 'react-dom';
import { NoteContext, useNotes, updateNote } from './context/NoteContext';
import { NotesList } from './components/NotesList';
import { NoteEditor } from './components/NoteEditor';

const App = () => {
  return (
    <NoteContext.Provider>
      <NotesList />
      <NoteEditor id={1} />
    </NoteContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);