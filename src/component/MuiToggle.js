import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import FormatBold from "@mui/icons-material/FormatBold";

import { FormatUnderlined } from "@mui/icons-material";

export default function MuiToggle() {
  return (
    <>
      <Stack border={2} direction="row" marginTop="20px" marginLeft="20px">
        <ToggleButtonGroup>
          <ToggleButton>
            <FormatBold />
          </ToggleButton>
          <ToggleButton></ToggleButton>
          <ToggleButton>
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
}
