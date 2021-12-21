import { NoteModel } from "../models/Models";
import { useNotes } from "../providers/Notes";
import AddNoteButton from "./AddNoteButton";
import Note from "./Note";

const NotesList = () => {
    const {notes} = useNotes();
    
    if (notes.length > 0) {
        return (
            <div className="grid gap-2 grid-cols-3">
                <AddNoteButton />
                {notes.map((n: NoteModel) => <Note key={n.id.toString()} {...n} />)}
            </div>
        );
    } else {
        return (
            <div className="w-64">
                <AddNoteButton />
                <p className="mt-2 text-center">No notes found</p>
            </div>
        );
    }
}


export default NotesList;