import PostBody from "./PostBody";
import UserComment from "./UserComment";
import FrameComponent1 from "./FrameComponent1";
import ProductCarousel from "./ProductCarousel";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const PageContent = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[37.175rem] right-[0.881rem] w-[75%] flex flex-row flex-wrap items-end justify-start gap-[1.675rem] max-w-full text-left text-[1.25rem] text-black font-assistant ${className}`}
    >
      {/* <PostBody
        image38="/image-381@2x.png"
        image39="/image-391@2x.png"
        image40="/image-401@2x.png"
      /> */}
      <div className="flex-1 shadow-[0px_2px_10px_rgba(0,_0,_0,_0.15)] bg-white flex flex-col items-end justify-start pt-[1.143rem] px-[2.25rem] pb-[0rem] box-border gap-[2.662rem] min-w-[61.813rem] max-w-full lg:min-w-full">
        <div className="w-[90.1rem] h-[129.819rem] relative shadow-[0px_2px_10px_rgba(0,_0,_0,_0.15)] bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[3.562rem] pl-[4.062rem] box-border max-w-full shrink-0">
          <div className="flex-1 w-[100%] rounded-21xl bg-crimson flex flex-col items-start justify-start pt-[2.875rem] pb-[3.812rem] pr-[3.5rem] pl-[3.75rem] box-border gap-[3.268rem] max-w-full z-[1]">
            <div className="w-[100%] h-[104.656rem] relative rounded-21xl bg-crimson hidden max-w-full" />
            <div className="self-stretch h-[45.263rem] relative rounded-21xl bg-[url('/post-author@3x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-21xl w-full h-full object-cover hidden z-[2]"
                alt=""
                src="/rectangle-4@2x.png"
              />
              <img
                className="absolute top-[0rem] left-[0.063rem] rounded-21xl w-full h-full object-cover z-[3]"
                alt=""
                src="/Screenshot 2024-07-14 165121.png"
              />
              
            </div>
            <div className="self-stretch bg-white flex flex-row items-start justify-start pt-[0rem] px-[1.562rem] pb-[1.831rem] box-border [row-gap:20px] max-w-full z-[2] mq1425:flex-wrap">
              <div className="h-[10.394rem] w-[75.563rem] relative bg-white hidden max-w-full" />
              <div className="flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[3.125rem] h-[3.125rem] relative rounded-[50%] object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-7@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[44.688rem] max-w-full lg:min-w-full">
                <div className="self-stretch h-[4.063rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.062rem] box-border max-w-full lg:h-auto">
                  <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-[1.25rem] lg:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[2.075rem] max-w-full mq450:flex-wrap">
                      <div className="relative leading-[5rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">
                        <span className="whitespace-pre-wrap">{`Greta  `}</span>
                        <span className="text-darkgray">@myntra_greta477</span>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[1.562rem] px-[0rem] pb-[0rem] text-[0.875rem] text-white">
                        <div className="rounded-31xl bg-crimson flex flex-row items-start justify-start py-[0.5rem] px-[0.875rem] whitespace-nowrap z-[3]">
                          <div className="h-[1.875rem] w-[5rem] relative rounded-31xl bg-crimson hidden" />
                          <div className="relative leading-[0.875rem] whitespace-pre-wrap inline-block min-w-[3.25rem] z-[4]">
                            + Follow
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[1.237rem] px-[0rem] pb-[0rem]">
                      <div className="flex flex-row items-start justify-center gap-[0.718rem] mq450:flex-wrap">
                        <div className="w-[2.45rem] flex flex-col items-start justify-start py-[0rem] pr-[0.562rem] pl-[0rem] box-border">
                          <img
                            className="w-[1.875rem] h-[1.875rem] relative object-cover z-[3]"
                            loading="lazy"
                            alt=""
                            src="/heart@2x.png"
                          />
                        </div>
                        <div className="w-[2.4rem] flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border">
                          <img
                            className="w-[1.875rem] h-[1.875rem] relative object-cover z-[3]"
                            loading="lazy"
                            alt=""
                            src="/speech-bubble@2x.png"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
                          <img
                            className="w-[1.875rem] h-[1.563rem] relative object-cover z-[3]"
                            loading="lazy"
                            alt=""
                            src="/bookmark@2x.png"
                          />
                        </div>
                        <img
                          className="h-[1.875rem] w-[1.875rem] relative object-cover min-h-[1.875rem] z-[3]"
                          loading="lazy"
                          alt=""
                          src="/share@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-[1.125rem] leading-[1.125rem] shrink-0 z-[4]">
                  <span>
                    <span>{`It's amazing to see how plus-size models are getting more exposure in the fashion industry, social media, and photography. It's amazing to see how plus-size models are getting more exposure in the fashion industry, social media, and photography. `}</span>
                    <span className="text-crimson font-archivo-black">{`#hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag #hashtag                         `}</span>
                  </span>
                  <span className="text-crimson font-archivo-black">
                    <span className="whitespace-pre-wrap">{`                  `}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.818rem] max-w-full text-[0.938rem] mq1425:flex-wrap">
              <div className="w-[36.138rem] rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-white flex flex-col items-start justify-start pt-[1.875rem] px-[3.125rem] pb-[1.081rem] box-border gap-[2rem] min-w-[36.138rem] max-w-full z-[2] lg:min-w-full mq1425:flex-1">
                <div className="w-[36.138rem] h-[35.769rem] relative rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.675rem] max-w-full text-[1.25rem] text-gray-100">
                  <div className="relative leading-[1.25rem] inline-block min-w-[5.688rem] z-[3] mq825:text-[1rem] mq825:leading-[1rem]">
                    Comments
                  </div>
                  <UserComment
                    commenterImage="/commenter-image@2x.png"
                    heart="/heart-11@2x.png"
                    speechBubble="/speech-bubble-11@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.675rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.087rem] max-w-full mq450:flex-wrap">
                    <img
                      className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover z-[3]"
                      alt=""
                      src="/commenter-image@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.193rem] px-[0rem] pb-[0rem] box-border min-w-[16.5rem] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.593rem] max-w-full">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem]">
                          <div className="flex flex-row items-end justify-start gap-[1.362rem] mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.156rem]">
                              <div className="relative leading-[0.938rem] z-[3]">
                                <span className="whitespace-pre-wrap">{`Panda  `}</span>
                                <span className="text-darkgray">
                                  @myntra_panda707
                                </span>
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
                        <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[0.5rem] px-[1.125rem] pb-[0.75rem] gap-[2.168rem] max-w-full z-[3] text-[1.125rem] border-[1px] border-solid border-darkgray mq450:flex-wrap">
                          <div className="h-[6.25rem] w-[25.406rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
                          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                            <div className="relative leading-[1.125rem] z-[4]">
                              <p className="m-0">{`Lorem ipsum dolor sit amet, `}</p>
                              <p className="m-0">{`consectetur adipiscing elit, sed do `}</p>
                              <p className="m-0">
                                eiusmod tempor incididunt ut labore
                              </p>
                              <p className="m-0"> et dolore magna aliqua.</p>
                            </div>
                          </div>
                          <div className="h-[1.25rem] w-[3.075rem] relative">
                            <img
                              className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem] object-cover z-[4]"
                              alt=""
                              src="/heart-21@2x.png"
                            />
                            <img
                              className="absolute top-[0rem] left-[1.825rem] w-[1.25rem] h-[1.25rem] object-cover z-[4]"
                              alt=""
                              src="/speech-bubble-21@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <UserComment
                    commenterImage="/commenter-image@2x.png"
                    heart="/heart-3@2x.png"
                    speechBubble="/speech-bubble-3@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.087rem] max-w-full mq450:flex-wrap">
                  <img
                    className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover z-[3]"
                    alt=""
                    src="/commenter-image@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.2rem] px-[0rem] pb-[0rem] box-border min-w-[16.5rem] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.587rem] max-w-full">
                      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem]">
                        <div className="flex flex-row items-end justify-start gap-[1.362rem] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.162rem]">
                            <div className="relative leading-[0.938rem] z-[3]">
                              <span className="whitespace-pre-wrap">{`Panda  `}</span>
                              <span className="text-darkgray">
                                @myntra_panda707
                              </span>
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
                      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[0.5rem] px-[1.125rem] pb-[0.937rem] gap-[3.481rem] max-w-full z-[3] text-[1.125rem] border-[1px] border-solid border-darkgray mq450:flex-wrap">
                        <div className="h-[4.313rem] w-[25.406rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
                        <div className="flex flex-col items-start justify-start pt-[0.387rem] px-[0rem] pb-[0rem]">
                          <div className="relative leading-[1.125rem] z-[4]">
                            <p className="m-0">{`Lorem ipsum dolor sit amet, `}</p>
                            <p className="m-0">{`consectetur adipiscing elit, sed do `}</p>
                          </div>
                        </div>
                        <div className="h-[1.25rem] w-[3.075rem] relative">
                          <img
                            className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem] object-cover z-[4]"
                            alt=""
                            src="/heart-3@2x.png"
                          />
                          <img
                            className="absolute top-[0rem] left-[1.825rem] w-[1.25rem] h-[1.25rem] object-cover z-[4]"
                            alt=""
                            src="/speech-bubble@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.525rem] min-w-[24.438rem] max-w-full text-center text-[0.875rem] text-gray-100 mq450:min-w-full">
                <div className="self-stretch rounded-tl-none rounded-tr-21xl rounded-b-none bg-white flex flex-row items-end justify-start pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.118rem] max-w-full z-[2] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                  <div className="h-[16.263rem] w-[37.606rem] relative rounded-tl-none rounded-tr-21xl rounded-b-none bg-white hidden max-w-full" />
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[8.5rem] text-left text-[1.25rem]">
                    <div className="relative leading-[5rem] inline-block min-w-[6.875rem] z-[3] mq825:text-[1rem] mq825:leading-[4rem]">{`Greta bought `}</div>
                    <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start pt-[0.625rem] px-[0.5rem] pb-[0.875rem] [row-gap:20px] z-[4] mt-[-0.919rem] text-center text-[0.875rem] border-[1px] border-solid border-darkgray mq450:flex-wrap">
                      <div className="h-[10.763rem] w-[13.15rem] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-darkgray" />
                      <div className="h-[9.069rem] w-[5.313rem] flex flex-col items-end justify-start gap-[0.531rem] min-w-[5.313rem] mq450:flex-1">
                        <img
                          className="w-[5rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                          loading="lazy"
                          alt=""
                          src="/image-81@2x.png"
                        />
                        <div className="self-stretch relative leading-[0.938rem] shrink-0 z-[5]">
                          Plain chiffon Maxi dress
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[6.55rem] text-left text-[1rem] mq450:flex-1">
                        <div className="flex flex-col items-start justify-start gap-[0.762rem]">
                          <div className="flex flex-row items-start justify-start gap-[0.3rem]">
                            <img
                              className="h-[6.663rem] w-[5rem] relative object-cover z-[6]"
                              loading="lazy"
                              alt=""
                              src="/image-91@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-[2.081rem] px-[0rem] pb-[0rem]">
                              <img
                                className="w-[1.25rem] h-[2.5rem] relative object-cover z-[5]"
                                alt=""
                                src="/plus-13@2x.png"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.562rem]">
                            <div className="flex flex-row items-start justify-start gap-[0.362rem] mq825:flex-wrap">
                              <div className="relative [text-decoration:line-through] leading-[1.25rem] inline-block min-w-[1.938rem] z-[5]">
                                2100
                              </div>
                              <div className="relative text-[1.563rem] leading-[1.25rem] text-black inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[3.063rem] z-[5] mq825:text-[1.25rem] mq825:leading-[1rem]">
                                1999
                              </div>
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
                        loading="lazy"
                        alt=""
                        src="/image-101@2x.png"
                      />
                      <div className="self-stretch relative leading-[0.938rem] shrink-0 z-[4]">
                        Plain chiffon Maxi dress
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[6.55rem] text-left text-[1rem] mq450:flex-1">
                      <div className="flex flex-col items-start justify-start gap-[0.762rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.3rem]">
                          <img
                            className="h-[6.663rem] w-[5rem] relative object-cover z-[5]"
                            alt=""
                            src="/image-11@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[2.081rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1.25rem] h-[2.5rem] relative object-cover z-[4]"
                              alt=""
                              src="/plus-21@2x.png"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.5rem]">
                          <div className="flex flex-row items-start justify-start gap-[1.118rem] mq825:flex-wrap">
                            <div className="relative [text-decoration:line-through] leading-[1.25rem] inline-block min-w-[1.938rem] z-[4]">
                              1088
                            </div>
                            <div className="relative text-[1.563rem] leading-[1.25rem] text-black inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[2.313rem] z-[4] mq825:text-[1.25rem] mq825:leading-[1rem]">
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
                        src="/arrow@2x.png"
                      />
                    </div>
                    <div className="flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white flex flex-col items-end justify-start pt-[0.718rem] pb-[0.975rem] pr-[1.687rem] pl-[0.437rem] gap-[0.531rem] z-[3] border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]">
                      <div className="w-[7.563rem] h-[10.763rem] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white box-border hidden border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]" />
                      <img
                        className="w-[5rem] flex-1 relative max-h-full object-cover z-[4]"
                        alt=""
                        src="/image-12@2x.png"
                      />
                      <div className="w-[5.313rem] relative leading-[0.938rem] flex items-center justify-center z-[4]">
                        Plain chiffon Maxi dress
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-t-none rounded-br-21xl rounded-bl-none bg-white flex flex-col items-start justify-start pt-[0rem] pb-[2.131rem] pr-[0rem] pl-[1.5rem] box-border max-w-full z-[2]">
                  <div className="w-[37.606rem] h-[16.975rem] relative rounded-t-none rounded-br-21xl rounded-bl-none bg-white hidden max-w-full z-[1]" />
                  <FrameComponent1
                    gretaBought="Recommendations"
                    arrow="/arrow-13@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.118rem] mt-[-0.919rem] mq450:flex-wrap">
                    <ProductCarousel
                      image28="/image-151@2x.png"
                      image29="/image-161@2x.png"
                      plus="/plus-31@2x.png"
                      originalPrice="4002"
                      discountedPrice="1500"
                      propPadding="0.625rem 0.562rem 0.875rem 0.437rem"
                    />
                    <ProductCarousel
                      image28="/image-131@2x.png"
                      image29="/image-14@2x.png"
                      plus="/plus-41@2x.png"
                      originalPrice="1088"
                      discountedPrice="999"
                      propPadding="0.625rem 0.437rem 0.875rem"
                    />
                    <FrameComponent
                      image32="/image-17@2x.png"
                      propPadding="0.725rem 1.687rem 0.975rem 0.437rem"
                      propGap="0.525rem"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;

