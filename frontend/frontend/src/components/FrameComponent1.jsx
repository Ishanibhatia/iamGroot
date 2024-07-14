import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", gretaBought, arrow }) => {
  return (
    <div
      className={`h-[80%] w-[40%] flex flex-row items-start justify-between gap-[1.25rem]  text-left text-[1.25rem] text-gray-100 font-assistant mq450:flex-wrap ${className}`}
    >
      <div className="relative leading-[5rem] inline-block z-[3] mq450:text-[1rem] mq450:leading-[4rem]">
        {gretaBought}
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.562rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[1.875rem] h-[1.875rem] relative object-cover z-[3]"
          alt=""
          src={arrow}
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  gretaBought: PropTypes.string,
  arrow: PropTypes.string,
};

export default FrameComponent1;

