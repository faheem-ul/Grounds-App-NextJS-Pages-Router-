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
      className="main-div h-[100vh] bg-cover"
      style={{ backgroundImage: 'url("/Screenshot (55).png")' }}
    >
      <div className="px-[100px] pt-[35px] ">
        <div className="nav-main-div flex flex-row items-center justify-between rounded-[37px] bg-primary px-[50px] py-[10px] ">
          <div>
            <h2 className="font-bold text-accent">GROUNDS</h2>
          </div>

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
            <Link href="/">
              <p className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-accent font-semibold leading-6 text-primary">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-heading px-[100px] pt-[50px]">
        <h1 className="text-[75px] text-primary">Grounds</h1>
        <h1 className="text-[75px] text-primary">New Year</h1>
        <h1 className="text-[75px] text-primary">Challange</h1>
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
  );
}

export default Home;
