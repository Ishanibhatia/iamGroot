import PromptNavigation from "../components/PromptNavigation";
import FrameComponent3 from "../components/FrameComponent3";
import TypePrompt from "../components/TypePrompt";
import ImageGrid from "../components/ImageGrid";
import Header1 from "./Header1";
import PromptCarousel2 from "./PromptCarousel2";

const Prompt1 = () => {
  return (
    <div>
      <Header1
        link="/link@2x.png"
        image="/image@2x.png"
        image1="/image-1@2x.png"
        image2="/image-2@2x.png"
        image3="/image-3@2x.png"
      />

      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border gap-[3.912rem] max-w-full mq450:gap-[1rem] mq825:gap-[1.938rem] mq825:pl-[1.688rem] mq825:box-border">
        <PromptCarousel2 />

        <section className="flex-1 flex flex-row items-start justify-start gap-[6.125rem] max-w-[calc(100%_-_220px)] text-justify text-[1.25rem] text-gray-100 font-assistant mq450:gap-[3.063rem] mq825:max-w-full mq1425:gap-[1.5rem]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[19.068rem] px-[0rem] pb-[0rem] box-border min-w-[47.438rem] max-w-full mq450:pt-[8.063rem] mq450:box-border mq450:min-w-full mq825:pt-[12.375rem] mq825:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.031rem] max-w-full mq450:gap-[3rem] mq825:gap-[6rem] mq1425:gap-[1.5rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.8rem] max-w-full">
                  <div className="w-[30rem] h-[8rem] relative top-[-10rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white box-border w-full h-full cursor-pointer border-[1px] border-solid border-deeppink" />
                    <div className="absolute top-[1.55rem] left-[1.519rem] tracking-[0.04em] leading-[1.375rem] font-semibold z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem] mr-[25px] text-base">
                      I have #FFE0CC skin, #F5D19C hair, and #89CFF0 eyes. Could you recommend makeup products like lipstick, lip gloss, and eye shadow, and suggest some jewelry that would match well.
                    </div>
                  </div>

                  <div className="w-[50rem] h-[38rem] relative top-[-10rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-xl box-border w-full h-full cursor-pointer border-[1px] border-solid border-deeppink bg-whitesmoke" />
                    <div className="absolute top-[1.55rem] left-[1.519rem] tracking-[0.04em] leading-[1.375rem] font-semibold z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem] mr-[25px] text-base">
                      <h3 className="m-0 h-[29.188rem] flex-1 relative text-inherit tracking-[0.04em] leading-[1.25rem] font-semibold font-inherit text-gray-100 flex items-center z-[1] mq1425:text-[1rem] mq1425:leading-[1rem] top-[2rem]">
                        <span>
                          <p className="m-0">Sure! Here’s the recommendation:</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            For your fair skin (#FFE0CC), blonde hair (#F5D19C), and blue eyes, a soft pastel dress, such as a light pink (#FFB6C1) or baby blue (#89CFF0), would be beautiful. For makeup, consider a peachy-pink lipstick (#FFDAB9), a light pink lip gloss (#FFC0CB), and a champagne (#F7E7CE) or rose gold (#B76E79) eye shadow. For jewelry, delicate pieces in rose gold (#B76E79) or silver (#C0C0C0) with pastel gemstones will complement your look perfectly.
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">Products :</p>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>peachy-pink lipstick</li>
                          </ul>
                          <br></br>
                          <div className="m-0 font-inherit text-inherit pl-[1.35rem] bg-black h-[2rem] w-[50%]">
                            https://www.figma.com/design/2nfupdR6VI
                          </div>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>light pink lip gloss</li>
                          </ul>
                          <br></br>
                          <div className="m-0 font-inherit text-inherit pl-[1.35rem] bg-black h-[2rem] w-[50%]">
                            https://www.figma.com/design/2nfupdR6VI
                          </div>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>champagne eye shadow</li>
                          </ul>
                          <br></br>
                          <div className="m-0 font-inherit text-inherit pl-[1.35rem] bg-black h-[2rem] w-[50%]">
                            https://www.figma.com/design/2nfupdR6VI
                          </div>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                            <li>rose gold eye shadow</li>
                          </ul>
                          <br></br>
                          <div className="m-0 font-inherit text-inherit pl-[1.35rem] bg-black h-[2rem] w-[50%]">
                            https://www.figma.com/design/2nfupdR6VI
                          </div>
                        </span>
                      </h3>
                    </div>
                  </div>

                  
                    <TypePrompt
                      arrow="/arrow-11@2x.png"
                      className="mt-[-10rem]"
                   />
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[9.844rem] flex flex-col items-start justify-start pt-[1.437rem] px-[0rem] pb-[0rem] box-border absolute top-0 right-0 z-[-1]">
          <ImageGrid
            shoppingBagFull="/shopping-bag-full@2x.png"
            sunGlasses="/sun-glasses@2x.png"
            shirt="/shirt@2x.png"
            tShirt="/tshirt@2x.png"
            pairOfSneakers="/pair-of-sneakers@2x.png"
            sneakers="/sneakers@2x.png"
          />
        </div>
      </main>
    </div>
  );
};

export default Prompt1;
