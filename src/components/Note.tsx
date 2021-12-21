import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { NoteModel } from "../models/Models";
import { useNotes } from "../providers/Notes";
import { deleteNoteById, getAllNotes } from "../services/NoteService";
import EditModal from "./EditModal";
import ViewModal from "./ViewModal";

const Note = (props: NoteModel) => {
    const [openView, setOpenView] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    
    const { id, title, subtitle, updatedAt, createdAt } = props;
    
    const {setNotes} = useNotes();


    const viewNote = () => {
        setOpenView(!openView);
    }
    const editNote = () => {
        setOpenEdit(!openEdit);
    }
    const deleteNote = () => {
        deleteNoteById(id);
        setNotes(getAllNotes());
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
                        justify-between
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
                <Tooltip title="Edit Note">
                    <IconButton onClick={editNote}>
                        <EditOutlined />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete Note">
                    <IconButton onClick={deleteNote}>
                        <DeleteOutlined />
                    </IconButton>
                </Tooltip>
            </div>
            <ViewModal {...props} open={openView} setOpen={() => { setOpenView(!openView) }} />
            <EditModal {...props} open={openEdit} setOpen={() => { setOpenEdit(!openEdit) }} isEdit={true} />
        </div>
    );
}

export default Note;
