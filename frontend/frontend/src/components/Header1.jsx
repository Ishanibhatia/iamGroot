import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header1 = ({ className = "", link, image, image1, image2, image3 }) => {
  const navigate = useNavigate();

  const onAssistantAvatarClick = useCallback(() => {
    navigate("/ai-home-page");
  }, [navigate]);

  return (
    <header
      className={` absolute top-0 left-0 shadow-md bg-white w-full h-20 text-left text-lg text-gray-100 font-assistant ${className}`}
    >
      <div className="flex items-center justify-between h-full px-8">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                className="w-9 h-5 object-cover"
                alt="Logo"
                src={link}
              />
            </a>
          </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <a className="tracking-wide leading-20 uppercase font-bold text-darkslategray text-xs no-underline hover:underline" href="#men">Men</a>
          <a className="tracking-wide leading-20 uppercase font-bold text-darkslategray text-xs no-underline hover:underline" href="#women">Women</a>
          <a className="tracking-wide leading-20 uppercase font-bold text-darkslategray text-xs no-underline hover:underline" href="#kids">Kids</a>
          <a className="tracking-wide leading-20 uppercase font-bold text-darkslategray text-xs no-underline hover:underline" href="#home-living">Home & Living</a>
          <a className="tracking-wide leading-20 uppercase font-bold text-darkslategray text-xs no-underline hover:underline" href="#beauty">Beauty</a>
          <a className="tracking-wide leading-20 uppercase font-bold text-darkslategray text-xs no-underline hover:underline" href="#studio">Studio</a>
          <a className="tracking-wide leading-20 uppercase font-bold text-darkslategray text-xs no-underline hover:underline" href="/">Feed</a>
        </nav>




        {/* Search Bar */}
        <div className="flex items-center">
          <div className="flex items-center bg-whitesmoke border border-whitesmoke px-4 py-2 text-xs w-80 mr-0">
            <input
              type="text"
              className="bg-whitesmoke outline-none flex-grow"
              placeholder="Search for products, brands and more"
            />
            <img
              className="w-4 h-4 object-cover ml-2"
              alt=""
              src={"./Screenshot 2024-07-13 001206.png"}
            />
          </div>
        </div>





        {/* Right Side Items */}
        <div className="flex items-center">
          {/* Myntra AI */}
          <div className="relative flex items-center mr-7">
            <div className="relative w-[3rem] h-[3rem]">
              <div
                className="absolute top-0 left-0 rounded-full bg-gradient-to-b from-[#ff3f6c] to-[#f26a10] w-full h-full cursor-pointer"
                onClick={onAssistantAvatarClick}
              />
              <div className="absolute top-[1rem] left-0 right-0 text-center leading-[1.125rem] font-extrabold text-white z-[1]">
                <span className="text-[0.5rem]">MYNTR</span>
                <span className="text-[1rem]"> AI</span>
              </div>
            </div>
          </div>

          

          {/* Wishlist */}
          <div className="flex items-center space-x-2 mr-7">
            <img
              className="w-4 h-6 object-cover"
              alt=""
              src={image1}
            />
            <a className="text-xs font-bold text-black no-underline hover:underline" href="#wishlist">Wishlist</a>
          </div>

          {/* Bag */}
          <div className="flex items-center space-x-2">
            <img
              className="w-5 h-5 object-cover"
              alt=""
              src={"./image-3@2x.png"}
            />
            <a className="text-xs font-bold text-black no-underline hover:underline" href="#bag">Bag</a>

          </div>


        </div>


      </div>


    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
};

export default Header1;
