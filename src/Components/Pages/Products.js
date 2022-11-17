import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "./Shared/Loader";

const Products = () => {
  // const [products, setProducts] = useState();

  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery("orders", () =>
    fetch(` https://idol-ace-server-production.up.railway.app/products`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );

  // useEffect(() => {
  //   fetch("https://idol-ace-server-production.up.railway.app/products")
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json));
  // }, []);

  return (
    <div>
      <section className="">
        <div class="mx-auto max-w-screen-xl px-4 py-8 my-28">
          <div>
            <span class="inline-block h-1 w-12 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
              Products
            </h2>
          </div>

          {isLoading && (
            <>
              <Loader className="m-auto"></Loader>;
            </>
          )}
          <div class="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4 ">
            {products?.map((product) => (
              <div href="#" class="block ">
                <div class="flex justify-center ">
                  <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                    New
                  </strong>
                </div>

                <img
                  alt="Trainer"
                  src={product?.image}
                  class="-mt-3 h-52 mx-auto"
                />

                <h3 class="mt-4  text-lg text-black/90 w-full">
                  {product?.name.slice(0, 30)}
                  {product?.name.length > 34 && "..."}
                </h3>

                <div class="mt-4 flex items-center justify-between font-bold">
                  <p class="text-sm">Model: {product?.model} </p>
                </div>
                <button
                  onClick={() => navigate(`/productDetails/${product?._id}`)}
                  className="btn btn-outline hover:bg-neutral bg-accent text-white border-0 lg:w-64 w-full  my-8 lg:ml-2"
                >
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
