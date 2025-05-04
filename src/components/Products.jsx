import React from "react";
import ProductSlider from "./ProductSlider";
import MobProductSlider from "./MobProductSlider";


    const sampleProducts = [
        {
          id: 1,
          title: "Chicken-normal cut",
          image: "/chicknormal.jpg",
          price: 240,
        },
        {
          id: 2,
          title: "Chicken-small cut",
          image: "/chicksmallcut.jpg",
          price: 250,
        },
        {
          id: 3,
          title: "Chicken-biryani cut",
          image: "/chickbirya.jpg",
          price: 260,
        },
        {
          id: 4,
          title: "Chicken Leg piece",
          image: "/chickleg.jpg",
          price: 280,
        },
        {
          id: 5,
          title: "Boneless Chicken",
          image: "/chcikboneless.jpg",
          price: 400,
        },
        
      ];
      


const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <ProductSlider products={sampleProducts} />
      <MobProductSlider products={sampleProducts}/>
    </div>
  );
};

export default Products;
