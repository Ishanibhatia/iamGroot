import PromptNavigation from "../components/PromptNavigation";
import FrameComponent3 from "../components/FrameComponent3";
import TypePrompt from "../components/TypePrompt";
import ImageGrid from "../components/ImageGrid";

const Prompt1 = () => {
  return (
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start gap-[1.512rem] leading-[normal] tracking-[normal]">
      <div className="w-full h-[0.063rem] absolute !m-[0] top-[-220.875rem] right-[0rem] left-[0rem] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.04)] bg-gray-300 shrink-0" />
      <header className="self-stretch shadow-[0px_4px_12px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row items-end justify-start py-[0rem] pr-[3.687rem] pl-[4.75rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[0.75rem] text-black font-assistant mq825:pl-[2.375rem] mq825:pr-[1.813rem] mq825:box-border">
        <div className="w-[8.575rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.312rem] box-border">
          <img
            className="w-[3.313rem] h-[2.25rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/link@2x.png"
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
              src="/image1@2x.png"
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
                src="/image-11@2x.png"
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
              src="/image-22@2x.png"
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
              src="/image-32@2x.png"
            />
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem] mt-[-0.063rem]">
              <a className="[text-decoration:none] relative leading-[0.375rem] font-bold text-[inherit] inline-block min-w-[1.25rem] z-[1]">
                Bag
              </a>
            </div>
          </div>
        </div>
      </header>
      <img
        className="w-[4.069rem] h-[4.069rem] absolute !m-[0] top-[29.088rem] right-[5.475rem] shrink-0 object-contain z-[1]"
        alt=""
        src="/denim-shorts1@2x.png"
      />
      <main className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border gap-[6.125rem] max-w-full mq450:gap-[1.5rem] mq825:gap-[3.063rem]">
        <PromptNavigation arrow="/arrow@2x.png" />
        <section className="flex-1 flex flex-col items-start justify-start pt-[1.437rem] px-[0rem] pb-[0rem] box-border min-w-[56.375rem] max-w-full text-justify text-[1.25rem] text-white font-assistant mq825:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.7rem] max-w-full mq450:gap-[2.375rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1425:gap-[1.188rem]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[6.6rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_233px)] mq450:pt-[2.813rem] mq450:box-border mq450:max-w-full mq825:pt-[4.313rem] mq825:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8.931rem] max-w-full shrink-0 mq450:gap-[2.25rem] mq825:gap-[4.438rem] mq1425:gap-[1.125rem]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[1.793rem] max-w-full">
                  <FrameComponent3 iHaveFFE0CCSkinF5D19CHair="I have #FFE0CC skin, #F5D19C hair, and #89CFF0 eyes. Could you recommend makeup products like lipstick, lip gloss, and eye shadow, and suggest some jewelry that would match well." />
                  <div className="w-[61.525rem] rounded-21xl bg-white box-border flex flex-row items-start justify-start py-[3.625rem] px-[2.312rem] max-w-full border-[1px] border-solid border-crimson mq450:pt-[2.375rem] mq450:pb-[2.375rem] mq450:box-border">
                    <div className="h-[36.838rem] w-[61.525rem] relative rounded-21xl bg-white box-border hidden max-w-full border-[1px] border-solid border-crimson" />
                    <div className="flex-1 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.175rem] box-border relative max-w-full">
                      <h3 className="m-0 h-[29.188rem] flex-1 relative text-inherit tracking-[0.04em] leading-[1.25rem] font-semibold font-inherit text-gray-100 flex items-center z-[1] mq1425:text-[1rem] mq1425:leading-[1rem]">
                        <span>
                          <p className="m-0">
                            Sure! Here’s the recommendation:
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            For your fair skin (#FFE0CC), blonde hair (#F5D19C),
                            and blue eyes, a soft pastel dress, such as a light
                            pink (#FFB6C1) or baby blue (#89CFF0), would be
                            beautiful. For makeup, consider a peachy-pink
                            lipstick (#FFDAB9), a light pink lip gloss
                            (#FFC0CB), and a champagne (#F7E7CE) or rose gold
                            (#B76E79) eye shadow. For jewelry, delicate pieces
                            in rose gold (#B76E79) or silver (#C0C0C0) with
                            pastel gemstones will complement your look
                            perfectly.
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">{`Products : `}</p>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>peachy-pink lipstick</li>
                          </ul>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>light pink lip gloss</li>
                          </ul>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>champagne eye shadow</li>
                          </ul>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">{` `}</p>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>rose gold eye shadow</li>
                          </ul>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">&nbsp;</p>
                        </span>
                      </h3>
                      <div className="!m-[0] absolute top-[12.038rem] left-[1.875rem] rounded bg-black flex flex-row items-start justify-start pt-[0.331rem] pb-[0.337rem] pr-[1rem] pl-[1.25rem] box-border max-w-full z-[2]">
                        <div className="h-[2.044rem] w-[27.431rem] relative rounded bg-black hidden max-w-full" />
                        <h3 className="m-0 relative text-inherit tracking-[0.04em] leading-[1.375rem] font-semibold font-inherit z-[3] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
                          https://www.figma.com/design/2nfupdR6VI
                        </h3>
                      </div>
                      <div className="!m-[0] absolute bottom-[10.188rem] left-[1.875rem] rounded bg-black flex flex-row items-start justify-start pt-[0.331rem] pb-[0.337rem] pr-[1rem] pl-[1.25rem] box-border max-w-full z-[2]">
                        <div className="h-[2.044rem] w-[27.431rem] relative rounded bg-black hidden max-w-full" />
                        <h3 className="m-0 relative text-inherit tracking-[0.04em] leading-[1.375rem] font-semibold font-inherit z-[3] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
                          https://www.figma.com/design/2nfupdR6VI
                        </h3>
                      </div>
                      <div className="!m-[0] absolute bottom-[5.094rem] left-[1.875rem] rounded bg-black flex flex-row items-start justify-start pt-[0.331rem] pb-[0.337rem] pr-[1rem] pl-[1.25rem] box-border max-w-full z-[2]">
                        <div className="h-[2.044rem] w-[27.431rem] relative rounded bg-black hidden max-w-full" />
                        <h3 className="m-0 relative text-inherit tracking-[0.04em] leading-[1.375rem] font-semibold font-inherit z-[3] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
                          https://www.figma.com/design/2nfupdR6VI
                        </h3>
                      </div>
                      <div className="!m-[0] absolute bottom-[0rem] left-[1.875rem] rounded bg-black flex flex-row items-start justify-start pt-[0.337rem] pb-[0.331rem] pr-[1rem] pl-[1.25rem] box-border max-w-full z-[2]">
                        <div className="h-[2.044rem] w-[27.431rem] relative rounded bg-black hidden max-w-full" />
                        <h3 className="m-0 relative text-inherit tracking-[0.04em] leading-[1.375rem] font-semibold font-inherit z-[3] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
                          https://www.figma.com/design/2nfupdR6VI
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <TypePrompt
                  arrow="/arrow-11@2x.png"
                  propWidth="unset"
                  propAlignSelf="stretch"
                />
              </div>
            </div>
            <ImageGrid
              shoppingBagFull="/shopping-bag-full1@2x.png"
              sunGlasses="/sun-glasses1@2x.png"
              shirt="/shirt1@2x.png"
              tShirt="/tshirt1@2x.png"
              pairOfSneakers="/pair-of-sneakers1@2x.png"
              sneakers="/sneakers1@2x.png"
              propAlignSelf="unset"
              propWidth="9.844rem"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Prompt1;

