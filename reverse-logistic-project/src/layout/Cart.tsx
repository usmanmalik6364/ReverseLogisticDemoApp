import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../app/stores/store';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { productStore } = useStore();

  const handleDelete = (productId: string) => {
    productStore.removeFromCart(productId);
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: 300, padding: 2 }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          Shopping Cart
        </Typography>
        <List>
          {productStore.cart.length === 0 ? (
            <Typography variant="body1" component="div" sx={{ padding: 2 }}>
              Your cart is empty
            </Typography>
          ) : (
            productStore.cart.map((product) => (
              <ListItem key={product.id} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.id)}>
                  <Delete />
                </IconButton>
              }>
                <ListItemText
                  primary={product.title}
                  secondary={`Bid Amount: $${product.currentBid?.toFixed(2)}`}
                />
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default observer(Cart);
