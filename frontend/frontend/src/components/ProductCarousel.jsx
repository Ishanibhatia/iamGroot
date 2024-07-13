import { useMemo } from "react";
import PropTypes from "prop-types";

const ProductCarousel = ({
  className = "",
  image28,
  image29,
  plus,
  originalPrice,
  discountedPrice,
  propPadding,
}) => {
  const productCarouselStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 rounded-xl bg-white box-border flex flex-col items-start justify-start pt-[0.625rem] px-[0.437rem] pb-[0.875rem] gap-[0.443rem] min-w-[8.5rem] z-[3] text-center text-[0.875rem] text-gray-100 font-assistant border-[1px] border-solid border-darkgray ${className}`}
      style={productCarouselStyle}
    >
      <div className="w-[13.15rem] h-[10.763rem] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-darkgray" />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[1.562rem] pl-[0rem] relative [row-gap:20px] mq450:flex-wrap">
          <img
            className="h-[6.663rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[3.25rem] min-h-[6.688rem] z-[4]"
            alt=""
            src={image28}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.087rem] px-[0rem] pb-[0rem] box-border min-w-[3.25rem]">
            <img
              className="self-stretch h-[6.663rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[5]"
              alt=""
              src={image29}
            />
          </div>
          <img
            className="h-[2.5rem] w-[1.25rem] absolute !m-[0] right-[0rem] bottom-[2.088rem] object-contain z-[4]"
            alt=""
            src={plus}
          />
        </div>
      </div>
      <div className="w-[11.231rem] flex flex-row items-start justify-start gap-[0.556rem]">
        <div className="flex-1 relative leading-[0.938rem] z-[4]">
          Plain chiffon Maxi dress
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] text-left text-[1rem]">
          <div className="flex flex-row items-start justify-start gap-[1.112rem]">
            <div className="relative [text-decoration:line-through] leading-[1.25rem] inline-block min-w-[1.938rem] z-[4]">
              {originalPrice}
            </div>
            <div className="relative text-[1.563rem] leading-[1.25rem] text-black inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[2.313rem] z-[4] mq450:text-[1.25rem] mq450:leading-[1rem]">
              {discountedPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCarousel.propTypes = {
  className: PropTypes.string,
  image28: PropTypes.string,
  image29: PropTypes.string,
  plus: PropTypes.string,
  originalPrice: PropTypes.string,
  discountedPrice: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default ProductCarousel;

