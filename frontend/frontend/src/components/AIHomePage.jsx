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
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start gap-[1.512rem] leading-[normal] tracking-[normal]">
      <div className="w-full h-[0.063rem] absolute !m-[0] top-[-220.875rem] right-[0rem] left-[0rem] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.04)] bg-gray-300 shrink-0" />
      <Header1
        link="/link@2x.png"
        image="/image@2x.png"
        image1="/image-11@2x.png"
        image2="/image-22@2x.png"
        image3="/image-32@2x.png"
      />
      <img
        className="w-[4.069rem] h-[4.069rem] absolute !m-[0] top-[29.088rem] right-[5.475rem] shrink-0 object-contain z-[1]"
        alt=""
        src="/denim-shorts@2x.png"
      />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border gap-[3.912rem] max-w-full mq450:gap-[1rem] mq825:gap-[1.938rem] mq825:pl-[1.688rem] mq825:box-border">
        <section className="flex-1 flex flex-row items-start justify-start gap-[6.125rem] max-w-[calc(100%_-_220px)] text-justify text-[1.25rem] text-gray-100 font-assistant mq450:gap-[3.063rem] mq825:max-w-full mq1425:gap-[1.5rem]">
          <PromptCarousel />
          <div className="flex-1 flex flex-col items-start justify-start pt-[19.068rem] px-[0rem] pb-[0rem] box-border min-w-[47.438rem] max-w-full mq450:pt-[8.063rem] mq450:box-border mq450:min-w-full mq825:pt-[12.375rem] mq825:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.031rem] max-w-full mq450:gap-[3rem] mq825:gap-[6rem] mq1425:gap-[1.5rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.8rem] max-w-full">
                  <div className="self-stretch h-[9.981rem] relative">
                    <div
                      className="absolute top-[0rem] left-[0rem] rounded-xl bg-white box-border w-full h-full cursor-pointer border-[1px] border-solid border-deeppink"
                      onClick={onExampleContentClick}
                    />
                    <h3
                      className="m-0 absolute top-[1.55rem] left-[1.519rem] text-inherit tracking-[0.04em] leading-[1.375rem] font-semibold font-inherit flex items-center w-[68.869rem] cursor-pointer z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem]"
                      onClick={onExampleContentClick}
                    >
                      Use this demo prompt to find the perfect dress color that
                      complements your skin tone, hair color, and eye color. It
                      also helps you choose makeup products such as lipstick,
                      lip gloss, and eye shadow that enhance your natural
                      beauty. Additionally, discover jewelry pieces that
                      harmonize with your overall look. By considering your
                      unique features, this prompt ensures you achieve a
                      cohesive and flattering appearance. Whether you're
                      preparing for a special event or a casual outing, this
                      tool guides you in making confident and stylish choices
                      tailored to your individual characteristics.
                    </h3>
                  </div>
                  <div className="self-stretch rounded-xl bg-white box-border flex flex-row items-start justify-start pt-[1.875rem] pb-[1.062rem] pr-[1.437rem] pl-[1.5rem] max-w-full border-[1px] border-solid border-deeppink">
                    <div className="h-[9.981rem] w-[71.906rem] relative rounded-xl bg-white box-border hidden max-w-full border-[1px] border-solid border-deeppink" />
                    <h3 className="m-0 flex-1 relative text-inherit tracking-[0.04em] leading-[1.375rem] font-semibold font-inherit inline-block max-w-full z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
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
                    </h3>
                  </div>
                  <div className="self-stretch h-[5.556rem] relative">
                    <div
                      className="absolute top-[0rem] left-[0rem] rounded-xl bg-white box-border w-full h-full cursor-pointer border-[1px] border-solid border-deeppink"
                      onClick={onRectangleClick}
                    />
                    <div className="absolute top-[1.95rem] left-[1.519rem] tracking-[0.04em] leading-[1.375rem] font-semibold z-[1] mq1425:text-[1rem] mq1425:leading-[1.125rem]">
                      Use this demo prompt to generate gift card templates
                    </div>
                  </div>
                </div>
              </div>
              <TypePrompt arrow="/arrow-11@2x.png" />
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