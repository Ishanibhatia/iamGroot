import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PromptNavigation = ({ className = "", arrow }) => {
  const navigate = useNavigate();

  const onArrowIconClick = useCallback(() => {
    navigate("/ai-home-page");
  }, [navigate]);

  return (
    <form
      className={`m-0 w-[25.481rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[1.437rem] px-[1.812rem] pb-[2.8rem] box-border gap-[2.531rem] max-w-full mq450:pb-[1.25rem] mq450:box-border mq825:pt-[1.25rem] mq825:pb-[1.813rem] mq825:box-border mq1425:gap-[1.25rem] ${className}`}
    >
      <div className="w-[25.481rem] h-[68.488rem] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq1425:flex-wrap">
        <img
          className="h-[1.875rem] w-[1.875rem] relative object-contain min-h-[1.875rem] cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src={arrow}
          onClick={onArrowIconClick}
        />
        <div className="rounded-31xl bg-crimson flex flex-row items-start justify-start py-[0.5rem] pr-[1.062rem] pl-[1.125rem] whitespace-nowrap z-[1]">
          <div className="h-[1.875rem] w-[5rem] relative rounded-31xl bg-crimson hidden" />
          <a className="[text-decoration:none] relative text-[0.875rem] leading-[0.875rem] font-assistant text-white whitespace-pre-wrap text-left inline-block min-w-[2.813rem] z-[2]">
            + New
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[22.525rem] box-border gap-[2.025rem] max-w-full mq450:pb-[14.625rem] mq450:box-border mq1425:gap-[1rem] mq1425:pb-[9.5rem] mq1425:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.768rem] max-w-full">
          <h3 className="m-0 relative text-[1.25rem] leading-[1.25rem] font-semibold font-assistant text-gray-100 text-left inline-block min-w-[5.313rem] z-[1] mq1425:text-[1rem] mq1425:leading-[1rem]">
            This week
          </h3>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <a className="[text-decoration:none] relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 1
            </a>
          </div>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <div className="relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 2
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.625rem] px-[0.937rem] pb-[0.631rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <div className="relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 3
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.768rem] max-w-full">
          <h3 className="m-0 relative text-[1.25rem] leading-[1.25rem] font-semibold font-assistant text-gray-100 text-left inline-block min-w-[5.313rem] z-[1] mq1425:text-[1rem] mq1425:leading-[1rem]">
            Last week
          </h3>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.625rem] px-[0.937rem] pb-[0.631rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <div className="relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 1
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.625rem] px-[0.937rem] pb-[0.631rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <div className="relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 2
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.625rem] px-[0.937rem] pb-[0.631rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <div className="relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 3
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <div className="relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 4
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[0.631rem] px-[0.937rem] pb-[0.625rem] box-border whitespace-nowrap max-w-full z-[1]">
            <div className="h-[2.131rem] w-[21.613rem] relative rounded-3xs bg-crimson hidden max-w-full" />
            <div className="relative text-[0.875rem] leading-[0.875rem] font-assistant text-white text-left inline-block min-w-[3.375rem] z-[2]">
              Prompt 5
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(90deg,_#f5d638,_#f26a10)] flex flex-row items-start justify-start pt-[1.656rem] pb-[1.662rem] pr-[2rem] pl-[2.187rem] box-border max-w-full z-[1]">
        <div className="h-[7.069rem] w-[21.613rem] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl [background:linear-gradient(90deg,_#f5d638,_#f26a10)] hidden max-w-full" />
        <h1 className="m-0 relative text-[1.875rem] leading-[1.875rem] font-extrabold font-assistant text-white text-left z-[2] mq450:text-[1.5rem] mq450:leading-[1.5rem] mq1425:text-[1.125rem] mq1425:leading-[1.125rem]">
          <p className="m-0">{`EXPLORE TRENDING `}</p>
          <p className="m-0">PROMPTS</p>
        </h1>
      </div>
    </form>
  );
};

PromptNavigation.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.string,
};

export default PromptNavigation;

