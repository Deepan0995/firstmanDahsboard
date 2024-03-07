import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export default function MuiRadioButton() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <Box>
      <FormControl color="secondary">
        <FormLabel>Years Of Experience</FormLabel>

        <RadioGroup
          row
          name="job-experience"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-9" value="6-9" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
