

import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import ProductFilter from '../products/ProductFilter';


const ProductDashboard: React.FC = observer(() => {
  const { productStore } = useStore();

  useEffect(() => {
    productStore.fetchProducts();
  }, [productStore]);

  return (
    <div style={{marginLeft:'100px',marginRight:'100px'}}>
      <h1>Product Dashboard</h1>
      <ProductFilter />
    </div>
  );
});

export default ProductDashboard;