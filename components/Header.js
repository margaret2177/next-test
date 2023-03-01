import React from "react";

const Header = () => {
  return (
    <div
      className="h-[60px] bg-orange-700 text-white flex px-[20px] py-2
    "
    >
      <div className="left ">logo</div>
      <div className="mid flex-1 bg-slate-300">search</div>
      <div className="right">icons</div>
    </div>
  );
};

export default Header;
