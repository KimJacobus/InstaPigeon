import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavbarHeadersPhone() {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: "poppins",
              fontWeight: 400,
              fontSize: 28,
            }}
          >
            InstaPigeon
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
