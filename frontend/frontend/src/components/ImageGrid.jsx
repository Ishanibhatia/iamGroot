import { useMemo } from "react";
import PropTypes from "prop-types";

const ImageGrid = ({
  className = "",
  shoppingBagFull,
  sunGlasses,
  shirt,
  tShirt,
  pairOfSneakers,
  sneakers,
  propAlignSelf,
  propWidth,
}) => {
  const imageGridStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start relative gap-[10.825rem] text-left text-[1.25rem] text-white font-assistant ${className}`}
      style={imageGridStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.937rem] pl-[0rem]">
        <div className="flex-1 flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.062rem] gap-[0.35rem]">
          <div className="w-[6.25rem] h-[6.25rem] relative">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] [background:linear-gradient(180deg,_#ff3f6c,_#f26a10)] w-full h-full" />
            <div className="absolute top-[2.656rem] left-[0.313rem] leading-[1.188rem] font-extrabold inline-block min-w-[5.688rem] z-[1]">
              <span>MYNTR</span>
              <span className="text-[0.938rem]">{` `}</span>
              <span className="text-[1.563rem]">AI</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.125rem] pl-[0rem]">
            <div className="h-[6.725rem] flex-1 relative">
              <img
                className="absolute top-[2.694rem] left-[0rem] w-[4.031rem] h-[4.031rem] object-contain"
                alt=""
                src={shoppingBagFull}
              />
              <img
                className="absolute top-[0rem] left-[2.925rem] w-[3.806rem] h-[3.806rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src={sunGlasses}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[7.063rem] h-[8.675rem] relative">
        <img
          className="absolute top-[0rem] left-[2.8rem] w-[4.263rem] h-[4.263rem] object-contain"
          loading="lazy"
          alt=""
          src={shirt}
        />
        <img
          className="absolute top-[4.263rem] left-[1.25rem] w-[4.413rem] h-[4.413rem] object-contain z-[1]"
          alt=""
          src={tShirt}
        />
      </div>
      <img
        className="w-[3.838rem] h-[3.838rem] absolute !m-[0] right-[-0.362rem] bottom-[11.413rem] object-contain"
        loading="lazy"
        alt=""
        src={pairOfSneakers}
      />
      <img
        className="w-[3.85rem] h-[3.85rem] absolute !m-[0] top-[14.081rem] left-[2.106rem] object-contain"
        loading="lazy"
        alt=""
        src={sneakers}
      />
    </div>
  );
};

ImageGrid.propTypes = {
  className: PropTypes.string,
  shoppingBagFull: PropTypes.string,
  sunGlasses: PropTypes.string,
  shirt: PropTypes.string,
  tShirt: PropTypes.string,
  pairOfSneakers: PropTypes.string,
  sneakers: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default ImageGrid;

