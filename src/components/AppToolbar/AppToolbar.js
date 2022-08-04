import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const AppToolbar = () => {
  const { totalBooks } = useSelector((state) => state.cart);
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
          <Button component={NavLink} color="inherit" to="/cart">
            <ShoppingCartTwoToneIcon sx={{ fontSize: 40 }} color={totalBooks > 0 ? "success" : "primary"}></ShoppingCartTwoToneIcon>
            {totalBooks ? totalBooks : ""}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppToolbar;
