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
      {/* <PostBody
        image38="/image-38@2x.png"
        image39="/image-39@2x.png"
        image40="/image-40@2x.png"
      /> */}


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
                  src="/user-avatar@2x.png"
                />
                <div className="relative text-[1.25rem] leading-[5rem] text-black inline-block min-w-[2.875rem] z-[9] ml-[-30.913rem] mq450:text-[1rem] mq450:leading-[4rem] top-[3%] left-[37rem]">
                Greta
              </div>
                <img
                  className="absolute top-[2rem] left-[20rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="/speech-bubble@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[18rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="/heart@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[23.5rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="/share@2x.png"
                />
                <img
                  className="absolute top-[2rem]  left-[22rem] w-[1.25rem] h-[1.25rem] object-contain z-[9]"
                  alt=""
                  src="/bookmark@2x.png"
                />
              </div>
              
            </div>
            <img
              className="h-[50%] w-[48%] absolute !m-[0] top-[2.513rem] left-[2.494rem] rounded-tl-21xl rounded-tr-none rounded-b-none object-cover cursor-pointer z-[3]"
              loading="lazy"
              alt=""
              src="/rectangle-4@2x.png"
              onClick={onCommentAvatarClick}
            />




            <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.293rem] box-border   text-center text-[0.875rem] text-gray-100  ">
              <PurchaseDetails
                image8="/image-8@2x.png"
                image9="/image-9@2x.png"
                plus="/plus-1@2x.png"
                image10="/image-10@2x.png"
                image11="/image-11@2x.png"
                plus1="/plus-2@2x.png"
                arrow="/arrow@2x.png"
                image12="/image-12@2x.png"
                image15="/image-15@2x.png"
                image16="/image-16@2x.png"
                plus2="/plus-3@2x.png"
                image13="/image-13@2x.png"
                image14="/image-14@2x.png"
                plus3="/plus-4@2x.png"
                arrow1="/arrow-1@2x.png"
                image17="/image-17@2x.png"
              />
            </div>
          </div>








          {/* <div className="self-stretch flex flex-col items-start justify-start gap-[3.387rem] max-w-full text-black">
            <div className="self-stretch rounded-21xl bg-chocolate flex flex-row items-start justify-start pt-[2.512rem] px-[3.437rem] pb-[1.218rem] box-border gap-[0.718rem] max-w-full z-[1] lg:flex-wrap">
              <div className="h-[38.831rem] w-[82.913rem] relative rounded-21xl bg-chocolate hidden max-w-full" />
              <div className="h-[35.1rem] flex-1 relative min-w-[24.438rem] max-w-full mq825:min-w-full">
                <img
                  className="absolute top-[0rem] left-[0rem] rounded-tl-21xl rounded-tr-none rounded-b-none w-[37.606rem] h-[23.988rem] object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-18@2x.png"
                />
                <div className="absolute top-[16.263rem] left-[0rem] w-full flex flex-row items-start justify-start pt-[7.831rem] pb-[0rem] pr-[0.875rem] pl-[1rem] box-border max-w-full">
                  <div className="w-[35.681rem] flex flex-col items-start justify-start pt-[4.756rem] px-[0rem] pb-[0rem] box-border max-w-full">
                    <div className="self-stretch relative leading-[1.25rem] z-[4]">
                      <span>
                        <span>
                          <span>{`It's amazing to see how plus-size models are getting more exposure in the fashion industry, social media, and photography. `}</span>
                          <span className="text-chocolate whitespace-pre-wrap">{`#hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hash  `}</span>
                          <span className="text-crimson">{`                           `}</span>
                        </span>
                        <span className="text-crimson">
                          <span className="font-archivo-black whitespace-pre-wrap text-[0.875rem] text-darkgray">{`                  `}</span>
                        </span>
                      </span>
                      <span className="font-archivo-black whitespace-pre-wrap text-[0.875rem] text-darkgray">
                        <span>...See More</span>
                      </span>
                    </div>
                  </div>
                  <div className="relative text-[1.25rem] leading-[5rem] z-[3] ml-[-30.913rem] mq450:text-[1rem] mq450:leading-[4rem]">
                    Raj Vikramaditya
                  </div>
                  <div className="h-[17.544rem] w-full absolute !m-[0] top-[0rem] right-[0rem] left-[0rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-t-21xl rounded-br-none rounded-bl-21xl bg-white w-full h-full z-[2]" />
                    <img
                      className="absolute top-[8.769rem] left-[1.606rem] rounded-[50%] w-[3.125rem] h-[3.125rem] object-contain z-[3]"
                      alt=""
                      src="/user-avatar@2x.png"
                    />
                    <img
                      className="absolute top-[9.394rem] left-[25.794rem] w-[1.875rem] h-[1.875rem] object-contain z-[3]"
                      alt=""
                      src="/heart-1@2x.png"
                    />
                    <img
                      className="absolute top-[9.394rem] left-[29.031rem] w-[1.875rem] h-[1.875rem] object-contain z-[3]"
                      alt=""
                      src="/speech-bubble-1@2x.png"
                    />
                    <img
                      className="absolute top-[9.706rem] left-[32.263rem] w-[1.875rem] h-[1.563rem] object-contain z-[3]"
                      alt=""
                      src="/bookmark-1@2x.png"
                    />
                    <img
                      className="absolute top-[9.394rem] left-[34.85rem] w-[1.875rem] h-[1.875rem] object-contain z-[3]"
                      alt=""
                      src="/share-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <PurchaseDetails
                image8="/image-20@2x.png"
                image9="/image-211@2x.png"
                plus="/plus-5@2x.png"
                image10="/image-18@2x.png"
                image11="/image-19@2x.png"
                plus1="/plus-6@2x.png"
                arrow="/arrow-2@2x.png"
                image12="/image-22@2x.png"
                image15="/image-25@2x.png"
                image16="/image-26@2x.png"
                plus2="/plus-7@2x.png"
                image13="/image-23@2x.png"
                image14="/image-24@2x.png"
                plus3="/plus-8@2x.png"
                arrow1="/arrow-3@2x.png"
                image17="/image-27@2x.png"
                propAlignSelf="unset"
                propFlex="1"
                propMinWidth="24.438rem"
              />
            </div>
            <div className="self-stretch rounded-21xl bg-gold flex flex-row items-start justify-start pt-[2.512rem] px-[3.437rem] pb-[1.218rem] box-border gap-[0.718rem] max-w-full z-[1] lg:flex-wrap">
              <div className="h-[38.831rem] w-[82.913rem] relative rounded-21xl bg-gold hidden max-w-full" />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[24.438rem] max-w-full mq825:min-w-full">
                <img
                  className="self-stretch h-[23.988rem] relative rounded-tl-21xl rounded-tr-none rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-29@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[7.831rem] pb-[0rem] pr-[0.875rem] pl-[1rem] box-border relative max-w-full mt-[-7.725rem]">
                  <div className="w-[35.681rem] flex flex-col items-start justify-start pt-[4.756rem] px-[0rem] pb-[0rem] box-border max-w-full">
                    <div className="self-stretch relative leading-[1.25rem] z-[4]">
                      <span>
                        <span>
                          <span>{`It's amazing to see how plus-size models are getting more exposure in the fashion industry, social media, and photography. `}</span>
                          <span className="text-gold">
                            #hashtag #hashtag #hashtag #hashtag #hashtag
                            #hashtag #hashtag #hashtag #hashtag #hashtag #hash
                          </span>
                          <span className="text-black whitespace-pre-wrap">{`    `}</span>
                          <span className="text-crimson">{`                         `}</span>
                        </span>
                        <span className="text-crimson">
                          <span className="font-archivo-black whitespace-pre-wrap text-[0.875rem] text-darkgray">{`                  `}</span>
                        </span>
                      </span>
                      <span className="font-archivo-black whitespace-pre-wrap text-[0.875rem] text-darkgray">
                        <span>...See More</span>
                      </span>
                    </div>
                  </div>
                  <div className="relative text-[1.25rem] leading-[5rem] inline-block min-w-[5.125rem] z-[3] ml-[-30.913rem] mq450:text-[1rem] mq450:leading-[4rem]">
                    Cleopatra
                  </div>
                  <div className="h-[17.544rem]  absolute !m-[0] top-[0rem] right-[0rem] left-[0rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-t-21xl rounded-br-none rounded-bl-21xl bg-white  h-full z-[2]" />
                    <img
                      className="absolute top-[8.769rem] left-[1.606rem] rounded-[50%] w-[3.125rem] h-[3.125rem] object-contain z-[3]"
                      alt=""
                      src="/ellipse-9@2x.png"
                    />
                    <img
                      className="absolute top-[9.675rem] left-[32.975rem] w-[1.875rem] h-[1.563rem] object-contain z-[3]"
                      alt=""
                      src="/bookmark-2@2x.png"
                    />
                    <img
                      className="absolute top-[9.394rem] left-[30.8rem] w-[1.875rem] h-[1.875rem] object-contain z-[3]"
                      alt=""
                      src="/speech-bubble-2@2x.png"
                    />
                    <img
                      className="absolute top-[9.394rem] left-[27.875rem] w-[1.875rem] h-[1.875rem] object-contain z-[3]"
                      alt=""
                      src="/heart-2@2x.png"
                    />
                    <img
                      className="absolute top-[9.394rem] left-[34.85rem] w-[1.875rem] h-[1.875rem] object-contain z-[4]"
                      alt=""
                      src="/share-2@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.568rem]   text-[1.25rem] text-gray-100">
                <div className="self-stretch rounded-tl-none rounded-tr-21xl rounded-b-none bg-white flex flex-col items-start justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border  z-[2]">
                  <div className="w-[3rem] h-[16.263rem] relative rounded-tl-none rounded-tr-21xl rounded-b-none bg-white hidden z-[1]" />
                  {/* <FrameComponent1
                    gretaBought="Greta bought "
                    arrow="/arrow-4@2x.png"
                  /> */}
                  {/* <div className="self-stretch flex flex-row items-start justify-start gap-[1.112rem] mt-[-0.919rem] text-center text-[0.875rem] mq825:flex-wrap">
                    <div className="flex-1 rounded-xl bg-white box-border flex flex-col items-start justify-start pt-[0.625rem] px-[0.437rem] pb-[0.875rem] gap-[0.443rem] min-w-[8.5rem] z-[4] text-left border-[1px] border-solid border-darkgray">
                      <div className="w-[13.15rem] h-[10.763rem] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-darkgray" />
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
                        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[1.562rem] pl-[0rem] relative [row-gap:20px] mq450:flex-wrap">
                          <img
                            className="h-[6.663rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[3.25rem] min-h-[6.688rem] z-[5]"
                            loading="lazy"
                            alt=""
                            src="/image-30@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start pt-[0.087rem] px-[0rem] pb-[0rem] box-border min-w-[3.25rem]">
                            <img
                              className="self-stretch h-[6.663rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[6]"
                              loading="lazy"
                              alt=""
                              src="/image-311@2x.png"
                            />
                          </div>
                          <img
                            className="h-[2.5rem] w-[1.25rem] absolute !m-[0] right-[0rem] bottom-[2.088rem] object-contain z-[5]"
                            alt=""
                            src="/plus-9@2x.png"
                          />
                        </div>
                      </div>
                      <div className="w-[11.238rem] flex flex-row items-start justify-start gap-[0.462rem]">
                        <div className="flex-1 relative leading-[0.938rem] text-center z-[5]">
                          Plain chiffon Maxi dress
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] text-[1rem]">
                          <div className="relative [text-decoration:line-through] leading-[1.25rem] inline-block min-w-[1.938rem] z-[5]">
                            2100
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] text-[1.563rem] text-black">
                          <div className="relative leading-[1.25rem] inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[3.063rem] z-[5] mq450:text-[1.25rem] mq450:leading-[1rem]">
                            1999
                          </div>
                        </div>
                      </div>
                    </div>
                    <ProductCarousel
                      image28="/image-28@2x.png"
                      image29="/image-29@2x.png"
                      plus="/plus-10@2x.png"
                      originalPrice="1088"
                      discountedPrice="999"
                    />
                    <FrameComponent image32="/image-32@2x.png" />
                  </div>
                </div>
                <div className="self-stretch rounded-t-none rounded-br-21xl rounded-bl-none bg-white flex flex-row items-end justify-start pt-[0rem] pb-[2.131rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.112rem] max-w-full z-[2] text-center text-[0.875rem] mq825:flex-wrap mq825:pl-[1.25rem] mq825:pt-[1.25rem] mq825:pr-[1.25rem] mq825:box-border">
                  <div className="h-[16.975rem] w-[37.606rem] relative rounded-t-none rounded-br-21xl rounded-bl-none bg-white hidden max-w-full" />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                    <div className="relative leading-[5rem] z-[3] mq450:text-[1rem] mq450:leading-[4rem]">
                      Recommendations
                    </div>
                    <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start pt-[0.625rem] px-[0.5rem] pb-[0.875rem] [row-gap:20px] z-[4] mt-[-0.919rem] text-center text-[0.875rem] border-[1px] border-solid border-darkgray mq450:flex-wrap">
                      <div className="h-[10.763rem] w-[13.15rem] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-darkgray" />
                      <div className="h-[9.069rem] w-[5.313rem] flex flex-col items-end justify-start gap-[0.531rem] min-w-[5.313rem] mq450:flex-1">
                        <img
                          className="w-[5rem] flex-1 relative max-h-full object-contain shrink-0 z-[5]"
                          loading="lazy"
                          alt=""
                          src="/image-35@2x.png"
                        />
                        <div className="self-stretch relative leading-[0.938rem] shrink-0 z-[5]">
                          Plain chiffon Maxi dress
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[4.375rem] text-left text-[1rem]">
                        <div className="self-stretch flex flex-col items-end justify-start gap-[0.762rem]">
                          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.125rem] pl-[0rem]">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[0.3rem]">
                              <img
                                className="h-[6.663rem] w-[5rem] relative object-cover z-[6]"
                                loading="lazy"
                                alt=""
                                src="/image-36@2x.png"
                              />
                              <div className="flex flex-col items-start justify-start pt-[2.081rem] px-[0rem] pb-[0rem]">
                                <img
                                  className="w-[1.25rem] h-[2.5rem] relative object-cover z-[5]"
                                  alt=""
                                  src="/plus-11@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[1.056rem]">
                            <div className="relative [text-decoration:line-through] leading-[1.25rem] inline-block min-w-[2rem] z-[5]">
                              4002
                            </div>
                            <div className="relative text-[1.563rem] leading-[1.25rem] text-black inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[3.063rem] z-[5] mq450:text-[1.25rem] mq450:leading-[1rem]">
                              1500
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.9144] rounded-xl bg-white box-border flex flex-row items-start justify-start pt-[0.625rem] px-[0.5rem] pb-[0.875rem] min-w-[8.5rem] [row-gap:20px] z-[3] border-[1px] border-solid border-darkgray mq450:flex-wrap mq450:flex-1">
                    <div className="h-[10.763rem] w-[13.15rem] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-darkgray" />
                    <div className="h-[9.069rem] w-[5.313rem] flex flex-col items-end justify-start gap-[0.531rem] min-w-[5.313rem] mq450:flex-1">
                      <img
                        className="w-[5rem] flex-1 relative max-h-full object-cover shrink-0 z-[4]"
                        alt=""
                        src="/image-33@2x.png"
                      />
                      <div className="self-stretch relative leading-[0.938rem] shrink-0 z-[4]">
                        Plain chiffon Maxi dress
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[6.544rem] text-left text-[1rem] mq450:flex-1">
                      <div className="flex flex-col items-start justify-start gap-[0.762rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.293rem]">
                          <img
                            className="h-[6.663rem] w-[5rem] relative object-cover z-[5]"
                            alt=""
                            src="/image-34@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[2.081rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1.25rem] h-[2.5rem] relative object-cover z-[4]"
                              alt=""
                              src="/plus-12@2x.png"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.5rem]">
                          <div className="flex flex-row items-start justify-start gap-[1.112rem]">
                            <div className="relative [text-decoration:line-through] leading-[1.25rem] inline-block min-w-[1.938rem] z-[4]">
                              1088
                            </div>
                            <div className="relative text-[1.563rem] leading-[1.25rem] text-black inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[2.313rem] z-[4] mq450:text-[1.25rem] mq450:leading-[1rem]">
                              999
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[13.281rem] flex flex-col items-end justify-start gap-[0.643rem]">
                    <div className="flex flex-row items-start justify-end py-[0rem] px-[1.875rem]">
                      <img
                        className="h-[1.875rem] w-[1.875rem] relative object-cover z-[3]"
                        alt=""
                        src="/arrow-5@2x.png"
                      />
                    </div>
                    <div className="flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white flex flex-col items-end justify-start pt-[0.718rem] pb-[0.975rem] pr-[1.687rem] pl-[0.437rem] gap-[0.531rem] z-[3] border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]">
                      <div className="w-[7.563rem] h-[10.763rem] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white box-border hidden border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]" />
                      <img
                        className="w-[5rem] flex-1 relative max-h-full object-cover z-[4]"
                        alt=""
                        src="/image-37@2x.png"
                      />
                      <div className="w-[5.313rem] relative leading-[0.938rem] flex items-center justify-center z-[4]">
                        Plain chiffon Maxi dress
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  */}
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

