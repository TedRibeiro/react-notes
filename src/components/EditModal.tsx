import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Stack, TextField, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import useForm from "../hooks/useForm";
import { NoteEditModel } from "../models/Models";
import { useNotes } from "../providers/Notes";
import { updateNote, insertNote, getAllNotes } from "../services/NoteService";

const EditModal = (props: NoteEditModel) => {
    let { id, title, subtitle, content, isEdit, open, setOpen } = props;
    const [mdValue, setMdValue] = useState(content ?? '');
    const { setNotes } = useNotes();

    let { values, handleChange, handleSubmit } = useForm({
        content: content ?? '',
        title: title ?? '',
        subtitle: subtitle ?? ''
    });

    const submit = () => {
        if (isEdit) {
            updateNote({
                id,
                ...values
            });

        } else {
            insertNote(values);
        }
        setOpen();
        console.log(getAllNotes());
        setNotes(getAllNotes());
    }

    const onMdChange = (val: string) => {
        setMdValue(val);
        values.content = val;
    };

    return (
        <Modal
            aria-labelledby="add-note-modal-title"
            aria-describedby="add-note-modal-description"
            className="flex items-center justify-center"
            open={open}
            onClose={setOpen}
            closeAfterTransition
        >
            <Stack className="bg-orange-200 p-10 sm:min-w-[40rem] max-w-screen-sm">
                <Box sx={{ display: 'flex' }} justifyContent="space-between">
                    <Typography id="add-note-modal-title" variant="h6" component="h2">
                        {isEdit ? 'Edit Note' : 'New Note'}
                    </Typography>
                    <IconButton onClick={setOpen}>
                        <Close />
                    </IconButton>
                </Box>
                <form onSubmit={handleSubmit(submit)}>
                    <Stack sx={{ gap: 2, mt: 2 }}>
                        <TextField
                            required
                            id="text-field-title"
                            label="Title"
                            className="bg-white"
                            onChange={handleChange}
                            name="title"
                            value={values.title}
                        />
                        <TextField
                            required
                            id="text-field-subtitle"
                            label="Subtitle"
                            className="bg-white"
                            onChange={handleChange}
                            name="subtitle"
                            value={values.subtitle}
                        />
                        <div className="relative">
                            <MDEditor
                                onChange={(val) => onMdChange(val ?? '')}
                                preview='edit'
                                value={mdValue}
                            />
                            <div className="absolute top-0 right-1/3 -z-10">
                                <TextField
                                    required
                                    id="text-field-content"
                                    onChange={handleChange}
                                    name="content"
                                    value={values.content}
                                />
                            </div>
                        </div>

                        <Box marginLeft="auto" sx={{ display: 'flex', mt: 2, gap: 2 }}>
                            <Button variant="outlined" onClick={setOpen}>
                                Cancel
                            </Button>
                            <Button variant="contained" type="submit">
                                Save
                            </Button>
                        </Box>
                    </Stack>
                </form>
            </Stack>
        </Modal>
    );
}

export default EditModal;