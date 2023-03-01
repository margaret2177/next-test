import React from "react";
import Card from "./Card";

const GridContainer = ({ products }) => {
  console.log("product in gcontainer", products);
  return (
    <div className="grid  grid-cols-1 sx:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products?.map((p, i) => (
        <Card key={i} product={p} />
      ))}
    </div>
  );
};

export default GridContainer;
