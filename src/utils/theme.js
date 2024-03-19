import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.4rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:960px)": {
        fontSize: "4.8rem",
      },
    },
    h3: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.4rem",
      },
    },
    h4: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.6rem",
      },
    },
    h5: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.2rem",
      },
    },
    body1: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.1rem",
      },
    },
    body2: {
      fontSize: "0.7rem",
      "@media (min-width:600px)": {
        fontSize: ".9rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1rem",
      },
    },
    small: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: ".7rem", // ".8rem",
      },
      "@media (min-width:960px)": {
        fontSize: ".6rem", // ".9rem",
      },
    },
  },
});

export default theme;
