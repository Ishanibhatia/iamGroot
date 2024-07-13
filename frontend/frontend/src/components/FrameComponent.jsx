import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", image32, propPadding, propGap }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`h-[10.763rem] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white box-border flex flex-col items-end justify-start pt-[0.718rem] pb-[0.975rem] pr-[1.687rem] pl-[0.437rem] gap-[0.531rem] z-[3] text-center text-[0.875rem] text-gray-100 font-assistant border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px] ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[7.563rem] h-[10.763rem] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white box-border hidden border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]" />
      <img
        className="w-[5rem] flex-1 relative max-h-full object-cover z-[4]"
        alt=""
        src={image32}
      />
      <div className="w-[5.313rem] relative leading-[0.938rem] flex items-center justify-center z-[4]">
        Plain chiffon Maxi dress
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  image32: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
};

export default FrameComponent;

