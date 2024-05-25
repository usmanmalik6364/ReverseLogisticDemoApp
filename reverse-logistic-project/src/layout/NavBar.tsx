import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { observer } from "mobx-react-lite";
import { useStore } from "../app/stores/store";
import Cart from "./Cart";  // Import the new Cart component
import ThemeToggle from "./ThemeToggle";  // Import the ThemeToggle component

const NavBar: React.FC = () => {
  const { productStore } = useStore(); // Assuming useStore() gives access to your ProductStore
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Store
          </Typography>
          <ThemeToggle /> {/* Add ThemeToggle button */}
          <IconButton color="inherit" onClick={handleCartClick}>
            <Badge badgeContent={productStore.cart.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
    </>
  );
};

export default observer(NavBar);
