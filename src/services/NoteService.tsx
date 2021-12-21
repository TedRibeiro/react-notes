import { NoteRegisterModel, NotesListModel, NoteUpdateModel } from "../models/Models";

const KEYS = {
    allNotes: 'ALL_NOTES',
    lastId: 'LAST_ID'
}

export const insertNote = (data: NoteRegisterModel): void => {
    let notes = getAllNotes();
    notes.push({
        id: generateId(),
        createdAt: getNowTime(),
        ...data
    })
    localStorage.setItem(KEYS.allNotes, JSON.stringify(notes));
}

export const updateNote = (data: NoteUpdateModel): void => {
    let notes = getAllNotes();
    let index = notes.findIndex(x => x.id === data.id);
    if (index !== -1) {
        let oldNote = notes[index];
        notes[index] = { ...data, createdAt: oldNote.createdAt, updatedAt: getNowTime() };

        localStorage.setItem(KEYS.allNotes, JSON.stringify(notes));
    }
}

export const deleteNoteById = (id: number): void => {
    let notes = getAllNotes();
    notes = notes.filter(x => x.id !== id);
    localStorage.setItem(KEYS.allNotes, JSON.stringify(notes));
}

export const getAllNotes = (): NotesListModel => {
    if (localStorage.getItem(KEYS.allNotes) == null) {
        localStorage.setItem(KEYS.allNotes, JSON.stringify([]))
    }
    const notes = JSON.parse(localStorage.getItem(KEYS.allNotes) ?? '',) as NotesListModel;

    return notes;
}

const generateId = () => {
    if (localStorage.getItem(KEYS.lastId) == null) {
        localStorage.setItem(KEYS.lastId, '0');
    }
    var id = parseInt(localStorage.getItem(KEYS.lastId) ?? '');
    localStorage.setItem(KEYS.lastId, (++id).toString())
    return id;
}

const getNowTime = (): string => {
    const date = new Date();

    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}
