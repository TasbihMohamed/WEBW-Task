import * as React from "react";

import {
  Stack,
  Typography,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import CustomButton from '../Common/CustomButton/CustomButton'
import logo from '../../assets/logo.png'

const pages = ["BROWSER", "BOOTCAMPS", "HOW It wORKS ", "TESTEMONIAL"];
function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsNavOpen(true);
  };

  const handleCloseNavMenu = (index) => {
    setAnchorElNav(null);
    setIsNavOpen(false);
  };



  return (
    <AppBar position="relative"
      sx={{
        pt: 2,
        backgroundColor: isNavOpen ? "#FF6057" : 'transparent',
        boxShadow: "none",
         ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
          top: '90px !important'
        }
      }}>
      <Container maxWidth="md">
        <Toolbar
          disableGutters
          sx={{
            ".MuiBox-root.css-1t6c9ts": {
              justifyContent: "flex-end"
            },
            ".MuiBox-root.css-1f546a7": {
              justifyContent: "space-around",
            },

          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
            }}
          >
            <Link
              to={"#"}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >

              <Box>
                <img src={logo} alt="logo" style={{ width: "74%" }} />
              </Box>
            </Link>
          </Typography>
          {/* ============= mobile========================================== */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ mx: 2 }}
            >
              <MenuIcon
                style={{
                  color: 'white', border: '1px solid white',
                  padding: "6px 12px",
                  fontSize: "38px"
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },

                ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                {
                  width: "100%",
                  m: 0,
                  left: "0px !important",
                  backgroundColor: "#FF6057",
                  boxShadow: "0px 0px 0px !important",
                  maxWidth: "100%",
                },
              }}
            >
              {/* small screen */}

              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(index)}
                  sx={{
                    display: "block",
                  }}
                >
                  <NavLink
                    to={"#"}
                    // to={ page.replace(/ /g, "-")}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        padding: 10,
                        backgroundColor: "transparent",
                        color: "white", fontSize: '16px',
                        fontWeight: 600
                      };
                    }}
                  >
                    {page}
                  </NavLink>
                </Button>
              ))}
              <Stack sx={{ alignItems: 'center', justifyContent: 'center', }}>
                <CustomButton
                  title={'About us'} />
              </Stack>
            </Menu>

          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              order: 1,
            }}
          >
            <Link
              to={"#"}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <Box>
                <img src={logo} alt="logo" style={{ width: "74%" }} />
              </Box>
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: 'center',
              // border: 1
            }}
          >
            <Stack direction="row">
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(index)}
                  sx={{
                    display: "block",
                  }}
                >
                  <NavLink
                    to={"#"} className={({ isActive }) => (isActive ? "active" : "")}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        padding: 8,
                        backgroundColor: "transparent",
                        color: "white",
                        borderRadius: 5,
                        fontSize: '11px'
                      };
                    }}
                  >
                    {page}
                  </NavLink>
                </Button>
              ))}
            </Stack>
            <Stack >
              <CustomButton purple={true} title={'About us'} />

            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
