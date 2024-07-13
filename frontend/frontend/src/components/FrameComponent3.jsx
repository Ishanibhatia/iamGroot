import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "", iHaveFFE0CCSkinF5D19CHair }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.187rem] pl-[0rem] box-border max-w-full text-justify text-[1.25rem] text-gray-100 font-assistant ${className}`}
    >
      <div className="flex-1 rounded-xl bg-white box-border flex flex-row items-start justify-start pt-[0.75rem] pb-[0.937rem] pr-[1.437rem] pl-[1.5rem] max-w-full border-[1px] border-solid border-deeppink">
        <div className="h-[4.619rem] w-[71.906rem] relative rounded-xl bg-white box-border hidden max-w-full border-[1px] border-solid border-deeppink" />
        <h3 className="m-0 flex-1 relative text-inherit tracking-[0.04em] leading-[1.375rem] font-semibold font-inherit inline-block max-w-full z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
          {iHaveFFE0CCSkinF5D19CHair}
        </h3>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  iHaveFFE0CCSkinF5D19CHair: PropTypes.string,
};

export default FrameComponent3;

