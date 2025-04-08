import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useStateValue } from "./state";
import { createDuplicateFinderInstance } from "./utils/nativeUtil";
import { addDuplicates } from "./actions/actions";

const FolderSelector = () => {
    const [{ duplicates }, dispatch] = useStateValue();
    const [selectedPath, setSelectedPath] = useState("");

    const setPathValue = async () => {
        try {
            const result = await window.electronAPI.selectDirectory();

            if (result.filePaths?.[0]) {
                console.debug("Selected path:", result.filePaths[0]);
                setSelectedPath(result.filePaths[0]);
            }
        } catch (error) {
            console.error("Error selecting folder:", error);
        }
    };

    const scanFolder = () => {
        if (!selectedPath) return;

        const instance = createDuplicateFinderInstance(selectedPath);
        const results = instance.scan();

        dispatch(addDuplicates(results));
    };

    return (
        <Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Button variant="contained" onClick={setPathValue}>
                    Select Folder
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!selectedPath}
                    onClick={scanFolder}
                >
                    Scan Duplicates
                </Button>
            </Box>
            <Typography variant="body2" color="text.secondary">
                {selectedPath ? `Selected folder: ${selectedPath}` : "No folder selected."}
            </Typography>
        </Box>
    );
};

export default FolderSelector;
