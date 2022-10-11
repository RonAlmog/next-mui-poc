import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Post from "./Post";

type Props = {};

const Feed = (props: Props) => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
