import { Box } from "@mui/material";
import React from "react";

type Props = {};

const Rightbar = (props: Props) => {
  return (
    <Box
      flex={2}
      p={2}
      bgcolor={"lightcoral"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
