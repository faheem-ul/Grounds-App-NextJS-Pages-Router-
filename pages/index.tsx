import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

import lineSvg from "../public/line.svg";
import arrowSvg from "../public/arrow.svg";
import appleHealth from "../public/applehealth.svg";
import googleHealth from "../public/googlehealth.svg";
function Home() {
  return (
    <div
      className="main-div h-[100vh] w-full bg-black bg-cover"
      style={{ backgroundImage: 'url("/Screenshot (55).png")' }}
    >
      <div className="px-[100px] pt-[35px] ">
        <div className="nav-main-div flex flex-row items-center justify-between rounded-[37px] bg-primary px-[60px] py-[10px] ">
          <div>
            <h1 className="text-h2 font-bold text-secondary">GROUNDS</h1>
          </div>

          <div className="flex flex-row gap-9">
            <Link href="/">
              <p className="text-p font-medium leading-6 text-secondary">
                Home
              </p>
            </Link>
            <Link href="/">
              <div className="text-p font-medium leading-6 text-secondary">
                Coaches
              </div>
            </Link>
            <Link href="/">
              <div className="text-p font-medium leading-6 text-secondary">
                Pricing
              </div>
            </Link>
            <Link href="/">
              <div className="text-p font-medium leading-6 text-secondary">
                Programmes
              </div>
            </Link>
            <Link href="/">
              <div className="text-p font-medium leading-6 text-secondary">
                Support
              </div>
            </Link>
          </div>

          <div>
            <Link href="/">
              <div className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-accent text-p font-semibold leading-6 text-primary">
                Login
              </div>
            </Link>
          </div>
        </div>
      </div>

      <button className="mx-4 bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>

      <div className="main-heading px-[100px] pt-[70px]">
        <div className="text-[75px] text-h1 font-bold text-primary">
          Grounds
        </div>
        <div className="text-[75px] text-h1 font-bold text-primary">
          New Year
        </div>
        <div className="text-[75px] text-h1 font-bold text-primary">
          Challange
        </div>
      </div>

      <div className="footer-para-main-div px-[100px] pt-[22px]">
        <div className="text-[18px] font-normal text-primary">
          Register now for the Grounds app
        </div>
        <div className="text-[18px] font-normal text-primary">
          and get{" "}
          <span className="text-20 font-bold text-primary">
            INSTANT ACCESS!
          </span>{" "}
        </div>
        <div className=" relative left-[5%]">
          <Image src={lineSvg} alt="lineSvg" />
        </div>

        <div>
          <Link href="/">
            <div className="mt-[30px] flex h-[52px] w-[226px] items-center justify-center rounded-[24px] bg-accentGreen text-[14px] font-medium text-white">
              Start Your Free Trial
              <Image src={arrowSvg} alt="arrow" />
            </div>
          </Link>

          <div className="mt-5 flex flex-row items-center gap-4">
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
  );
}

export default Home;
