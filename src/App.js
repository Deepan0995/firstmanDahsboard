import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

import Appbar from "./Components/Appbar";
import React from "react";
import { Box } from "@mui/material";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      {/* adsflkdf */}
        <Appbar />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
