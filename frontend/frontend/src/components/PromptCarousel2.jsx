import { useCallback } from "react";
import PropTypes from "prop-types";

const PromptCarousel2 = ({ className = "" }) => {
  const onNewIndicatorClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='carouselIndicator']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`h-[57rem]  w-[22.481rem] relative min-w-[22.481rem] max-w-full text-left text-[0.875rem] text-white font-assistant mq450:min-w-full ${className}`}
    >
      <div
        className="absolute top-[12%] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white w-full h-full"
        data-scroll-to="carouselIndicator"
      />
      
      
      <a href="/">
  <img
    className="absolute top-[13%] left-[1.85rem] w-[1.875rem] h-[1.875rem] object-contain z-[1]"
    loading="lazy"
    alt=""
    src="./arrow@2x.png"
  />
</a>
      <div className="absolute top-[13%] left-[15.475rem] w-[5rem] h-[1.875rem] whitespace-nowrap">
        <div
          className="absolute top-[0rem] left-[0rem] rounded-31xl bg-crimson w-full h-full cursor-pointer z-[1]"
          onClick={onNewIndicatorClick}
        />
        <div className="absolute top-[0.5rem] left-[1.125rem] leading-[0.875rem] whitespace-pre-wrap inline-block min-w-[2.813rem] z-[2]">
          + New
        </div>
      </div>


      <h3 className="m-0 absolute top-[20%] left-[1.85rem] text-[1.25rem] leading-[1.25rem] font-semibold font-inherit text-gray-100 inline-block min-w-[5.313rem] z-[1] mq1425:text-[1rem] mq1425:leading-[1rem]">
        This week
      </h3>
      <div className="absolute top-[23%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 1
        </div>
      </div>
      <div className="absolute top-[29%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 2
        </div>
      </div>
      <div className="absolute top-[35%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 3
        </div>
      </div>
     


      <h3 className="m-0 absolute top-[44%] left-[1.85rem] text-[1.25rem] leading-[1.25rem] font-semibold font-inherit text-gray-100 inline-block min-w-[5.313rem] z-[1] mq1425:text-[1rem] mq1425:leading-[1rem]">
        Last week
      </h3>
      <div className="absolute top-[47%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 1
        </div>
      </div>
      <div className="absolute top-[53%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 2
        </div>
      </div>
      <div className="absolute top-[59%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 3
        </div>
      </div>
      <div className="absolute top-[65%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 4
        </div>
      </div>
      <div className="absolute top-[71%] left-[1.85rem] rounded-3xs bg-crimson w-[19.613rem] flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
        <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
        <div className="relative leading-[0.875rem] inline-block min-w-[3.375rem] z-[2]">
          Prompt 5
        </div>
      </div>


      <div className="absolute top-[95%] left-[1.85rem] mr-[5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(90deg,_#f5d638,_#f26a10)] flex flex-row items-start justify-start pt-[1.656rem] pb-[1.662rem] pr-[2rem] pl-[2.187rem] box-border max-w-full z-[1] text-[1.875rem]">
        <div className="h-[7.069rem] w-[19.613rem] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(90deg,_#f5d638,_#f26a10)] hidden max-w-full" />
        <h1 className="m-0 relative text-inherit leading-[1.875rem] font-extrabold font-inherit z-[2] mq450:text-[1.5rem] mq450:leading-[1.5rem] mq1425:text-[1.125rem] mq1425:leading-[1.125rem]">
          <p className="m-0">{`EXPLORE TRENDING `}</p>
          <p className="m-0">PROMPTS</p>
        </h1>
      </div>
    </div>
  );
};

PromptCarousel2.propTypes = {
  className: PropTypes.string,
};

export default PromptCarousel2;

