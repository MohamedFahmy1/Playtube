import { categories } from "@/utils/constants";
import { Stack } from "@mui/material";
import React from "react";

const Sidebar: React.FC<{
  selectedCategory: string;
  setSelectedCategory: (name: string) => void;
}> = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{ overflowY: "auto" }}
      height={{ sx: "auto", md: "95%" }}
      flexDirection={{ md: "column" }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            color: "white",
            background: category.name === selectedCategory ? "#fc1503" : "none",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
