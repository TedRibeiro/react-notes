import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { NoteEditModel } from "../models/Models";

const EditModal = (props: NoteEditModel) => {
    let { isEdit, open, setOpen } = props;

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
                    <Typography id="add-note-modal-title" variant="h6">
                        {isEdit ? 'Edit Note' : 'New Note'}
                    </Typography>
                    <IconButton onClick={setOpen}>
                        <Close />
                    </IconButton>
                </Box>
                <Stack>
                    <Typography variant="h6">
                        EditModal
                    </Typography>
                </Stack>
            </Stack>
        </Modal>
    );
}

export default EditModal;