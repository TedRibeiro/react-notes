import { AddOutlined } from '@mui/icons-material';

const AddNoteButton = () => {
    return (
        <div className="border-neutral-600 
                        border-dashed 
                        border-2 
                        rounded 
                        flex 
                        justify-center 
                        items-center
                        hover:cursor-pointer
                        hover:bg-gray-50">
            <AddOutlined />
        </div>
    );
}

export default AddNoteButton;