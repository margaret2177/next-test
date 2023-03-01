import React from "react";
import GridContainer from "./GridContainer";

const Main = ({ products }) => {
  return (
    <div className="bg-blue-500 px-[5%] pt-4">
      <GridContainer products={products} />
    </div>
  );
};

export default Main;
