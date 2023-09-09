import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./FifthSection.scss";

const FifthSection = () => {
  return (
    <div className="FIfthSection flex flex flex-col justify-center items-center bg-[var(--primaryColor)] p-[5%] gap-8">
      <h1 className="title text-[var(--light)] font-semibold text-[42px]">
        仮想通貨ウォレットのご利用方法
      </h1>
      <NavLink
        className="Aboutcrypto flex flex-row items-center gap-2 justify-center OutlineBtn text-[var(--light)] border-[var(--light)] hover:bg-[var(--light)] hover:text-[var(--primaryColor)]"
        to="/aboutcrypto"
      >
        仮想通貨ウォレットについて
        <span className="icon">
          <AiOutlineArrowRight />
        </span>
      </NavLink>
    </div>
  );
};

export default FifthSection;
