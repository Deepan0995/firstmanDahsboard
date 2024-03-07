import * as React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
export default function Registration() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          p={1}
          sx={{ background: "#1a237e" }}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <Typography color={"#ffffff"} fontSize={"20px"}>
            Register
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        mt={5}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Typography>Username*</Typography>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={8}>
          <TextField
            id="username"
            label="Enter your username"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Grid
        container
        mt={3}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        lg={12}
      >
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Typography>email Id* </Typography>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={8}>
          <TextField
            id="emailid"
            label="Enter your email id"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Grid
        container
        mt={3}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        lg={12}
      >
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Typography>Password* </Typography>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={8}>
          <TextField
            id="password"
            type="password"
            label="Enter your password"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Grid
        container
        mt={3}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        lg={12}
      >
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Typography>Conform Password* </Typography>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={8}>
          <TextField
            id="password"
            type="password"
            label="Re-enter your password"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Grid
        container
        mt={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          lg={2}
          md={3}
          sm={4}
          xs={10}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-end"}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "20px", width: "300px" }}
          >
            Register
          </Button>
        </Grid>
        <Grid
          item
          mt={3}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-end"}
        >
          <Typography variant="body1" component="span">
            <Link href="https://example.com">
              Already have an account? Sign in now!
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
x