import {
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomLine from "../../Common/CustomLine/CustomLine";

export default function TitleLine({ title, gradiantBtn }) {
  return (
    <Stack sx={{ alignItems: { xs: 'center', md: 'start' }, width: 'fit-content' }}>

      {!gradiantBtn && <CustomLine />}

      <Typography
        textAlign={{ md: 'start', xs: "center" }}
        variant="h4"
        sx={{
          width: { md: '70%', xs: '100%' },
          color: '#3B3A3A',
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>


    </Stack >
  );
}
