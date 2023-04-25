// import React component
import { useState, useEffect } from "react";
import dayjs from "dayjs";

// import Redux components

// import MUI components
import {
  InputBase,
  FormControl,
  Typography,
  MenuItem,
  Select,
  Avatar,
} from "@mui/material";

// import avatar img
import avatar1 from "../img/avatar/defaultAvatar.jpg";
import { Stack } from "@mui/system";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const FormDataText = ({
  title,
  data,
  isEditting,
  editedData,
  callback,
  name,
  id,
}) => {
  return (
    <FormControl
      sx={{
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
      }}
      fullWidth
    >
      <Typography
        sx={{ color: "#333333", fontWeight: "light" }}
        width="90px"
        variant="body1"
      >
        {title}:
      </Typography>

      <InputBase
        value={data}
        name={name}
        id={id}
        size="small"
        sx={{
          bgcolor: "#f1f1f1",
          paddingLeft: "10px",
          alignItems: "center",

          fontSize: "15px",
          fontWeight: 400,
          color: "#333333",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
        fullWidth
        multiline
        disabled={!isEditting}
        onChange={callback}
        type="text"
      />
    </FormControl>
  );
};

export const FormDataSelect = ({
  title,
  data,
  isEditting,
  editedData,
  callback,
  name,
}) => {
  const [isActive, setIsActive] = useState(data);
  const handleChange = (e) => {
    setIsActive(e.target.value);
  };

  useEffect(() => {
    setIsActive(data);
  }, [data]);

  return (
    <FormControl
      sx={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "#333333", fontWeight: "light" }}
        width="70px"
        variant="body2"
      >
        {title}:
      </Typography>

      <Select
        defaultValue={isActive}
        value={editedData}
        name={name}
        size="small"
        sx={{ height: "30px", bgcolor: "#f1f1f1" }}
        disabled={!isEditting}
        onChange={callback}
      >
        <MenuItem value={true}>true</MenuItem>
        <MenuItem value={false}>false</MenuItem>
      </Select>
    </FormControl>
  );
};

export const UserFormDataText = ({
  title,
  data,
  isEditting,
  editedData,
  callback,
  name,
  id,
}) => {
  return (
    <FormControl
      sx={{
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
      }}
      fullWidth
    >
      <Typography
        sx={{ color: "#333333", fontWeight: "light" }}
        width="250px"
        variant="body1"
      >
        {title}:
      </Typography>

      <InputBase
        value={data}
        name={name}
        id={id}
        size="small"
        sx={{
          bgcolor: "#f1f1f1",
          paddingLeft: "10px",
          alignItems: "center",

          fontSize: "15px",
          fontWeight: 400,
          color: "#333333",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
        fullWidth
        multiline
        disabled={!isEditting}
        onChange={callback}
        type="text"
      />
    </FormControl>
  );
};
export const UserFormDataPassword = ({
  title,
  data,
  isEditting,
  editedData,
  callback,
  name,
  id,
}) => {
  return (
    <FormControl
      sx={{
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
      }}
      fullWidth
    >
      <Typography
        sx={{ color: "#333333", fontWeight: "light" }}
        width="250px"
        variant="body1"
      >
        {title}:
      </Typography>

      <InputBase
        value={data}
        name={name}
        id={id}
        size="small"
        sx={{
          bgcolor: "#f1f1f1",
          paddingLeft: "10px",
          alignItems: "center",

          fontSize: "15px",
          fontWeight: 400,
          color: "#333333",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
        fullWidth
        disabled={!isEditting}
        onChange={callback}
        type="password"
      />
    </FormControl>
  );
};

export const UserFormDataDate = ({
  title,
  data,
  isEditting,
  editedData,
  callback,
  name,
  id,
}) => {
  return (
    <FormControl
      sx={{
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
      }}
      fullWidth
    >
      <Typography
        sx={{ color: "#333333", fontWeight: "light" }}
        width="250px"
        variant="body1"
      >
        {title}:
      </Typography>
      <input
        value={dayjs(data).format("YYYY-MM-DD")}
        type="date"
        name="birthday"
        style={{
          border: "none",
          width: "100%",
          backgroundColor: "#f1f1f1",
          height: "22px",
        }}
        onChange={callback}
        disabled={!isEditting}
      ></input>
    </FormControl>
  );
};

export function FormSelect({
  title,
  data,
  isEditting,
  editedData,
  callback,
  name,
  id,
}) {
  return (
    <FormControl
      sx={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "#333333", fontWeight: "light" }}
        width="150px"
        variant="body1"
      >
        {title}:
      </Typography>

      <Select
        name={name}
        size="small"
        sx={{ height: "30px", bgcolor: "#f1f1f1" }}
        onChange={callback}
        fullWidth
      >
        <MenuItem value="avatar1">
          <Stack direction="row" spacing="20px" alignItems="center">
            <Avatar src={avatar1} /> <Typography>avatar1</Typography>
          </Stack>
        </MenuItem>
        <MenuItem value="avatar2">false</MenuItem>
      </Select>
    </FormControl>
  );
}
