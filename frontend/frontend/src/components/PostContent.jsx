import { useCallback } from "react";
import PostBody from "./PostBody";
import { useNavigate } from "react-router-dom";
import PurchaseDetails from "./PurchaseDetails";
import FrameComponent1 from "./FrameComponent1";
import ProductCarousel from "./ProductCarousel";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const PostContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCommentAvatarClick = useCallback(() => {
    navigate("/postpage");
  }, [navigate]);

  return (
    <section
      className={`absolute top-[35.175rem] left-[25%] w-[70%] flex flex-row flex-wrap items-end justify-start gap-[1rem] text-left text-[1.25rem] text-gray-100 font-assistant ${className}`}
    >


      <div className="flex-1 w-[80%] flex flex-col items-center justify-start pt-[1.143rem] pb-[0.712rem] pr-[1.25rem] pl-[1.625rem] box-border relative  text-[0.938rem] text-crimson">


        <div
          className="w-[100%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_2px_10px_rgba(0,_0,_0,_0.15)] bg-white"
          data-scroll-to="engagementDivider"
        />


        <div className="w-[82.913rem] flex flex-col items-start justify-start gap-[3.081rem] max-w-full shrink-0">




          <div className="self-stretch h-[30rem] flex flex-row items-end justify-start pt-[2.512rem] px-[3.437rem] pb-[1.218rem] box-border relative gap-[0.718rem] max-w-full lg:flex-wrap">
            <div
              className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[20px] bg-crimson cursor-pointer z-[1]"
              onClick={onCommentAvatarClick}
            />
            <div className="flex-[0.9501] flex flex-row items-start justify-start pt-[7.831rem] pb-[0rem] pr-[0.875rem] pl-[1rem] box-border relative w-[51%]  mq825:min-w-full mq825:flex-1">
              <div className="w-[35.681rem] flex flex-col items-start justify-start pt-[4.756rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div
                  className="self-stretch relative leading-[1.25rem] cursor-pointer z-[4] text-xs top-[-2rem] "
                  onClick={onCommentAvatarClick}
                >
                  <span>
                    <span>
                      <span className="text-black">{`It's amazing to see how plus-size models are getting more exposure in the fashion industry, social media, and photography. `}</span>
                      <span>{`#hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hash                             `}</span>
                    </span>
                    <span>
                      <span className="font-archivo-black whitespace-pre-wrap text-[0.875rem] text-darkgray">{`                  `}</span>
                    </span>
                  </span>
                  <span className="font-archivo-black whitespace-pre-wrap text-xs text-darkgray">
                    <span>...See More</span>
                  </span>
                </div>
              </div>
              <div className="h-[10.544rem] w-[108%] mq1426:w-[106%] left-[-1rem]  absolute !m-[0] top-[6rem] mq1525:top-[5rem] right-[0rem]">
                <div className="absolute w-[100%] top-[0rem] left-[0rem] rounded-t-[10px] rounded-br-none rounded-bl-21xl bg-white  h-full z-[2]" />
                <img
                  className="absolute top-[10%] left-[1.606rem] rounded-[50%] w-[3.125rem] h-[3.125rem] object-contain z-[3]"
                  alt=""
                  src="./user-avatar@2x.png"
                />
                <div className="relative text-[1.25rem] leading-[5rem] text-black inline-block min-w-[2.875rem] z-[9] ml-[-30.913rem] mq450:text-[1rem] mq450:leading-[4rem] top-[3%] left-[37rem]">
                  Greta
                </div>
                <img
                  className="absolute top-[2rem] left-[20rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./speech-bubble@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[18rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./heart@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[23.5rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./share@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[22rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./bookmark@2x.png"
                />
              </div>

            </div>
            <img
              className="h-[50%] w-[48%] absolute !m-[0] top-[2.513rem] left-[2.494rem] rounded-tl-21xl rounded-tr-none rounded-b-none object-cover cursor-pointer z-[3]"
              loading="lazy"
              alt=""
              src="./rectangle-4@2x.png"
              onClick={onCommentAvatarClick}
            />










            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] ml-[2%] overflow-hidden w-[50%] text-center text-[0.875rem] text-gray-100 mq450:min-w-full h-[100%]">
              <div className="self-stretch rounded-tl-none rounded-tr-21xl rounded-b-none bg-white flex flex-row items-end justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.118rem] max-w-full z-[2] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:box-border h-[12.263rem] ">
                <div className=" w-[37.606rem] relative rounded-tl-none rounded-tr-21xl h-[12.263rem] rounded-b-none bg-white hidden max-w-full" />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  <div className="relative leading-[1rem] mb-2 inline-block min-w-[3.875rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">{`Greta bought `}</div>
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 195801.png"
                      />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 195801.png"
                      />
                </div>
              </div>


              <div className="self-stretch rounded-tl-none rounded-tr-none rounded-br-21xl bg-white flex flex-row items-end justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.118rem] max-w-full z-[2] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:box-border h-[12.263rem] overflow-hidden">
                <div className="h-[12.263rem] w-[37.606rem] relative rounded-tl-none rounded-tr-21xl rounded-b-none bg-white hidden max-w-full" />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  <div className="relative leading-[1rem] mb-2 inline-block min-w-[3.875rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">{`Recommendations `}</div>
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 201100.png"
                      />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 201052.png"
                      />
                </div>
              </div>
            </div>


















            



            
          </div>
        </div>
        {/* <div className="w-[82.975rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.625rem] box-border max-w-full text-[1.25rem] text-darkgray">
          <div className="relative leading-[5rem] font-semibold inline-block min-w-[5.438rem] z-[2] mq450:text-[1rem] mq450:leading-[4rem]">
            SEE MORE
          </div>
        </div> */}
      </div>


      <div className="flex-1 w-[80%] flex flex-col items-center justify-start pt-[1.143rem] pb-[0.712rem] pr-[1.25rem] pl-[1.625rem] box-border relative  text-[0.938rem] text-chocolate">


        <div
          className="w-[100%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_2px_10px_rgba(0,_0,_0,_0.15)] bg-white"
          data-scroll-to="engagementDivider"
        />


        <div className="w-[82.913rem] flex flex-col items-start justify-start gap-[3.081rem] max-w-full shrink-0">




          <div className="self-stretch h-[30rem] flex flex-row items-end justify-start pt-[2.512rem] px-[3.437rem] pb-[1.218rem] box-border relative gap-[0.718rem] max-w-full lg:flex-wrap">
            <div
              className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[20px] bg-chocolate cursor-pointer z-[1]"
              onClick={onCommentAvatarClick}
            />
            <div className="flex-[0.9501] flex flex-row items-start justify-start pt-[7.831rem] pb-[0rem] pr-[0.875rem] pl-[1rem] box-border relative w-[51%]  mq825:min-w-full mq825:flex-1">
              <div className="w-[35.681rem] flex flex-col items-start justify-start pt-[4.756rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div
                  className="self-stretch relative leading-[1.25rem] cursor-pointer z-[4] text-xs top-[-2rem] "
                  onClick={onCommentAvatarClick}
                >
                  <span>
                    <span>
                      <span className="text-black">{`It's amazing to see how plus-size models are getting more exposure in the fashion industry, social media, and photography. `}</span>
                      <span>{`#hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hash                             `}</span>
                    </span>
                    <span>
                      <span className="font-archivo-black whitespace-pre-wrap text-[0.875rem] text-darkgray">{`                  `}</span>
                    </span>
                  </span>
                  <span className="font-archivo-black whitespace-pre-wrap text-xs text-darkgray">
                    <span>...See More</span>
                  </span>
                </div>
              </div>
              <div className="h-[10.544rem] w-[108%] mq1426:w-[106%] left-[-1rem]  absolute !m-[0] top-[6rem] mq1525:top-[5rem] right-[0rem]">
                <div className="absolute w-[100%] top-[0rem] left-[0rem] rounded-t-[10px] rounded-br-none rounded-bl-21xl bg-white  h-full z-[2]" />
                <img
                  className="absolute top-[10%] left-[1.606rem] rounded-[50%] w-[3.125rem] h-[3.125rem] object-contain z-[3]"
                  alt=""
                  src="./user-avatar1@2x.png"
                />
                <div className="relative text-[1.25rem] leading-[5rem] text-black inline-block min-w-[2.875rem] z-[9] ml-[-30.913rem] mq450:text-[1rem] mq450:leading-[4rem] top-[3%] left-[37rem]">
                Raj Vikramaditya
                </div>
                <img
                  className="absolute top-[2rem] left-[20rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./speech-bubble-1@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[18rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./heart-1@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[23.5rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./share-1@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[22rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./bookmark-1@2x.png"
                />
              </div>

            </div>
            <img
              className="h-[50%] w-[48%] absolute !m-[0] top-[2.513rem] left-[2.494rem] rounded-tl-21xl rounded-tr-none rounded-b-none object-cover cursor-pointer z-[3]"
              loading="lazy"
              alt=""
              src="./rectangle-18@2x.png"
              onClick={onCommentAvatarClick}
            />










            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] ml-[2%] overflow-hidden w-[50%] text-center text-[0.875rem] text-gray-100 mq450:min-w-full h-[100%]">
              <div className="self-stretch rounded-tl-none rounded-tr-21xl rounded-b-none bg-white flex flex-row items-end justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.118rem] max-w-full z-[2] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:box-border h-[12.263rem] ">
                <div className=" w-[37.606rem] relative rounded-tl-none rounded-tr-21xl h-[12.263rem] rounded-b-none bg-white hidden max-w-full" />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  <div className="relative leading-[1rem] mb-2 inline-block min-w-[3.875rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">{`Raj bought `}</div>
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 203708.png"
                      />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 203702.png"
