import { useCallback } from "react";
import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import UserAvatars1 from "../components/UserAvatars1";
import UserAvatars from "../components/UserAvatars";
import AdditionalStories from "../components/AdditionalStories";
import PostContent from "../components/PostContent";

const SocialMediaPage = () => {
  const onFEEDTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='engagementDivider']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div >

      {/* <img
          className="absolute top-[176.994rem] left-[0rem] w-[120rem] h-[51.05rem] object-cover"
          alt=""
          src="/image-1@2x.png"
        /> */}

      <Header
        link="/link@2x.png"
        image="/image@2x.png"
        image1="/image-1@2x.png"
        image2="/image-2@2x.png"
        image3="/image-3@2x.png"
      />


      <section className="absolute top-[8.019rem] left-[25%] right-0 mr-[3rem] flex flex-col items-start justify-start gap-[0.425rem] text-left text-[1.25rem] text-gray-100 font-assistant">
        <a className="[text-decoration:none] relative leading-[5rem] font-bold text-[inherit] inline-block min-w-[4.313rem]">
          STORIES
        </a>
        <div className="w-full flex flex-row flex-wrap items-end justify-start gap-[1.743rem]">
          <FrameComponent2
            image2="image-5@2x.png"
            previewAvatar="/ellipse-2@2x.png"
            userName="User1"
          />
          <FrameComponent2
            image2="image-5@2x.png"
            previewAvatar="/ellipse-2@2x.png"
            userName="User2"
          />
          <FrameComponent2
            image2="image-5@2x.png"
            previewAvatar="/ellipse-2@2x.png"
            userName="User3"
          />
          <FrameComponent2
            image2="image-5@2x.png"
            previewAvatar="/ellipse-2@2x.png"
            userName="User4"
          />
          <FrameComponent2
            image2="image-5@2x.png"
            previewAvatar="/ellipse-2@2x.png"
            userName="User5"
          />
          {/* Hidden by default, shown on large screens */}
          <FrameComponent2
            className="hidden between1500And2000:block"
            image2="image-5@2x.png"
            previewAvatar="/ellipse-2@2x.png"
            userName="User6"
          />
          <FrameComponent2
            className="hidden between1700And2000:block"
            image2="image-5@2x.png"
            previewAvatar="/ellipse-2@2x.png"
            userName="User6"
          />

          {/* Icon */}
          <img
            className="absolute top-[12.019rem] bottom-0 right-0 transform translate-x-[25%] -translate-y-1/2 w-auto h-auto max-w-full max-h-full object-cover"
            alt=""
            src="/plus-41@2x.png"
          />

        </div>
      </section>



      <PostContent />
    </div>
  );
};

export default SocialMediaPage;