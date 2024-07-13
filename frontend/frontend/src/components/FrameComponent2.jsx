import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "", image2, previewAvatar }) => {
  return (
    <div
      className={`h-[25.731rem] w-[9.55rem] flex flex-col items-start justify-start text-left text-[1.125rem] text-darkslategray font-assistant ${className}`}
    >
      <div className="self-stretch h-[20.331rem] w-[8.55rem] flex flex-col items-start justify-start gap-[1.062rem]">
        {/* <a className="[text-decoration:none] relative leading-[5rem] font-bold text-[inherit] inline-block min-w-[4.313rem]">
          STORIES
        </a> */}
        <img
          className="self-stretch flex-1 relative rounded-[20px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={image2}
        />
        <div className="self-stretch flex flex-row items-center justify-center py-[0rem] pr-[4.75rem] pl-[4.562rem] text-black">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center py-[0rem] pr-[0rem] pl-[0rem]">
              <img
                className="h-[2rem] w-[2rem] relative rounded-[50%] object-cover"
                alt=""
                src={previewAvatar}
              />
            </div>
            <a className="[text-decoration:none] relative leading-[5rem] text-[inherit] inline-block min-w-[2rem] z-[1] mt-[-1.8rem] text-[0.55rem] justify-center">
              SAASHA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  image2: PropTypes.string,
  previewAvatar: PropTypes.string,
};

export default FrameComponent2;

