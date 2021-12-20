export interface NoteModel {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    updatedAt?: string,
    createdAt: string
}
export interface NotesListModel extends Array<NoteModel>{};