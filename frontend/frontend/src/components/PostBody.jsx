import PropTypes from "prop-types";

const PostBody = ({ className = "", image38, image39, image40 }) => {
  return (
    <div
      className={`h-[40.181rem] w-[15.956rem] flex flex-col items-start justify-start max-w-full text-left text-[1.25rem] text-gray-100 font-assistant  ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[6.112rem]">
          
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.687rem]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.562rem] pl-[0.375rem]">
            <img
              className="h-[18.125rem] flex-1 relative max-w-full overflow-hidden object-cover top-[75rem] left-[0.75rem]"
              // top-[35rem] left-[0.5rem]
              loading="lazy"
              alt=""
              src={image38}
            />
          </div>
          <img
            className="self-stretch h-[2.788rem] relative max-w-full overflow-hidden shrink-0 object-cover top-[75rem] left-[0.75rem]"
            // top-[35rem] left-[0.5rem]
            loading="lazy"
            alt=""
            src={image39}
          />
          <img
            className="self-stretch h-[2.788rem] relative max-w-full overflow-hidden shrink-0 object-cover top-[75rem] left-[0.75rem]"
            // top-[35rem] left-[0.5rem]
            loading="lazy"
            alt=""
            src={image40}
          />
        </div>
      </div>
    </div>
  );
};

PostBody.propTypes = {
  className: PropTypes.string,
  image38: PropTypes.string,
  image39: PropTypes.string,
  image40: PropTypes.string,
};

export default PostBody;

