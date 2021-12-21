import { AddOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

const AddNoteButton = () => {
    return (
        <Tooltip title="Add Note">
            <div className="border-neutral-600 
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
    );
}

export default AddNoteButton;