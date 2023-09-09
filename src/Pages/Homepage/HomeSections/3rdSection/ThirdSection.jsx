import React from "react";
import "./ThirdSection.scss";
import stepsData from "../../../../Constant/Json/steps.json";

const ThirdSection = () => {
  return (
    <div className="ThirdSection">
      <div className="ThirdSectionRow grid grid-cols-3 py-[5%] ">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="Col flex flex-col justify-center items-center"
          >
            <div className="Step flex flex-col justify-center items-center relative min-h-[400px] p-4 shadow-md max-w-[300px] rounded-lg">
              <span className="stepBadge text-[32px] bg-[var(--primaryColor)] text-[var(--light)] rounded-[100%] px-4 py-10 inline-block absolute top-[-60px] left-[-60px]">
                {step.Stepname}
              </span>
              <div className="Content">
                <h1 className="font-semibold text-[18px] text-center">
                  {step.Maintitle}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
