import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteConfirmationDialog = ({ deleteAction, deletePath }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => setOpen(true);
  const handleConfirmDelete = () => {
    deleteAction();
    setOpen(false);
  };
  const handleClose = () => setOpen(false);

  return (
      <>
        <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>

        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Are you sure you wish to delete?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to delete the following file? This action is
              <strong> irreversible</strong>:<br />
              <code>{deletePath}</code>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button
                onClick={handleConfirmDelete}
                variant="contained"
                color="error"
                autoFocus
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
  );
};

export default DeleteConfirmationDialog;
