import dayjs from "dayjs";
import { TextField, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export default function Calendar() {
  const [value, setValue] = useState(new Date());

  // return (
  //   <Stack direction="row" justifyContent="space-between" margin="10px">
  //     <TextField type="date" size="small" />
  //     <TextField type="time" size="small" />
  //   </Stack>
  // );
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={(newValue) => setValue(newValue)}
        value={value}
        renderInput={(params) => <TextField {...params} />}
        componentsProps={{
          actionBar: {
            actions: ["today"],
          },
        }}
      />
    </LocalizationProvider>
  );
}
