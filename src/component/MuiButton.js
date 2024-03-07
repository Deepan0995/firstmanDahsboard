import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export default function MuiButton() {
  return (
    <>
      <Stack spacing={4}>
        <Stack border={2} spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained" href="/users">
            Users
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>

          <Button
            variant="contained"
            color="success"
            startIcon={<InsertEmoticonIcon />}
          >
            Success
          </Button>
          <Button
            variant="contained"
            color="info"
            size="small"
            endIcon={<InsertEmoticonIcon />}
          >
            info
          </Button>
        </Stack>
        <Stack spacing={3} border={3} direction="row">
          <Button variant="contained" color="primary" size="small">
            small
          </Button>
          <Button variant="contained" color="primary" size="medium">
            medium
          </Button>
          <Button variant="contained" color="primary" size="large">
            large
          </Button>

          <IconButton color="secondary">
            <InsertEmoticonIcon />
          </IconButton>

          <IconButton aria-label="emoji" color="warning" size="large">
            <InsertEmoticonIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack direction="row" marginTop="10px">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack
        direction="row"
        marginTop="20px"
        marginLeft="20px"
        aria-label="alignment button group"
      >
        <ButtonGroup variant="outlined">
          <Button onClick={() => alert("left Clicked")}>Left</Button>
          <Button onClick={() => alert("center Clicked")}>Center</Button>
          <Button onClick={() => alert("right Clicked")}>Right</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
}
