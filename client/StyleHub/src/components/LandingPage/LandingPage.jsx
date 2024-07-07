import React from "react";
import Images from "./data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../Navbar/Navbar";
const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      {/* <Navbar/> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="">
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        {Images.Section1.map((image, index) => (
          <div
            key={index}
            className="h-96 w-screen flex flex-row items-center justify-start flex-wrap"
            style={{
              backgroundImage: `url(${image.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-10 lg:mx-20">
              <div className="font-mono text-7xl">{image.text1}</div>
              <div className="fomt-sans text-4xl">{image.text2}</div>
              <div
                className="font-serif text-base m-4 p-2 bg-slate-900 text-white"
                onClick={image.btnLink}
              >
                {image.btnText}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="w-screen my-10 flex flex-col md:flex-row justify-center items-center">
      {Images.Section2.map((collection) => (
        <div
          className="h-48 w-96 mb-3 md:mb-0 md:w-80 mx-1"
          style={{
            backgroundImage: `url(${collection.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="h-44 m-2 flex flex-row items-center justify-center border-2 border-black">
            <div className="font-mono text-2xl text-slate-100 font-bold">
              {collection.text1} {collection.text2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Section3 = () => {
  return (
    <div>
      <div className="w-full text-center">
        <p className="font-mono font-bold md:text-4xl underline underline-offset-8">
          New Arrivals
        </p>
        <div className="flex flex-row overflow-x-scroll no-scrollbar">
          {Images.Section3.map((item) => (
            <div className="block m-1 w-56 flex-none bg-red-50 p-1">
              <img src={item.image} className="h-64 w-56 cover" />
              <div className="text-left">
                {/* <div className="">{item.text1}</div> */}
                <div className="font-sans mt-4 -mb-1">{item.text2}</div>
                <div className="font-mono">Rs. {item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="w-full my-5 flex flex-col items-center ">
      <div
        className="h-64 md:h-80 w-96 md:w-3/5 mx-1 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${Images.Section4[0].image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div className="mt-32 flex flex-col items-center justify-center">
          <div className="font-mono text-3xl md:text-5xl text-slate-800">
            {Images.Section4[0].text1}
          </div>
          <div className="fomt-sans text-1xl md:text-3xl text-neutral-100">
            {Images.Section4[0].text2}
          </div>
          <div
            className="font-serif text-base w-32 m-4 p-2 bg-slate-900 text-white text-center"
            onClick={Images.Section4[0].link}
          >
            {Images.Section4[0].btnText}
          </div>
        </div>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className="mb-10 text-center">
      <p className="font-mono font-bold md:text-4xl underline underline-offset-8 my-10">
          Collections
        </p>
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        {Images.Section5.map((pairs, index) => (
          <div className="w-full flex flex-row items-center justify-around">
            {pairs.map((image, index) => (
              <div
                key={index}
                className="h-52 md:h-96 w-2/5 flex flex-row items-center justify-start flex-wrap"
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="mt-10 w-full h-full flex flex-col items-center justify-center">
                  <div className="font-mono text-xl md:text-3xl font-bold text-black">{image.text1}</div>
                  {/* <div className="fomt-sans text-4xl">{image.text2}</div> */}
                  <div
                    className="font-serif text-base m-4 p-2 bg-slate-900 text-white"
                    onClick={image.btnLink}
                  >
                    {image.btnText}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default LandingPage;
