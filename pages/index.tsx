import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

import HomeResponsive from "@/components/ui/HomeResponsive";

import lineSvg from "../public/line.svg";
import arrowSvg from "../public/arrow.svg";
import appleHealth from "../public/applehealth.svg";
import googleHealth from "../public/googlehealth.svg";
import videoSvg from "../public/video.svg";
function Home() {
  return (
    <>
      <div className=" hidden mob:block">
        <HomeResponsive />
      </div>
      <div
        className="main-div h-[100vh] bg-cover mob:hidden"
        style={{ backgroundImage: 'url("/Screenshot (55).png")' }}
      >
        <div className="px-[100px] pt-[35px] ">
          {/* <video
            autoPlay
            loop
            muted
            className=" "
            src="https://firebasestorage.googleapis.com/v0/b/grounds-4c8d1.appspot.com/o/grounds-web%2FWebsite%20Horizontal%20Action%20Shots%20Final%20COMPRESSED%20(no%20sound).mp4?alt=media&token=7a15b1e2-207d-464c-a690-6b13c826853e"
          ></video> */}
          <div className="nav-main-div flex flex-row items-center justify-between rounded-[37px] bg-primary px-[50px] py-[10px] ">
            <Link href="/">
              <h2 className="cursor-pointer font-bold text-accent">GROUNDS</h2>
            </Link>

            <div className="flex flex-row gap-9">
              <Link href="/">
                <p className=" font-medium leading-6 text-accent">Home</p>
              </Link>
              <Link href="/">
                <p className=" font-medium leading-6 text-accent">Coaches</p>
              </Link>
              <Link href="/">
                <p className=" font-medium leading-6 text-accent">Pricing</p>
              </Link>
              <Link href="/">
                <p className=" font-medium leading-6 text-accent">Programmes</p>
              </Link>
              <Link href="/">
                <p className=" font-medium  leading-6 text-accent">Support</p>
              </Link>
            </div>

            <div>
              <Link href="/login">
                <p className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-accent font-semibold leading-6 text-primary">
                  Login
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-row items-center gap-[200px]">
          <div className="main-heading px-[100px] pt-[50px]">
            <h1 className="text-[75px] text-primary">Grounds</h1>
            <h1 className="text-[75px] text-primary">New Year</h1>
            <h1 className="text-[75px] text-primary">Challange</h1>
          </div>
          <Link href="https://firebasestorage.googleapis.com/v0/b/grounds-4c8d1.appspot.com/o/grounds-web%2FWebsite%20Horizontal%20Action%20Shots%20Final%20COMPRESSED%20(no%20sound).mp4?alt=media&token=7a15b1e2-207d-464c-a690-6b13c826853e">
            <Image
              className="absolute left-[53%]"
              src={videoSvg}
              alt="video svg"
            />
          </Link>
        </div>

        <div className="footer-para-main-div px-[100px] pt-[22px]">
          <p className="text-[18px]  text-primary">
            Register now for the Grounds app
          </p>
          <p className="text-[18px] text-primary">
            and get{" "}
            <span className="text-20 font-bold text-primary">
              INSTANT ACCESS!
            </span>{" "}
          </p>
          <div className=" relative left-[5%]">
            <Image src={lineSvg} alt="lineSvg" />
          </div>

          <div>
            <Link href="/">
              <p className="mt-[30px] flex h-[48px] w-[195px] items-center justify-center rounded-[24px] bg-accentGreen text-[14px] font-medium text-white">
                Start Your Free Trial
                <Image src={arrowSvg} alt="arrow" />
              </p>
            </Link>

            <div className="mt-10 flex flex-row items-center gap-4">
              <div className="flex flex-row gap-2">
                <Image className="" src={appleHealth} alt="appleHealth" />
                <Image className="" src={googleHealth} alt="googleHealth" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#A9A4A1]">
                  Compatible with <br />{" "}
                  <span className="text-white">Apple Health & Google Fit</span>
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Home;

Home.footerLayout = function (page: any) {
  return <>{page}</>;
};
