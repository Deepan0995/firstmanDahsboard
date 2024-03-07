import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MuiSelect() {
  const [country, setCountry] = useState("");
  const [users, setUsers] = useState("");
  const [products, setProducts] = useState("");
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeUser = (e) => {
    setUsers(e.target.value);
  };

  const handleChangeProduct = (e) => {
    setProducts(e.target.value);
  };
  console.log(country);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="contained">Select Field</Button>
      </div>

      <Box padding="10px" width="250px" marginLeft="30px " marginTop="20px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChangeCountry}
          fullWidth
          color="primary"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Aus">Australia</MenuItem>
        </TextField>
      </Box>

      <Box padding="10px" width="250px" marginLeft="30px " marginTop="20px">
        <TextField
          label="Users"
          select
          value={users}
          onChange={handleChangeUser}
          fullWidth
          color="secondary"
        >
          <MenuItem value="add">Add User</MenuItem>
          <MenuItem value="edit">Edit User</MenuItem>
          <MenuItem value="view">View User</MenuItem>
        </TextField>
      </Box>

      <Box padding="10px" width="250px" marginLeft="30px " marginTop="20px">
        <TextField
          label="Products"
          select
          value={products}
          onChange={handleChangeProduct}
          fullWidth
          color="success"
        >
          <MenuItem value="add">Add Product</MenuItem>
          <MenuItem value="edit">Edit Product</MenuItem>
          <MenuItem value="view">View Product</MenuItem>
        </TextField>
      </Box>
    </>
  );
}
