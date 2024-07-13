import PropTypes from "prop-types";

const AdditionalStories = ({
  className = "",
  image6,
  storyAddButton,
  image7,
  addButtonIcon,
  plus,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.375rem] box-border min-w-[20.125rem] min-h-[27.75rem] max-w-full text-left text-[1.125rem] text-black font-assistant ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.75rem] mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.143rem] min-w-[8.125rem]">
          <img
            className="self-stretch h-[16.644rem] relative rounded-21xl max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={image6}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.687rem]">
            <div className="h-[6.563rem] flex-1 relative shrink-0">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[3.125rem] h-[3.125rem] object-cover"
                alt=""
                src={storyAddButton}
              />
              <div className="absolute top-[1.563rem] left-[0.625rem] leading-[5rem] inline-block min-w-[1.875rem] z-[1]">
                JOE
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.143rem] min-w-[8.125rem]">
          <img
            className="self-stretch h-[16.644rem] relative rounded-21xl max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={image7}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.625rem]">
            <div className="flex-1 flex flex-col items-start justify-start shrink-0">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                <img
                  className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover"
                  alt=""
                  src={addButtonIcon}
                />
              </div>
              <div className="relative leading-[5rem] inline-block min-w-[3.25rem] z-[1] mt-[-1.563rem]">
                ISHANI
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[7.075rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[2.5rem] h-[2.5rem] relative object-cover"
            alt=""
            src={plus}
          />
        </div>
      </div>
    </div>
  );
};

AdditionalStories.propTypes = {
  className: PropTypes.string,
  image6: PropTypes.string,
  storyAddButton: PropTypes.string,
  image7: PropTypes.string,
  addButtonIcon: PropTypes.string,
  plus: PropTypes.string,
};

export default AdditionalStories;

