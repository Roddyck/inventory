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
} from "@mui/material";

const ListItems = () => {
  let [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  let getItems = async () => {
    let response = await fetch("/api/items");
    let data = await response.json();
    setItems(data);
    console.log(data);
    console.log(items);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Brand</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.type}</TableCell>
              <TableCell align="right">{item.brand}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListItems;
