// import React from "react";
// import bedroomPic from "../Images/wixImage.webp";
import bedroomPic from "../Images/homepage1.jpg";

import homePic2 from "../Images/home_pic.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[40rem] sm:h-[50rem] bg-black/90 sm:px-20 sm:py-10 flex justify-center items-center">
        <div className="relative w-full h-full">
          <img
            src={bedroomPic}
            alt=""
            className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] m-auto sm:h-full hidden1 opacity-70 sm:block"
          />
          <div className="flex flex-col justify-center text-center  leading-tight absolute top-[55%] sm:top-[40%]  left-[50%] -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-white/50 text-[4rem]">Shree</h1>
            <h1 className="text-white/50 text-[4rem]">Mahalaxmi</h1>
            <h1 className="text-white/50 text-[4rem]">Textures</h1>

            <Link
              to="/products"
              className="relative h-10 mt-4 overflow-hidden text-white border-2 border-white group"
            >
              <div className="absolute top-0 w-full h-full transition-transform duration-700 origin-left transform scale-x-0 bg-white/40 group-hover:scale-x-100"></div>
              <div className="flex items-center justify-center h-full">
                Learn More
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center hoverTransition "
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                src={require("../Images/GalleryNewImages/gal_20.jpg")}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center hoverTransition"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                src={require("../Images/GalleryNewImages/gal_13.jpg")}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center hoverTransition"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                src={require("../Images/GalleryNewImages/gal_18.jpg")}
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full  p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center hoverTransition"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                src={require("../Images/GalleryNewImages/gal_16.jpg")}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center hoverTransition"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                src={require("../Images/GalleryNewImages/gal_11.jpg")}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center hoverTransition"
                // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                src={require("../Images/GalleryNewImages/gal_21.jpg")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Form */}
      <section className="flex flex-col items-center justify-center pb-5 my-10 ">
        <h2 className="text-[2rem] mb-5 ">Subscribe Form</h2>
        <div className="flex justify-center">
          <input
            className="border-2 border-black h-[3.5rem] w-[20rem] max-w-[80%] p-3"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <button className="h-[3.5rem] border-2 px-4 border-black text-center text-white text-lg w-2rem bg-black">
            Join
          </button>
        </div>
      </section>

      {/* Home About Section */}
      <section className="group h-[60rem] flex flex-col sm:flex-row  sm:w-[90%]  xl:sm:w-[55%] sm:h-[40rem] overflow-hidden  justify-between items-start m-auto mb-10 gap-4">
        <div className="flex flex-col items-center justify-center flex-1 h-full px-5 pt-10 text-white bg-black rounded-lg">
          <div>
            <h2 className="text-[2rem] sm:text-[3rem] text-center mb-5 font-[300] group-hover:-translate-y-[2rem] transition-all duration-300 group-hover:scale-110  ">
              About Mahalaxmi <br /> Textures
            </h2>
          </div>
          <div className="px-10 text-lg text-center text-white/50">
            As an industry leader, <u>Shree Mahalaxmi Textures</u> offers
            unparalleled expertise and innovative products. With years of
            experience and a commitment to staying ahead of the curve, we
            deliver quality solutions you can trust. Trust{" "}
            <u>Shree Mahalaxmi Textures</u> for the best in manufacturing
            excellence.
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 w-full h-full overflow-hidden rounded-lg">
          <img
            className="h-full transition-transform duration-300 transform sm:w-full group-hover:scale-105"
            src={homePic2}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