// "D:\We-For-She-Myntra\frontend\frontend\public\Screenshot 2024-07-14 203702.png""
                      />
                </div>
              </div>


              <div className="self-stretch rounded-tl-none rounded-tr-none rounded-br-21xl bg-white flex flex-row items-end justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.118rem] max-w-full z-[2] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:box-border h-[12.263rem] overflow-hidden">
                <div className="h-[12.263rem] w-[37.606rem] relative rounded-tl-none rounded-tr-21xl rounded-b-none bg-white hidden max-w-full" />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  <div className="relative leading-[1rem] mb-2 inline-block min-w-[3.875rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">{`Recommendations `}</div>
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 203702.png"
                      />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 203708.png"
                      />
                </div>
              </div>
            </div>


















            



            
          </div>
        </div>
        {/* <div className="w-[82.975rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.625rem] box-border max-w-full text-[1.25rem] text-darkgray">
          <div className="relative leading-[5rem] font-semibold inline-block min-w-[5.438rem] z-[2] mq450:text-[1rem] mq450:leading-[4rem]">
            SEE MORE
          </div>
        </div> */}
      </div>








      <div className="flex-1 w-[80%] flex flex-col items-center justify-start pt-[1.143rem] pb-[0.712rem] pr-[1.25rem] pl-[1.625rem] box-border relative  text-[0.938rem] text-gold">


        <div
          className="w-[100%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_2px_10px_rgba(0,_0,_0,_0.15)] bg-white"
          data-scroll-to="engagementDivider"
        />


        <div className="w-[82.913rem] flex flex-col items-start justify-start gap-[3.081rem] max-w-full shrink-0">




          <div className="self-stretch h-[30rem] flex flex-row items-end justify-start pt-[2.512rem] px-[3.437rem] pb-[1.218rem] box-border relative gap-[0.718rem] max-w-full lg:flex-wrap">
            <div
              className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[20px] bg-gold cursor-pointer z-[1]"
              onClick={onCommentAvatarClick}
            />
            <div className="flex-[0.9501] flex flex-row items-start justify-start pt-[7.831rem] pb-[0rem] pr-[0.875rem] pl-[1rem] box-border relative w-[51%]  mq825:min-w-full mq825:flex-1">
              <div className="w-[35.681rem] flex flex-col items-start justify-start pt-[4.756rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div
                  className="self-stretch relative leading-[1.25rem] cursor-pointer z-[4] text-xs top-[-2rem] "
                  onClick={onCommentAvatarClick}
                >
                  <span>
                    <span>
                      <span className="text-black">{`It's amazing to see how plus-size models are getting more exposure in the fashion industry, social media, and photography. `}</span>
                      <span>{`#hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hash                             `}</span>
                    </span>
                    <span>
                      <span className="font-archivo-black whitespace-pre-wrap text-[0.875rem] text-darkgray">{`                  `}</span>
                    </span>
                  </span>
                  <span className="font-archivo-black whitespace-pre-wrap text-xs text-darkgray">
                    <span>...See More</span>
                  </span>
                </div>
              </div>
              <div className="h-[10.544rem] w-[108%] mq1426:w-[106%] left-[-1rem]  absolute !m-[0] top-[6rem] mq1525:top-[5rem] right-[0rem]">
                <div className="absolute w-[100%] top-[0rem] left-[0rem] rounded-t-[10px] rounded-br-none rounded-bl-21xl bg-white  h-full z-[2]" />
                <img
                  className="absolute top-[10%] left-[1.606rem] rounded-[50%] w-[3.125rem] h-[3.125rem] object-contain z-[3]"
                  alt=""
                  src="./ellipse-9@2x.png"
                />
                <div className="relative text-[1.25rem] leading-[5rem] text-black inline-block min-w-[2.875rem] z-[9] ml-[-30.913rem] mq450:text-[1rem] mq450:leading-[4rem] top-[3%] left-[37rem]">
                Cleopetra
                </div>
                <img
                  className="absolute top-[2rem] left-[20rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./speech-bubble-2@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[18rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./heart-2@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[23.5rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./share-2@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[22rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="./bookmark-2@2x.png"
                />
              </div>

            </div>
            <img
              className="h-[50%] w-[48%] absolute !m-[0] top-[2.513rem] left-[2.494rem] rounded-tl-21xl rounded-tr-none rounded-b-none object-cover cursor-pointer z-[3]"
              loading="lazy"
              alt=""
              src="./rectangle-29@2x.png"
              onClick={onCommentAvatarClick}
            />










            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] ml-[2%] overflow-hidden w-[50%] text-center text-[0.875rem] text-gray-100 mq450:min-w-full h-[100%]">
              <div className="self-stretch rounded-tl-none rounded-tr-21xl rounded-b-none bg-white flex flex-row items-end justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.118rem] max-w-full z-[2] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:box-border h-[12.263rem] ">
                <div className=" w-[37.606rem] relative rounded-tl-none rounded-tr-21xl h-[12.263rem] rounded-b-none bg-white hidden max-w-full" />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  <div className="relative leading-[1rem] mb-2 inline-block min-w-[3.875rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">{`Cleo bought `}</div>
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 204644.png"
                      />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 204651.png"

                      />
                </div>
              </div>


              <div className="self-stretch rounded-tl-none rounded-tr-none rounded-br-21xl bg-white flex flex-row items-end justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.118rem] max-w-full z-[2] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:box-border h-[12.263rem] overflow-hidden">
                <div className="h-[12.263rem] w-[37.606rem] relative rounded-tl-none rounded-tr-21xl rounded-b-none bg-white hidden max-w-full" />
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  <div className="relative leading-[1rem] mb-2 inline-block min-w-[3.875rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">{`Recommendations `}</div>
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 204651.png"
                      />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                  
                  <img
                        className="w-[10rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="./Screenshot 2024-07-14 204644.png"
                      />
                </div>
              </div>
            </div>


















            



            
          </div>
        </div>
        <div className="w-[82.975rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.625rem] box-border max-w-full text-[1.25rem] text-darkgray">
          <div className="relative leading-[5rem] font-semibold inline-block min-w-[5.438rem] z-[2] mq450:text-[1rem] mq450:leading-[4rem]">
            SEE MORE
          </div>
        </div>
      </div>
    </section>
  );
};

PostContent.propTypes = {
  className: PropTypes.string,
};

export default PostContent;

