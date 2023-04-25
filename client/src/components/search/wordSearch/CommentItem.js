import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// import Redux

// import apis


// import MUI components
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Stack,
  Badge,
} from "@mui/material";
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Report as ReportIcon,
} from "@mui/icons-material";
import axios from "axios";

const CommentItem = ({ comment }) => {
  

  return (
    <List
      sx={{
        width: "98.5%",
        maxHeight: "215px",
        overflow: "auto",
        paddingTop: "0",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      {comment.length !== 0
        ? comment.map((item, index) => (
            <ListItem sx={{ p: "0px 10px 0px 10px" }} key={index} divider>
              <Stack direction="column" width="100%">
                <ListItemText
                  primary={<Typography variant="body2">{item.text}</Typography>}
                />
                <Stack direction="row" justifyContent="space-between">
                  <Box>
                    <IconButton>
                      <Badge badgeContent={item.like.length}>
                        <ThumbUpIcon sx={{ fontSize: 15 }} />
                      </Badge>
                    </IconButton>
                    <IconButton>
                      <Badge badgeContent={item.dislike.length}>
                        <ThumbDownIcon sx={{ fontSize: 15 }} />
                      </Badge>
                    </IconButton>
                    <IconButton>
                      <Badge badgeContent={item.report.length}>
                        <ReportIcon sx={{ fontSize: 15 }} />
                      </Badge>
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ fontStyle: "italic", fontWeight: "lighter" }}
                    >
                      {item.username}｜{item.createAt}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </ListItem>
          ))
        : null}
    </List>
  );
};

export default CommentItem;
