import { useMemo } from "react";

const FormCard = ({ optionText, propLeft, propLeft1, propWidth }) => {
  const frameStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[-30px] left-[0px] w-[257.38px] h-[66px] overflow-hidden text-center text-[13.19px] text-white font-ibm-plex-sans"
      style={frameStyle}
    >
      <div
        className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_128.69px)] rounded-8xs bg-mediumslateblue-200 shadow-[8px_7px_8px_rgba(0,_0,_0,_0.25)] flex flex-col py-2 px-[17px] items-center justify-start"
        style={frameDivStyle}
      >
        <div className="relative leading-[13.19px] inline-block w-[31.66px]">
          STEP
        </div>
        <div
          className="relative text-[35.18px] leading-[35.18px] text-gray-300"
          style={divStyle}
        >
          {optionText}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
