import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

console.log(categories);
const SideBar = () => {
  const [category, useCategory] = useState();
  useEffect(() => {
    useCategory(categories);
  }, [category]);
  return (
    <Stack
      direction="row"
      sx={{
        owerflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}>
      {
        category.map((category) => {
          <h1>{category.name}</h1>
        })
        
      }
    </Stack>
  );
};

export default SideBar;
