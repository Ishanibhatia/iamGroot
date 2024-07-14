import { useCallback } from "react";
import Header1 from "../components/Header1";
import PromptCarousel from "../components/PromptCarousel";
import { useNavigate } from "react-router-dom";
import TypePrompt from "../components/TypePrompt";
import ImageGrid from "../components/ImageGrid";

const AIHomePage = () => {
  const navigate = useNavigate();

  const onExampleContentClick = useCallback(() => {
    navigate("/prompt1");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/prompt3");
  }, [navigate]);

  return (
    <div>

      <Header1
        link="/link@2x.png"
        image="/image@2x.png"
        image1="/image-1@2x.png"
        image2="/image-2@2x.png"
        image3="/image-3@2x.png"
      />
      {/* <img
        className="w-[4.069rem] h-[4.069rem] absolute !m-[0] top-[29.088rem] right-[5.475rem] shrink-0 object-contain z-[1]"
        alt=""
        src="/denim-shorts@2x.png"
      /> */}



      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border gap-[3.912rem] max-w-full mq450:gap-[1rem] mq825:gap-[1.938rem] mq825:pl-[1.688rem] mq825:box-border ">


        <section className=" flex-1 flex flex-row items-start justify-start gap-[6.125rem] max-w-[calc(100%_-_220px)] text-justify text-[1.25rem] text-gray-100 font-assistant mq450:gap-[3.063rem] mq825:max-w-full mq1425:gap-[1.5rem]">


          <PromptCarousel />


          <div className=" flex-1 flex flex-col items-start justify-start pt-[19.068rem] px-[0rem] pb-[0rem] box-border min-w-[47.438rem] max-w-full mq450:pt-[8.063rem] mq450:box-border mq450:min-w-full mq825:pt-[12.375rem] mq825:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.031rem] max-w-full mq450:gap-[3rem] mq825:gap-[6rem] mq1425:gap-[1.5rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.8rem] max-w-full ">


                  <div className="self-stretch h-[11rem] relative top-[-5rem]">
                    <div
                      className="absolute top-[0rem] left-[0rem] rounded-xl bg-white box-border w-full h-full cursor-pointer border-[1px] border-solid border-deeppink"
                      onClick={onExampleContentClick}
                    />
                    <div className="absolute top-[1.55rem] left-[1.519rem] tracking-[0.04em] leading-[1.375rem] font-semibold z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem] mr-[25px] text-base">
                      Use this demo prompt to find the perfect dress color that complements your skin tone, hair color, and eye color. It also helps you choose makeup products such as lipstick, lip gloss, and eye shadow that enhance your natural beauty. Additionally, discover jewelry pieces that harmonize with your overall look. By considering your unique features, this prompt ensures you achieve a cohesive and flattering appearance. Whether you're preparing for a special event or a casual outing, this tool guides you in making confident and stylish choices tailored to your individual characteristics.
                    </div>
                  </div>
                  <div className="self-stretch h-[11rem] relative top-[-5rem]">
                    <div
                      className="absolute top-[0rem] left-[0rem] rounded-xl bg-white box-border w-full h-full cursor-pointer border-[1px] border-solid border-deeppink"
                      onClick={onExampleContentClick}
                    />
                    <div className="absolute top-[1.55rem] left-[1.519rem] tracking-[0.04em] leading-[1.375rem] font-semibold z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem] mr-[25px] text-base">
                    Use this demo prompt to generate a suitable dress with our
                      AI, tailored to your specific preferences. Input your body
                      type—whether it's hourglass, triangle, or apple—and the
                      fit you desire, such as baggy or slim fit. Choose your
                      preferred color for the outfit, and our AI will match your
                      idea to recommend something perfect for you on Myntra.
                      This tool helps you find a dress that flatters your body
                      shape, meets your style preferences, and is available on
                      Myntra, ensuring you look and feel your best for any
                      occasion.
                    </div>
                  </div>
                  <div className="self-stretch h-[5.556rem] relative top-[-5rem]">
                    <div
                      className="absolute top-[0rem] left-[0rem] rounded-xl bg-white box-border w-full h-full cursor-pointer border-[1px] border-solid border-deeppink"
                      onClick={onExampleContentClick}
                    />
                    <div className="absolute top-[1.55rem] left-[1.519rem] tracking-[0.04em] leading-[1.375rem] font-semibold z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem] mr-[25px] text-base">
                    Use this demo prompt to generate gift card templates
                    </div>
                  </div>
                  <TypePrompt arrow="/arrow-11@2x.png" />
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
        <div className="w-[9.844rem] flex flex-col items-start justify-start pt-[1.437rem] px-[0rem] pb-[0rem] box-border mq825:hidden">
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

export default AIHomePage;