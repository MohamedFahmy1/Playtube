"use client";
import { Paper, IconButton } from "@mui/material";
import React from "react";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  return (
    <Paper
      component={"form"}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={""}
        onChange={() => {}}
      />
      <IconButton
        aria-label="submit search"
        type="submit"
        sx={{ p: "10px", color: "red" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;