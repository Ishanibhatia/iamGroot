import PropTypes from "prop-types";

const UserComment = ({
  className = "",
  commenterImage,
  heart,
  speechBubble,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[1.087rem] max-w-full text-left text-[0.938rem] text-black font-assistant mq450:flex-wrap ${className}`}
    >
      <img
        className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover z-[3]"
        alt=""
        src={commenterImage}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.2rem] px-[0rem] pb-[0rem] box-border min-w-[16.5rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.587rem] max-w-full">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem]">
            <div className="flex flex-row items-end justify-start gap-[1.362rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.162rem]">
                <div className="relative leading-[0.938rem] z-[3]">
                  <span className="whitespace-pre-wrap">{`Panda  `}</span>
                  <span className="text-darkgray">@myntra_panda707</span>
                </div>
              </div>
              <div className="rounded-31xl bg-crimson flex flex-row items-start justify-start py-[0.375rem] px-[0.437rem] whitespace-nowrap z-[3] text-[0.625rem] text-white">
                <div className="h-[1.375rem] w-[3.2rem] relative rounded-31xl bg-crimson hidden" />
                <div className="relative leading-[0.625rem] whitespace-pre-wrap inline-block min-w-[2.313rem] z-[4]">
                  + Follow
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-between py-[0.5rem] pr-[1.875rem] pl-[1.125rem] max-w-full gap-[1.25rem] z-[3] text-[1.125rem] border-[1px] border-solid border-darkgray mq450:flex-wrap">
            <div className="h-[2.5rem] w-[25.406rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
            <div className="relative leading-[1.125rem] z-[4]">{`You look stunning! <3 <3 `}</div>
            <div className="h-[1.25rem] w-[3.075rem] relative">
              <img
                className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem] object-cover z-[4]"
                alt=""
                src={heart}
              />
              <img
                className="absolute top-[0rem] left-[1.825rem] w-[1.25rem] h-[1.25rem] object-cover z-[4]"
                alt=""
                src={speechBubble}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserComment.propTypes = {
  className: PropTypes.string,
  commenterImage: PropTypes.string,
  heart: PropTypes.string,
  speechBubble: PropTypes.string,
};

export default UserComment;

