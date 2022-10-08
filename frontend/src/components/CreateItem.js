import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid, Button, Typography, TextField } from "@mui/material";

const CreateItem = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState(0);
  let [type, setType] = useState("");
  let [brand, setBrand] = useState("");

  let navigate = useNavigate();

  let CreateItemButton = async () => {
    let response = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        price: price,
        type: type,
        brand: brand,
      }),
    });
    let data = await response.json();
    navigate("/");
  };

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12}>
        <TextField
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder="Type"
          onChange={(e) => setType(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" variant="contained" onClick={CreateItemButton}>
          Create Item
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="contained" component={Link} to="/">
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateItem;
