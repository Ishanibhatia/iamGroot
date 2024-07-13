import { useMemo } from "react";
import PropTypes from "prop-types";

const PurchaseDetails = ({
  className = "",
  image8,
  image9,
  plus,
  image10,
  image11,
  plus1,
  arrow,
  image12,
  image15,
  image16,
  plus2,
  image13,
  image14,
  plus3,
  arrow1,
  image17,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const purchaseDetailsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.568rem] max-w-full text-center text-[0.875rem] text-gray-100 font-assistant ${className}`}
      style={purchaseDetailsStyle}
    >
      <div className="self-stretch rounded-tl-none rounded-tr-21xl rounded-b-none bg-white flex flex-row items-end justify-end pt-[0rem] pb-[1.418rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.112rem]  z-[2] mq825:flex-wrap mq825:pl-[1.25rem] mq825:pt-[1.25rem] mq825:pr-[1.25rem] mq825:box-border w-[50%]">
        <div className="h-[40%] w-[50%] relative rounded-tl-none rounded-tr-21xl rounded-b-none bg-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start  text-left text-[1.25rem] h-[20%] w-[30%]">
          <div className="relative leading-[5rem] inline-block min-w-[6.875rem] z-[3] mq450:text-[1rem] mq450:leading-[4rem]">{`Greta bought `}</div>
          <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start pt-[0.625rem] px-[0.5rem] pb-[0.875rem] [row-gap:20px] z-[4] mt-[-0.919rem] text-center text-[0.875rem] border-[1px] border-solid border-darkgray mq450:flex-wrap">
            <div className="h-[10.763rem] w-[13.15rem] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-darkgray" />
            <div className="h-[9.069rem] w-[5.313rem] flex flex-col items-end justify-start gap-[0.531rem] min-w-[5.313rem] mq450:flex-1">
              <img
                className="w-[5rem] flex-1 relative max-h-full object-cover z-[5]"
                loading="lazy"
                alt=""
                src={image8}
              />
              <div className="self-stretch relative leading-[0.938rem] z-[5]">
                Plain chiffon Maxi dress 1
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[6.55rem] text-left text-[1rem] mq450:flex-1">
              <div className="flex flex-col items-start justify-start gap-[0.762rem]">
                <div className="flex flex-row items-end justify-start gap-[0.3rem]">
                  <img
                    className="h-[6.663rem] w-[5rem] relative object-cover z-[6]"
                    loading="lazy"
                    alt=""
                    src={image9}
                  />
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.081rem]">
                    <img
                      className="w-[1.25rem] h-[2.5rem] relative object-cover z-[5]"
                      alt=""
                      src={plus}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.5rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.368rem]">
                    <div className="relative [text-decoration:line-through] leading-[1.25rem] inline-block min-w-[1.938rem] z-[5]">
                      2100
                    </div>
                    <div className="relative text-[1.563rem] leading-[1.25rem] text-black inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] min-w-[3.063rem] z-[5] mq450:text-[1.25rem] mq450:leading-[1rem]">
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
              className="w-[5rem] flex-1 relative max-h-full object-cover z-[4]"
              loading="lazy"
              alt=""
              src={image10}
            />
            <div className="self-stretch relative leading-[0.938rem] z-[4]">
              Plain chiffon Maxi dress
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[6.544rem] text-left text-[1rem] mq450:flex-1">
            <div className="flex flex-col items-start justify-start gap-[0.762rem]">
              <div className="flex flex-row items-end justify-start gap-[0.293rem]">
                <img
                  className="h-[6.663rem] w-[5rem] relative object-cover z-[5]"
                  alt=""
                  src={image11}
                />
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.081rem]">
                  <img
                    className="w-[1.25rem] h-[2.5rem] relative object-cover z-[4]"
                    alt=""
                    src={plus1}
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
              src={arrow}
            />
          </div>
          <div className="flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white flex flex-col items-end justify-start pt-[0.718rem] pb-[0.975rem] pr-[1.687rem] pl-[0.437rem] gap-[0.531rem] z-[3] border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]">
            <div className="w-[7.563rem] h-[10.763rem] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white box-border hidden border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]" />
            <img
              className="w-[5rem] flex-1 relative max-h-full object-cover z-[4]"
              alt=""
              src={image12}
            />
            <div className="w-[5.313rem] relative leading-[0.938rem] flex items-center justify-center z-[4]">
              Plain chiffon Maxi dress
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-br-21xl rounded-bl-none bg-white flex flex-row items-end justify-start pt-[0rem] pb-[2.131rem] pr-[0rem] pl-[1.5rem] box-border gap-[1.112rem] max-w-full z-[2] mq825:flex-wrap mq825:pl-[1.25rem] mq825:pt-[1.25rem] mq825:pr-[1.25rem] mq825:box-border">
        <div className="h-[16.975rem] w-[37.606rem] relative rounded-t-none rounded-br-21xl rounded-bl-none bg-white hidden max-w-full" />



        <div className="flex-1 flex flex-col items-start justify-start w-[45%] text-left text-[1.25rem]">
          <div className="relative leading-[5rem] z-[3] mq450:text-[1rem] mq450:leading-[4rem]">
            Recommendations
          </div>
          <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start pt-[0.625rem] px-[0.5rem] pb-[0.875rem] [row-gap:20px] z-[4] mt-[-0.919rem] text-center text-[0.875rem] border-[1px] border-solid border-darkgray mq450:flex-wrap">
            <div className="h-[10.763rem] w-[13.15rem] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-darkgray" />
            <div className="h-[9.063rem] w-[5.313rem] flex flex-col items-end justify-start gap-[0.525rem] min-w-[5.313rem] mq450:flex-1">
              <img
                className="w-[5rem] flex-1 relative max-h-full object-cover shrink-0 z-[5]"
                loading="lazy"
                alt=""
                src={image15}
              />
              <div className="self-stretch relative leading-[0.938rem] shrink-0 z-[5]">
                Plain chiffon Maxi dress
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[4.375rem] text-left text-[1rem]">
              <div className="self-stretch flex flex-col items-end justify-start gap-[0.756rem]">
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.125rem] pl-[0rem]">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[0.3rem]">
                    <img
                      className="h-[6.663rem] w-[5rem] relative object-cover z-[6]"
                      loading="lazy"
                      alt=""
                      src={image16}
                    />
                    <div className="flex flex-col items-start justify-start pt-[2.081rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[1.25rem] h-[2.5rem] relative object-cover z-[5]"
                        alt=""
                        src={plus2}
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
          <div className="h-[9.063rem] w-[5.313rem] flex flex-col items-end justify-start gap-[0.525rem] min-w-[5.313rem] mq450:flex-1">
            <img
              className="w-[5rem] flex-1 relative max-h-full object-cover shrink-0 z-[4]"
              loading="lazy"
              alt=""
              src={image13}
            />
            <div className="self-stretch relative leading-[0.938rem] shrink-0 z-[4]">
              Plain chiffon Maxi dress
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border min-w-[6.544rem] text-left text-[1rem] mq450:flex-1">
            <div className="flex flex-col items-start justify-start gap-[0.756rem]">
              <div className="flex flex-row items-start justify-start gap-[0.293rem]">
                <img
                  className="h-[6.663rem] w-[5rem] relative object-cover z-[5]"
                  loading="lazy"
                  alt=""
                  src={image14}
                />
                <div className="flex flex-col items-start justify-start pt-[2.081rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.25rem] h-[2.5rem] relative object-cover z-[4]"
                    alt=""
                    src={plus3}
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
              src={arrow1}
            />
          </div>
          <div className="flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white flex flex-col items-end justify-start pt-[0.718rem] pb-[0.981rem] pr-[1.687rem] pl-[0.437rem] gap-[0.525rem] z-[3] border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]">
            <div className="w-[7.563rem] h-[10.763rem] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white box-border hidden border-t-[1px] border-solid border-darkgray border-b-[1px] border-l-[1px]" />
            <img
              className="w-[5rem] flex-1 relative max-h-full object-cover z-[4]"
              loading="lazy"
              alt=""
              src={image17}
            />
            <div className="w-[5.313rem] relative leading-[0.938rem] flex items-center justify-center z-[4]">
              Plain chiffon Maxi dress
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PurchaseDetails.propTypes = {
  className: PropTypes.string,
  image8: PropTypes.string,
  image9: PropTypes.string,
  plus: PropTypes.string,
  image10: PropTypes.string,
  image11: PropTypes.string,
  plus1: PropTypes.string,
  arrow: PropTypes.string,
  image12: PropTypes.string,
  image15: PropTypes.string,
  image16: PropTypes.string,
  plus2: PropTypes.string,
  image13: PropTypes.string,
  image14: PropTypes.string,
  plus3: PropTypes.string,
  arrow1: PropTypes.string,
  image17: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default PurchaseDetails;

