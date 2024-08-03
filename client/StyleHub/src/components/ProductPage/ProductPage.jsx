import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data = {
  Images: [
    "https://5.imimg.com/data5/FT/AQ/OR/ANDROID-58564062/product-jpeg-500x500.jpg",
    "https://m.media-amazon.com/images/I/51skIa7IfrL._SY679_.jpg",
    "https://images-static.nykaa.com/media/catalog/product/e/a/eab3cd1TP012761_1.jpg?tr=w-500",
  ],
  Name: "Louis Vuitton T-shirts for Women",
  Sale: "23%",
  Sizes: ["S", "M", "L", "XL"],
  Price: "2000",
};

const fetchProducts = async () => {
  const res = await axios.get('http://localhost:4000/api/v1/product/products', { withCredentials: true });
  console.log(res.data.products);
}

const ProductPage = () => {
  const [size, setSize] = useState("S");

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row align-center items-center justify-center">
      <div className="h-125 w-125">
        <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          {data.Images.map((image, index) => (
            <div key={index} className="h-125 w-125 border-2 border-black z-50">
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="border-2 border-black z-50"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="h-125 p-2 m-5 flex flex-col">
        <div className="bg-indigo-400 text-white font-sans w-fit p-1 font-bold text-xs rounded-md">
          SALE: {data.Sale}
        </div>
        <div className="mt-3 font-mono font-black text-xl">{data.Name}</div>
        <div className="mt-1 font-mono font-black text-xl">${data.Price}</div>
        <div className="flex flex-row mt-5">
          {data.Sizes.map((sizeItem, index) => (
            <div
              className={`border-2 border-slate-100 cursor-pointer ${
                sizeItem == size ? " border-black" : " border-slate-100"
              } w-8 h-8 text-center mx-1 my-2 font-bold`}
              onClick={() => setSize(sizeItem)}
            >
              {sizeItem}
            </div>
          ))}
        </div>
        <div>
          <button className="w-full bg-black text-white p-2 md:mt-5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
