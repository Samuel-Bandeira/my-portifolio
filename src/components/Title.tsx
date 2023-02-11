import React from "react";

interface TitleI {
  number: number;
  text: string;
}

const Title = ({ number, text }: TitleI) => {
  return (
    <p className="text-[1.5rem] text-[#5ae7c8]">
      {`0${number}`}.
      <span className="text-[2rem] font-bold ml-2 text-[#ccd6f6]">{text}</span>
    </p>
  );
};

export default Title;
