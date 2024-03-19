import { Stack } from '@mui/material'
import React from 'react'

export default function CustomLine({ small, extraStyle }) {
  return (
    <Stack
      sx={{
        height: small ? '3px' : "5px",
        width: "57px",
        borderRadius: "10px",
        backgroundColor: "#FF6057",
        mb: 2, ...extraStyle
      }}
    ></Stack>
  )
}
