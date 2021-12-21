import React, { useEffect, useState } from "react";
import { NoteModel } from "../models/Models";
import { getAllNotes } from "../services/NoteService";

export const NotesContext = React.createContext({});

export const NotesProvider = (props: any) => {
  const [notes, setNotes] = useState(new Array<NoteModel>());

  useEffect(() => {
    const notesLocalStorage = getAllNotes();
    if (notesLocalStorage) {
      setNotes(notesLocalStorage);
    } else {
      setNotes(new Array<NoteModel>());
    }
  }, []);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): any => React.useContext(NotesContext);
