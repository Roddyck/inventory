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

const ListItems = () => {
  let [items, setItems] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getItems();
  }, []);

  let getItems = async () => {
    let response = await fetch("/api/items");
    let data = await response.json();
    setItems(data);
  };

  let deleteItem = async (item) => {
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

  return (
    <Grid container spacing={1} align="center">
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
              {items.map((item) => (
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
      </Grid>
    </Grid>
  );
};

export default ListItems;
