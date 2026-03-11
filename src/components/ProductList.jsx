import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductDetails = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch product details");
      }
      const data = await res.json();
      setProductDetails(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!selectedProductId) return;
    fetchProductDetails(selectedProductId);
  }, [selectedProductId]);


  const filteredProducts = products.filter((e) =>{
    return e.title.toLowerCase().includes(input.toLowerCase())  
  });

  return (
    <div>
      <h1>Product List</h1>

      <input type="text" placeholder="Search Product" value={input} onChange={(e) => setInput(e.target.value)} />


      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {filteredProducts.map((e) => (
          <li
            key={e.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4"
          >
            <img
              className="h-32 w-auto object-contain"
              src={e.image}
              alt={e.title}
              onClick={() => setSelectedProductId(e.id)}
            />
            <div className="flex-1 md:ml-6 text-center md:text-left">
              <h3 className="text-lg font-semibold text-slate-900">
                Title: {e.title}
              </h3>
              <p className="text-sm text-slate-600">Price: ${e.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
