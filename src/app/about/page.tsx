import Image from "next/image";
import { featureInfo } from "../../utils/data";

export default function About() {
  return (
    <section>
      {/* About Our Company */}
      <div className="relative flex items-center justify-center w-full mt-10">
        <div className=" group  sm:h-[30rem] xl:h-[40rem] bg-gray-800 flex flex-col sm:flex-row gap-10 p-10 w-[100%] lg:w-[95%] xl:w-[80%] 2xl:w-[55%]">
          <div className="sm:flex-1 sm:h-auto bg-white h-[20rem] overflow-y-scroll overflow-x-hidden ">
            <h1 className="mt-2 sm:mt-10 text-[2.5rem] font-[200] text-center group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 px-2">
              About Our Company
            </h1>
            <p className="mt-5 text-left text-[1.1rem] font-[200] px-5 xl:mt-20">
              As a leader in our industry, Mahalaxmi Textures possesses a wealth
              of knowledge and expertise that is truly incomparable. We draw on
              the extensive experience we've gained over our years as a top
              Manufacturing Company to provide companies and individuals with
              quality, innovative products they can always count on. In
              addition, we ensure that we stay ahead of the industry curve by
              becoming early adopters of the latest manufacturing techniques and
              technologies. Rest assured that no matter what you need, you can
              rely on Mahalaxmi Textures to provide the absolute best.
            </p>
          </div>
          <div className="overflow-hidden sm:flex-1">
            <Image
              src={require("../../../public/images/aboutImage.webp")}
              alt=""
              className="w-full h-[20rem] sm:h-full transition-transform duration-300 transform  group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <div className="group flex flex-col justify-center items-center mt-10 text-[2.5rem] font-[200]">
          <h1 className="transition-all duration-500 group-hover:scale-105">
            Features
          </h1>
          <div className="relative bottom-0 w-10 h-1 transition-all duration-500 origin-left transform bg-black group-hover:bg-blue-400 group-hover:w-[7rem] "></div>
        </div>
        <div className=" flex flex-col justify-center w-full gap-3 h-[40rem] mx-auto mt-10 mb-10 sm:flex-row container">
          {featureInfo.map((feature, index) => {
            return (
              <div className="pb-5 mx-auto bg-gray-800 w-initial group">
                <div className="overflow-hidden h-[60%]">
                  <Image
                    src={feature.img}
                    alt=""
                    className="w-full h-full mx-auto transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                <div>
                  <div className=" flex flex-col justify-center items-center  text-[2.5rem] font-[200]">
                    <h4 className="text-blue-200 transition-all duration-500 group-hover:scale-110 mt-3 mb-1 text-center text-[1.5rem]  group-hover:-translate-y-1">
                      {feature.name}
                    </h4>
                    <div className="relative bottom-0 h-[0.1rem] transition-all duration-500 origin-left transform bg-white w-7 group-hover:w-20 "></div>
                  </div>
                  <h5 className="mt-5 mb-5 text-blue-200 text-left pl-3 text-[1.2rem] font-[100]  ">
                    {feature.subTitle}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
