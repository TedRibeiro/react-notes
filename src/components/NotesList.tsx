import { NotesListModel } from "../models/Models";
import Note from "./Note";

const notesMock: NotesListModel = [
    {id: 1, title: 'Note 1', subtitle: 'Subtitle 1', content: 'Content 1', createdAt: '19/12/2021 23:36', updatedAt: '19/12/2021 23:36'},
    {id: 2, title: 'Note 2', subtitle: 'Subtitle 2', content: 'Content 2', createdAt: '19/12/2021 23:36'},
    {id: 3, title: 'Note 3', subtitle: 'Subtitle 3', content: 'Content 3', createdAt: '19/12/2021 23:36'},
    {id: 4, title: 'Note 4', subtitle: 'Subtitle 4', content: 'Content 4', createdAt: '19/12/2021 23:36', updatedAt: '19/12/2021 23:36'},
    {id: 5, title: 'Note 5', subtitle: 'Subtitle 5', content: 'Content 5', createdAt: '19/12/2021 23:36'},
]

const NotesList = () => {
    return <div className="grid gap-2 grid-cols-3">
        {notesMock.map(n => <Note key={n.id.toString()} {...n} />)}
    </div>
}

export default NotesList;