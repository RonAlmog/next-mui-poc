import { Box } from "@mui/material";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <Box
      flex={1}
      p={2}
      bgcolor={"skyblue"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
