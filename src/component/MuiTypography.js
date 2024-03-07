import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function MuiTypography() {
  return (
    <>
      <div border={3}>
        <Typography variant="h1">1</Typography>
        <Typography variant="h2">2</Typography>
        <Typography variant="h3" gutterBottom>
          3
        </Typography>
        <Typography variant="h4">4</Typography>
        <Typography variant="h5">5</Typography>
        <Typography variant="h6">6</Typography>
      </div>
      <Grid border={2}>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
      </Grid>
      <Box>
        <Typography variant="button">button</Typography>
        <Typography variant="srOnly">screen reader</Typography>
        <Typography variant="inherit">inherit</Typography>
      </Box>
    </>
  );
}
