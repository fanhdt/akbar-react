import React from "react";

const Button = (props) => {
  const { classname = "bg-black", children = "..." } = props;
  return <button className={`${classname} font-Inter text-white font-normal text-lg  px-7 py-3 rounded-lg hover:bg-slate-600 transition-all ease-in-out duration-200`}>{children}</button>;
};

export default Button;
