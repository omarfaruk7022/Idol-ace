import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <span class="inline-block h-1 w-12 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
              Products
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4">
            {products?.map((product) => (
              <div href="#" class="block">
                <div class="flex justify-center">
                  <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                    New
                  </strong>
                </div>

                <img
                  alt="Trainer"
                  src={product?.image}
                  class="-mt-3 h-52 object-cover"
                />

                <h3 class="mt-4 text-lg text-black/90">
                  {product?.name.slice(0, 34)}
                  {product?.name.length > 34 && "..."}
                </h3>

                <div class="mt-4 flex items-center justify-between font-bold">
                  <p class="text-sm">Model: {product?.model} </p>

                  <p class="text-xs uppercase tracking-wide mr-5">6 Colors</p>
                </div>
                <button onClick={() => navigate(`/productDetails/${product?._id}`)} className="btn btn-outline hover:bg-neutral bg-accent text-white border-0 w-64  my-8 ml-2">
                  {" "}
                  Details
                </button>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
