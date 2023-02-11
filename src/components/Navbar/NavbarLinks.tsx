import React from "react";
interface NavbarLinksI {
  index: number;
  title: string;
}

const NavbarLinks = ({ index, title }: NavbarLinksI) => {
  return (
    <div className="flex font-normal text-[0.85rem] ml-6">
      <p className="text-[#5ae7c8] mr-[0.5em]">0{index + 1}.</p>
      <p className="text-[#ccd6f6] tracking-widest">{title}</p>
    </div>
  );
};

export default NavbarLinks;
