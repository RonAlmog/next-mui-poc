import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">Navbar</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
