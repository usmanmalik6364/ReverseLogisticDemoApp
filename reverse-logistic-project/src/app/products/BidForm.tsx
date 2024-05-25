import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import SnackBarMessage from "../../layout/SnackBarMessage";

interface BidFormProps {
  productId: string;
}

const BidForm: React.FC<BidFormProps> = ({ productId }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const store = useStore();
  const bidMutation = useMutation((newBid: { amount: number }) =>
    // Simulating an API call to submit the bid
    new Promise((resolve) => {
      setTimeout(() => {
        //getting a warning here because we are not returning anything and just simulating api call
        resolve();
      }, 1000);
    })
  );
  console.log(store.productStore.successfullyAddedToCart)
  const onSubmitForm = async (data: { amount: number }) => {
    setIsLoading(true);
    try {
      const response = await bidMutation.mutateAsync(data);
      if (response || 1===1) {
        const product = store.productStore.getProductById(productId);
        if (product) {
          store.productStore.addToCart(product);
          reset();
        }
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const hideSnackBar =() =>{
    store.productStore.resetSuccessfullyAddedToCart()
  }
  return (

    <Box>
      <Typography variant="h6" gutterBottom>
        Place a Bid
      </Typography>
      <form onSubmit={(handleSubmit(onSubmitForm))}>
        <TextField
          {...register("amount", { required: true, min: 0 })}
          label="Bid Amount"
          type="number"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading || bidMutation.isLoading}
        >
          {isLoading || bidMutation.isLoading ? <CircularProgress size={24} /> : "Place Bid"}
        </Button>
      </form>
      
      {store.productStore.successfullyAddedToCart!==undefined  &&  <SnackBarMessage 
      open={store.productStore.successfullyAddedToCart!==undefined}
      severity={store.productStore.successfullyAddedToCart===true?"success":"error"}
      message={store.productStore.successfullyAddedToCart ? "Success!" : "Product already exists in the cart" }
      onClose= {hideSnackBar}
      />}
    </Box>
  );
};

export default observer(BidForm);
