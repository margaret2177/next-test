import React from "react";

const index = ({ datas }) => {
  return <div>index{datas.name}</div>;
};

export default index;

export const getServerSideProps = async () => {
  const datas = await fetch("/api/hello").then((res) => res.json());
  return {
    props: {
      datas,
    },
  };
};
