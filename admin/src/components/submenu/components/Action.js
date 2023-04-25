import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import MUI components
import { Box, Stack, Button } from "@mui/material";
import {
  AddBoxOutlined as AddBoxOutlinedIcon,
  DisabledByDefaultOutlined as DisabledByDefaultOutlinedIcon,
  DriveFileRenameOutline as DriveFileRenameOutlineIcon,
  Save as SaveIcon,
  DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";

function Action({ edit, cancel, save, add, del, mode, data }) {
  return (
    <Box>
      {mode.editting ? (
        <Stack direction="row" spacing={2}>
          <Button
            color="error"
            startIcon={<DisabledByDefaultOutlinedIcon />}
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button startIcon={<SaveIcon />} onClick={save}>
            Save
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button startIcon={<AddBoxOutlinedIcon />} onClick={add}>
            Add
          </Button>

          {data._id ? (
            <>
              <Button
                color="error"
                startIcon={<DeleteForeverIcon />}
                onClick={() => {
                  del(data._id);
                }}
              >
                Delete
              </Button>
              <Button startIcon={<DriveFileRenameOutlineIcon />} onClick={edit}>
                Edit
              </Button>
            </>
          ) : null}
        </Stack>
      )}
    </Box>
  );
}

export default Action;
