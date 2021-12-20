import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NoteModel } from "../models/Models";

const Note = (props: NoteModel) => {
    const { title, subtitle, updatedAt, createdAt } = props;

    const viewNote = () => {
        console.log('viewNote')
    }
    const editNote = () => {
        console.log('editNote')
    }
    const deleteNote = () => {
        console.log('deleteNote')
    }

    return (
        <div className="relative group">
            <div onClick={viewNote}
                className="p-6 
                        rounded 
                        bg-orange-200
                        hover:cursor-pointer 
                        hover:bg-orange-300 
                        flex 
                        flex-col
                        min-h-[12rem]">
                <div>
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="text-sm">{subtitle}</p>
                </div>
                <div>
                    {
                        <small className="text-xs">
                            {updatedAt ? 'Updated' : 'Created'} {updatedAt ?? createdAt}
                        </small>
                    }
                </div>
            </div>
            <div className="absolute 
                            top-2 
                            right-2 
                            sm:hidden
                            group-hover:block">
                <IconButton onClick={editNote}>
                    <EditOutlined />
                </IconButton>
                <IconButton onClick={deleteNote}>
                    <DeleteOutlined />
                </IconButton>
            </div>
        </div>
    );
}

export default Note;
