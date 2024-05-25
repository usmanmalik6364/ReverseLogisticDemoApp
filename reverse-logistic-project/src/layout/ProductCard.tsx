import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import { observer } from "mobx-react-lite";
import BidForm from "../app/products/BidForm";
import { Product } from "../models/Product"; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showBidForm, setShowBidForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

 // Function to calculate time left to bid
  const calculateTimeLeft = (): string => {
    const currentTime = new Date().getTime();
    const endTime = new Date(product.auctionEndTime).getTime();
    const timeDiff = endTime - currentTime;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };


  // Update time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Empty dependency array to run effect only once

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={product.images[0]} alt={product.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Current Bid: ${product.currentBid?.toFixed(2)}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Time Left to Bid: {timeLeft}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Condition: {product.condition}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setShowBidForm(true)}>
          Bid Now
        </Button>
      </CardActions>
      {showBidForm && <BidForm  productId={product.id} />}
    </Card>
  );
};

export default observer(ProductCard);
