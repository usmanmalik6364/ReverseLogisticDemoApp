import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { TextField, MenuItem, Grid, Typography } from "@mui/material";
import { useStore } from "../../app/stores/store";
import ProductCard from "../../layout/ProductCard";
import { ProductCondition } from "../../models/Product";


const ProductFilter: React.FC = () => {
  const { productStore } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState<ProductCondition | "">("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleConditionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCondition(event.target.value as ProductCondition | "");
  };

  const filteredProducts = productStore.products.filter((product) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesCondition = selectedCondition !== "" ? product.condition === selectedCondition : true;
    return matchesSearchTerm && matchesCategory && matchesCondition;
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product Filter
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            label="Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            fullWidth
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Books">Books</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            label="Condition"
            value={selectedCondition}
            onChange={handleConditionChange}
            fullWidth
          >
            <MenuItem value="">All Conditions</MenuItem>
            <MenuItem value={ProductCondition.New}>New</MenuItem>
            <MenuItem value={ProductCondition.Used}>Used</MenuItem>
            <MenuItem value={ProductCondition.Refurbished}>Refurbished</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: 20 }}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default observer(ProductFilter);
