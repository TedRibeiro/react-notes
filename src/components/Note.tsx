import { NoteModel } from "../models/Models";

const Note = (props: NoteModel) => {
    const { title, subtitle, updatedAt, createdAt } = props;

    return (
        <div className="p-6 
                        rounded 
                        bg-orange-200
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
