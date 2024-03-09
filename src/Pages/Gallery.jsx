import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery1 from "../Images/gallery1.webp";

const Gallery = () => {
  return (
    <div className="bg-[#d8c1dd]/50 py-10 ">
      <div className="w-full px-10 pt-10 ">
        <section className="flex flex-wrap xl:w-[70%] mx-auto">
          <div className=" w-[100%]  bg-white md:w-[30%]  ">
            <img src={Gallery1} alt="." className="w-full h-full sm:w-fit" />
          </div>
          <div className=" w-[100%] bg-white md:w-[70%]  ">
            <div className="pt-10 pl-10 text-[2rem]">Gallery</div>
            <div className="px-10 pt-10 text-[1.2rem] font-thin">
              This is your Project Page. It's a great opportunity to help
              visitors understand the context and background of your latest
              work. Double click on the text box to start editing your content
              and make sure to add all the relevant details you want to share.
            </div>
          </div>
        </section>

        <section className="mt-2 mb-10  xl:max-w-[50%] mx-auto pb-10">
          <div className="flex flex-wrap items-center justify-center gap-7 p-7">
            {/* <img src={GalleryMain1} alt="" />
            <img src={GalleryMain2} alt="" />
            <img src={GalleryMain3} alt="" />
            <img src={GalleryMain4} alt="" />
            <img src={GalleryMain5} alt="" />
            <img src={GalleryMain6} alt="" />
            <img src={GalleryMain7} alt="" />
            <img src={GalleryMain8} alt="" /> */}
          </div>
          <div className="w-[80%] mx-auto text-black bg-slate-100/30 py-10 rounded-lg shadow-xl">
            <Carousel
              howArrows={true}
              autoPlay={true}
              showStatus={false}
              infiniteLoop={true}
              interval={5000}
              renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                  <div
                    className={`${
                      hasPrev ? "absolute" : "hidden"
                    } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <div className="text-white w-9 h-9">
                      <svg viewBox="0 0 448 512">
                        <path d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z" />
                      </svg>
                    </div>
                  </div>
                );
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                  <div
                    className={`${
                      hasNext ? "absolute" : "hidden"
                    } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <div className="text-white w-9 h-9">
                      <svg viewBox="0 0 448 512">
                        <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z" />
                      </svg>
                    </div>
                  </div>
                );
              }}
              showThumbs={false}
            >
              {/* {productInfo.map((product, index) => {
                return (
                  <div>
                    <img
                      className="max-w-[30rem] rounded-2xl shadow-lg "
                      src={product.img}
                      alt=""
                    />
                  </div>
                );
              })} */}
              {Array.from(Array(23).keys()).map((number) => {
                console.log(number);
                return (
                  <div className="flex items-center justify-center h-full pb-10">
                    <img
                      className="max-w-[30rem] max-h-[40rem] rounded-2xl shadow-lg my-5 borderBlack"
                      src={require(`../Images/GalleryNewImages/gal_${
                        number + 1
                      }.jpg`)}
                      alt=""
                    />
                  </div>
                );
              })}
            </Carousel>
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
        </section>
      </div>
    </div>
  );
};

export default Gallery;
