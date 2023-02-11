import React from "react";

interface TextPI {
  children: React.ReactNode;
}

const TextP = ({ children }: TextPI) => {
  return <p className="mb-[1em]">{children}</p>;
};

export default TextP;
