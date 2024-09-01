import React from "react";

const Wrapper = (props: any) => {
  return <div className="bg-red-600 w-full">{props.children}</div>;
};

export default Wrapper;
