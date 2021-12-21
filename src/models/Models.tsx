export interface NoteModel {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    updatedAt?: string,
    createdAt: string
}
export interface NotesListModel extends Array<NoteModel> { };

export interface NoteViewModel extends NoteModel {
    open: boolean,
    setOpen: () => void
}

export interface NoteEditModel {
    id?: number,
    title?: string,
    subtitle?: string,
    content?: string,
    isEdit?: boolean,
    open: boolean,
    setOpen: () => void
}