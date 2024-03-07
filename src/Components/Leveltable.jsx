import React, { useState } from "react";
import {
  Grid,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Label } from "@mui/icons-material";

export default function Leveltable() {
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/income/get_income"
        );
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // Function to check if a column is currently sorted
  const isColumnSorted = (key) => {
    return sortConfig && sortConfig.key === key;
  };

  // Function to apply sorting indicator to column headers
  const getSortIndicator = (key) => {
    if (isColumnSorted(key)) {
      return sortConfig.direction === "ascending" ? "↑" : "↓";
    }
    return null;
  };

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (isColumnSorted(key) && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Function to handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Function to handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1); // Reset page to 1 when rows per page changes
  };

  // Calculate the index of the first and last items to display based on page and rowsPerPage
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, initialRows.length);

  // Sort the paginated rows based on sortConfig
  let sortedRows = [...initialRows];
  if (sortConfig.key !== null) {
    sortedRows.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  // Slice the sorted rows array to display only the selected number of rows per page
  const paginatedRows = sortedRows.slice(startIndex, endIndex);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Paper elevation={4} style={{ flexGrow: 1 }}>
        <TableContainer>
          <Typography
            variant="h6"
            sx={{ mt: "10px", fontFamily: "sans-serif", ml: "20px" }}
          >
            ROI Payout List
          </Typography>
          <hr />
          <Grid container columnGap={1} alignItems="center" sx={{ px: 2 }}>
            <Typography variant="body1">Show</Typography>
            <FormControl size="small">
              <Select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                displayEmpty
                inputProps={{ "aria-label": "Select entries per page" }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1">Entries</Typography>
          </Grid>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell onClick={() => handleSort("id")}>
                  S.No {getSortIndicator("id")}
                </TableCell>
                <TableCell align="right" onClick={() => handleSort("memberId")}>
                  Member ID {getSortIndicator("memberId")}
                </TableCell>
                <TableCell
                  align="right"
                  onClick={() => handleSort("memberName")}
                >
                  Member Name {getSortIndicator("memberName")}
                </TableCell>
                <TableCell align="right" onClick={() => handleSort("date")}>
                  Date {getSortIndicator("date")}
                </TableCell>
                <TableCell align="right" onClick={() => handleSort("amount")}>
                  Amount {getSortIndicator("amount")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.memberId}</TableCell>
                  <TableCell align="right">{row.memberName}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Grid
        container
        justifyContent="space-between"
        style={{ padding: "20px" }}
      >
        <Grid item>
          <Typography variant="body1">Showing 1 to 21 of 21 entries</Typography>
        </Grid>

        <Pagination
          count={Math.ceil(initialRows.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          style={{
            "& .MuiPaginationItem-root": { color: "#3c6904" },
            "& .Mui-selected": {
              backgroundColor: "#3c6904",
              color: "white",
            },
            "& .Mui-selected:hover": {
              backgroundColor: "#3c6904",
              color: "white",
            },
          }}
        />
      </Grid>
    </div>
  );
}
