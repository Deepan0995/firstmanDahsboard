import { Stack, TextField } from "@mui/material";
import React from "react";

export default function MuiTextfield() {
  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3} marginTop={4}>
          <TextField variant="standard" label="Standard" />
          <TextField variant="filled" label="filled" />

          <Stack spacing={3} orientation="vertical">
            <TextField variant="outlined" type="text" label="Enter Name" />
            <TextField
              variant="outlined"
              type="password"
              label="Enter Password"
              required
              error
              helperText="You Have 3 Times Left"
            />
            <TextField variant="outlined" type="number" label="Enter Mobile" />
            <TextField
              variant="outlined"
              type="email"
              label="Enter Email"
              size="large"
              color="secondary"
            />
            <TextField
              variant="outlined"
              type="time"
              color="secondary"
              label="Enter Time"
            />
            <TextField
              variant="filled"
              type="date"
              color="secondary"
              label="Enter Date "
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
