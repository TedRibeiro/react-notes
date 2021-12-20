import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { NoteViewModel } from "../models/Models";

const ViewModal = (props: NoteViewModel) => {
  const {title, subtitle, content, createdAt, updatedAt, open, setOpen} = props;

  return (
    <Modal
      aria-labelledby="view-note-modal-title"
      aria-describedby="view-note-modal-description"
      className="flex items-center justify-center"
      open={open}
      onClose={setOpen}
      closeAfterTransition
    >
      <Box className="bg-orange-200 p-10 sm:min-w-[40rem] max-w-screen-sm">
        <Box sx={{ display: 'flex' }} justifyContent="space-between">
          <Typography id="view-note-modal-title" variant="h6">
            {title}
          </Typography>
          <IconButton onClick={setOpen}>
            <Close />
          </IconButton>
        </Box>
        <Box>
          <Typography id="view-note-modal-title" variant="subtitle1">
            {subtitle}
          </Typography>
          <MDEditor.Markdown source={content} />
          <Typography id="view-note-modal-date" variant="caption">
              {updatedAt ? 'Last updated' : 'created'} {updatedAt ?? createdAt}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default ViewModal;