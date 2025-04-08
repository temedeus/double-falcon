import React, { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    ListItemSecondaryAction,
    IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

const CollapsableListItem = ({ title, duplicateItemPaths, deleteAction }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen((prev) => !prev);

    return (
        <>
            <ListItem button onClick={handleClick} sx={{ bgcolor: "#f0f0f0" }}>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {duplicateItemPaths.map((path) => (
                        <ListItem
                            key={path}
                            button
                            sx={{ pl: 4, borderBottom: "1px solid #eee" }}
                        >
                            <ListItemText primary={path} />

                            <ListItemSecondaryAction>
                                <DeleteConfirmationDialog
                                    deletePath={path}
                                    deleteAction={() => deleteAction(title, path)}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default CollapsableListItem;
