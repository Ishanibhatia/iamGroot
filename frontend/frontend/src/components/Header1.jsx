import PropTypes from "prop-types";

const Header1 = ({ className = "", link, image, image1, image2, image3 }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_4px_12px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row items-end justify-start py-[0rem] pr-[3.687rem] pl-[4.75rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[0.75rem] text-black font-assistant mq825:pl-[2.375rem] mq825:pr-[1.813rem] mq825:box-border ${className}`}
    >
      <div className="w-[8.575rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.312rem] box-border">
        <img
          className="w-[3.313rem] h-[2.25rem] relative object-cover"
          loading="lazy"
          alt=""
          src={link}
        />
      </div>
      <div className="w-[29.894rem] flex flex-row items-start justify-between py-[0rem] pr-[0.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full text-center text-[0.875rem] text-darkslategray">
        <a className="[text-decoration:none] relative tracking-[0.3px] leading-[5rem] uppercase font-bold text-[inherit] inline-block min-w-[1.813rem] shrink-0">
          Men
        </a>
        <a className="[text-decoration:none] w-[3.138rem] relative tracking-[0.3px] leading-[5rem] uppercase font-bold text-[inherit] flex items-center justify-center shrink-0 min-w-[3.138rem]">
          Women
        </a>
        <a className="[text-decoration:none] relative tracking-[0.3px] leading-[5rem] uppercase font-bold text-[inherit] inline-block min-w-[1.938rem] shrink-0">
          Kids
        </a>
        <a className="[text-decoration:none] relative tracking-[0.3px] leading-[5rem] uppercase font-bold text-[inherit] inline-block min-w-[6.125rem] whitespace-nowrap shrink-0">{`Home & Living`}</a>
        <a className="[text-decoration:none] relative tracking-[0.3px] leading-[5rem] uppercase font-bold text-[inherit] inline-block min-w-[3.125rem] shrink-0">
          Beauty
        </a>
        <a className="[text-decoration:none] w-[3.069rem] relative tracking-[0.3px] leading-[5rem] uppercase font-bold text-[inherit] flex items-center justify-center shrink-0 min-w-[3.069rem]">
          Studio
        </a>
      </div>
      <div className="h-[5rem] w-[19.894rem] flex flex-col items-start justify-end pt-[0rem] pb-[0.306rem] pr-[1.25rem] pl-[0rem] box-border text-[0.625rem] text-crimson">
        <a className="[text-decoration:none] relative leading-[5rem] uppercase font-semibold text-[inherit] inline-block min-w-[1.281rem]">
          new
        </a>
      </div>
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.25rem]">
        <div className="w-[2.563rem] h-[2.5rem] relative rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-whitesmoke box-border z-[1] border-t-[1px] border-solid border-whitesmoke border-b-[1px] border-l-[1px]">
          <img
            className="absolute top-[0.756rem] left-[calc(50%_-_6.9px)] w-[0.919rem] h-[0.919rem] object-cover"
            loading="lazy"
            alt=""
            src={image}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.25rem] box-border max-w-full text-[0.875rem] text-gray-100">
        <div className="w-[37.794rem] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-whitesmoke box-border flex flex-row items-start justify-start pt-[0.5rem] px-[0.625rem] pb-[0.625rem] max-w-full border-t-[1px] border-solid border-whitesmoke border-r-[1px] border-b-[1px] mq450:w-[24.063rem] mq825:hidden">
          <div className="relative whitespace-nowrap mq450:hidden">
            Search for products, brands and more
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-[0rem] pb-[1.531rem] pr-[1.437rem] pl-[0rem]">
        <div className="flex flex-col items-start justify-start gap-[0.156rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.25rem]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative object-cover"
              alt=""
              src={image1}
            />
          </div>
          <a className="[text-decoration:none] relative leading-[0.375rem] font-bold text-[inherit] inline-block min-w-[2.25rem]">
            Profile
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-[0rem] pb-[1.812rem] pr-[1.625rem] pl-[0rem]">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="h-[1.375rem] w-[1.063rem] absolute !m-[0] top-[-1.312rem] left-[0.75rem] object-cover"
            alt=""
            src={image2}
          />
          <a className="[text-decoration:none] relative leading-[0.375rem] font-bold text-[inherit] inline-block min-w-[2.625rem] z-[1]">
            Wishlist
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.812rem]">
        <div className="flex flex-col items-start justify-start">
          <img
            className="w-[1.375rem] h-[1.375rem] relative object-cover"
            alt=""
            src={image3}
          />
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem] mt-[-0.063rem]">
            <b className="relative leading-[0.375rem] inline-block min-w-[1.25rem] z-[1]">
              Bag
            </b>
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
};

export default Header1;

