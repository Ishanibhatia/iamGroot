import { useMemo } from "react";
import PropTypes from "prop-types";

const TypePrompt = ({ className = "", arrow, propWidth, propAlignSelf }) => {
  const typePromptStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[100%]  rounded-21xl bg-crimson flex flex-row items-start justify-start pt-[0.756rem] pb-[0.768rem] pr-[2rem] pl-[2.5rem] box-border  max-w-full text-justify text-[1.25rem] text-white font-assistant top-[80%]   ${className}`}
      style={typePromptStyle}
    >
      <div className="h-[1.813rem] w-[71.906rem] relative rounded-21xl bg-crimson hidden max-w-full" />
      <div className="flex-1 flex flex-row items-start justify-start py-[0.456rem] px-[1.562rem] box-border relative min-w-[12.938rem] max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-200 z-[1]" />
        <div className="relative tracking-[0.04em] leading-[1.375rem] font-semibold z-[2] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
          TYPE YOUR TEXT HERE
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.206rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[1.875rem] h-[1.875rem] relative object-cover z-[1]"
          alt=""
          src={arrow}
        />
      </div>
      
    </div>
  );
};

TypePrompt.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default TypePrompt;

