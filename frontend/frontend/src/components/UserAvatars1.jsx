import PropTypes from "prop-types";

const UserAvatars1 = ({ className = "", image4, ellipse3 }) => {
  return (
    <div
      className={`h-[27.75rem] w-[12.5rem] flex flex-col items-start justify-start text-left text-[1.125rem] text-black font-assistant ${className}`}
    >
      <div className="self-stretch h-[24.35rem] flex flex-col items-start justify-start gap-[1.143rem]">
        <img
          className="self-stretch flex-1 relative rounded-21xl max-w-full overflow-hidden max-h-full object-cover shrink-0"
          loading="lazy"
          alt=""
          src={image4}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.812rem]">
          <div className="h-[6.563rem] flex-1 relative shrink-0">
            <img
              className="absolute w-[calc(100%_-_28px)] top-[0rem] right-[0.875rem] left-[0.875rem] rounded-[50%] max-w-full overflow-hidden h-[3.125rem] object-contain"
              alt=""
              src={ellipse3}
            />
            <a className="[text-decoration:none] absolute top-[1.563rem] left-[0rem] leading-[5rem] text-[inherit] inline-block min-w-[4.875rem] z-[1]">{`DEV & DEV`}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

UserAvatars1.propTypes = {
  className: PropTypes.string,
  image4: PropTypes.string,
  ellipse3: PropTypes.string,
};

export default UserAvatars1;

