import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AIHomePage from "./components/AIHomePage";
import SocialMediaPage from "./components/SocialMediaPage";
import Prompt1 from "./components/Prompt1";
import Prompt2 from "./components/Prompt2";
import PostPage from "./components/PostPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/social-media-page":
        title = "";
        metaDescription = "";
        break;
      case "/prompt1":
        title = "";
        metaDescription = "";
        break;
      case "/prompt3":
        title = "";
        metaDescription = "";
        break;
      case "/postpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AIHomePage />} />
      <Route path="/social-media-page" element={<SocialMediaPage />} />
      <Route path="/prompt1" element={<Prompt1 />} />
      <Route path="/prompt3" element={<Prompt2 />} />
      <Route path="/postpage" element={<PostPage />} />
    </Routes>
  );
}
export default App;
