import React, { useEffect, useState } from 'react';
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <div className="products">
        {products.map(product => (
          <div className="product-card" key={product.product_id}>
            <h2>{product.product_name}</h2>
            <p>${product.product_price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;