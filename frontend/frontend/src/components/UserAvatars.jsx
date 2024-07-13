import PropTypes from "prop-types";

const UserAvatars = ({ className = "", image3, ellipse4 }) => {
  return (
    <div
      className={`h-[27.75rem] w-[12.5rem] flex flex-col items-start justify-start text-left text-[1.125rem] text-black font-assistant ${className}`}
    >
      <div className="self-stretch h-[24.35rem] flex flex-col items-start justify-start gap-[1.143rem]">
        <img
          className="self-stretch flex-1 relative rounded-21xl max-w-full overflow-hidden max-h-full object-cover shrink-0"
          loading="lazy"
          alt=""
          src={image3}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.375rem]">
          <div className="h-[6.563rem] flex-1 relative shrink-0">
            <img
              className="absolute w-[calc(100%_-_10px)] top-[0rem] right-[0.313rem] left-[0.313rem] rounded-[50%] max-w-full overflow-hidden h-[3.125rem] object-contain"
              alt=""
              src={ellipse4}
            />
            <div className="absolute top-[1.563rem] left-[0rem] leading-[5rem] inline-block min-w-[3.75rem] z-[1]">
              SRISHTI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserAvatars.propTypes = {
  className: PropTypes.string,
  image3: PropTypes.string,
  ellipse4: PropTypes.string,
};

export default UserAvatars;

