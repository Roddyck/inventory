import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";

const SearchBar = (props) => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState(0);
  let [type, setType] = useState("");
  let [brand, setBrand] = useState("");

  const searchButton = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  const clearButtonPressed = () => {
    props.clearFilters();
    window.location.href = "/";
  };

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12}>
        <TextField
          size="small"
          placeholder="Name"
          helperText="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size="small"
          type="number"
          placeholder="Price"
          helperText="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size="small"
          placeholder="Type"
          helperText="Type"
          onChange={(e) => setType(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size="small"
          placeholder="Brand"
          helperText="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={searchButton}>
          Search
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="success"
          onClick={clearButtonPressed}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
