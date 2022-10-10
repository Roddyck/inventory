import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchBar from "./SearchBar";

const ListItems = () => {
  let [items, setItems] = useState([]);
  let [filters, setFilters] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let response = await fetch("/api/items");
    let data = await response.json();
    setItems(data);
  };

  const deleteItem = async (item) => {
    let response = await fetch("/api/items" + "?id=" + item.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      let idx = items.indexOf(item);
      items.splice(idx, 1);
      setItems(items);
    }
    navigate("/");
  };

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const filterData = (data) => {
    let filteredData = [];

    if (!(filters.name || filters.price || filters.type || filters.brand)) {
      return data;
    }

    for (let item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price !== filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <Grid container spacing={3} align="center">
      <Grid item xs={12}>
        <Typography component="h4" variant="h4">
          List of Items
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Brand</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData(items).map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="center">{item.type}</TableCell>
                  <TableCell align="center">{item.brand}</TableCell>
                  <TableCell align="center" padding="checkbox">
                    <ClearIcon onClick={() => deleteItem(item)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create"
        >
          Add Item
        </Button>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Search for an Item
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBar
            updateSearchParams={updateFilters}
            clearFilters={getItems}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListItems;
