import Image from "next/image";
import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card p-2 text-red-500  bg-white rounded-md flex ] gap-2 flex-col">
      <div className="cardHeader truncate">
        <span>{product.name}</span>
      </div>
      <div className="cardBody relative w-[100%] h-[300px]">
        <Image src={`${product.image}`} alt="Product Image" layout="fill" />
      </div>
      <div className="cardFooter">footer here</div>
    </div>
  );
};

export default Card;
