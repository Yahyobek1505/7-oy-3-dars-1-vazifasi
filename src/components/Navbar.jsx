import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { logo } from "../utils/constants";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}>
        <NavLink to="/" style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" className="h-14" />
        </NavLink>
      </Stack>
  );
};

export default Navbar;
