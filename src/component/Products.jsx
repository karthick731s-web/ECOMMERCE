// Product.jsx
import { useState, useEffect } from 'react';
import { ProductWithBrand } from './Productcard.jsx'; // <-- wrapped HOC

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("fetched products:", data.products);
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 
        grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((i) => (
          <ProductWithBrand
            key={i.id}
            id={i.id}
            pn={i.title}
            price={i.price}
            offer={i.discountPercentage}
            rate={i.rating}
            ratecount={i.stock}
            pi={i.thumbnail}
            brand={i.brand}  // <-- dynamically passed to HOC
          />
        ))}
      </div>
    </section>
  );
};
