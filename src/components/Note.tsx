import { NoteModel } from "../models/Models";

const Note = (props: NoteModel) => {
    const { title, subtitle, updatedAt, createdAt } = props;

    const viewNote = () => {
        console.log('viewNote')
    }

    return (
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
    );
}

export default Note;
