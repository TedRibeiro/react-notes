import { AddOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import EditModal from './EditModal';

const AddNoteButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Tooltip title="Add Note">
                <div onClick={() => setOpen(!open)}
                    className="border-neutral-600 
                border-dashed 
                border-2 
                rounded 
                flex 
                justify-center 
                items-center
                hover:cursor-pointer
                hover:bg-gray-50
                min-h-[12rem]">
                    <AddOutlined />
                </div>
            </Tooltip>
            <EditModal open={open} setOpen={() => { setOpen(!open) }} />
        </div>
    );
}

export default AddNoteButton;