import React from "react";
import notFoundImg from "../../assets/not-found.png";
import { Box, Stack } from "@mui/material";

export default function NotFound() {
  return (
    <Stack sx={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box>
        <img src={notFoundImg} />
      </Box>
    </Stack>
  );
}
