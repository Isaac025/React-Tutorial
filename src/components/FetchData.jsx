import React from "react";
import { useEffect, useState } from "react";
// product --- > productapi
const url = "https://dummyjson.com/products";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1>List of Products</h1>
      <section className="flex items-center gap-2.5 flex-wrap">
        {products.map((product) => {
          const {
            id,
            title,
            price,
            images,
            stock,
            warrantyInformation,
            rating,
          } = product;
          return (
            <div key={id} className="w-full max-w-[320px] shadow-md h-[370px]">
              <img
                src={images[0]}
                alt={title}
                className="w-full object-cover h-[70%]"
              />
              <p className="text-xl font-semibold">{title}</p>
              <div className="flex items-center gap-3">
                <p className="text-2xl font-bold">${price}</p>
                <p className={stock >= 30 ? "text-green-400" : "text-red-400"}>
                  {stock} left in stock
                </p>
              </div>
              <p>{warrantyInformation}</p>
              <p className={rating >= 3.5 ? "text-green-400" : "text-red-400"}>
                 {rating}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchData;
