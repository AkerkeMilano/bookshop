import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const AppToolbar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: "40px" }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <img src={logo} alt="logo" width={100} />
            </NavLink>
          </Typography>

          <Button component={NavLink} to="/" color="inherit">
            Books
          </Button>
          <Button component={NavLink} color="inherit" to="/chart">
            Chart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppToolbar;