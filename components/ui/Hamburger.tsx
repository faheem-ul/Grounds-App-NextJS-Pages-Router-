import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import hamburgerSvg from "../../public/hamburger.svg";
import crossSvg from "../../public/cross.svg";
import instaSvg from "../../public/insta.svg";
import facebookSvg from "../../public/facebook.svg";
import youtubeSvg from "../../public/youtube.svg";
import dotSvg from "../../public/dot.svg";
import appleDownloadSvg from "../../public/appledonwload.svg";
import googleDownloadSvg from "../../public/googledownload.svg";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Image
        src={hamburgerSvg}
        alt="hamburgerSvg"
        onClick={toggleDrawer}
        className="absolute left-[88%] top-[5%]"
      />

      {isDrawerOpen && (
        <div className="absolute z-10 h-[100vh] w-screen bg-[#F2EEE6]">
          <div className="flex items-center justify-between border-b px-4 py-4">
            <p className="text-dark-brown text-[28px] font-bold leading-[28px]">
              GROUNDS
            </p>
            <Image
              src={crossSvg}
              alt="cross svg"
              onClick={toggleDrawer}
              className=" h-[40px] w-[50px]"
            />
          </div>
          <div className="mt-[61px] px-5">
            <div className="flex flex-col gap-[35px]">
              <Link
                href="/"
                className=" text-darkBrown text-[26px] font-semibold leading-[28px]"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-darkBrown  text-[26px] font-semibold leading-[28px]"
              >
                Coaching
              </Link>
              <Link
                href="/"
                className="text-darkBrown text-[26px] font-semibold leading-[28px]"
              >
                Prices
              </Link>
              <Link
                href="/"
                className="text-darkBrown  text-[26px] font-semibold leading-[28px]"
              >
                Programmes{" "}
              </Link>
              <Link
                href="/"
                className="text-darkBrown text-[26px] font-semibold leading-[28px]"
              >
                Support
              </Link>
            </div>
            <div>
              <Link href="/">
                <p className="bg-darkBrown mt-[50px] flex h-[56px] items-center justify-center rounded-[24px] text-[16px] font-medium leading-[24px] text-white">
                  Get Started
                </p>
                <p className="text-blackOpacity mt-[16px] text-center text-[14px] font-normal leading-[18px]">
                  Already have an account?{" "}
                  <span className="text-darkBrown underline ">
                    <Link href="/">Log In</Link>
                  </span>
                </p>
              </Link>
            </div>
            <div className="border-caption my-0 mb-[32px] mt-[32px] w-full border-t-[0.5px] opacity-50"></div>
            <div className=" mt-[22px] flex items-center justify-center gap-[15px]">
              <Image src={instaSvg} alt="instasvg"></Image>
              <Image src={dotSvg} alt="dotscg"></Image>
              <Image src={facebookSvg} alt="facebookSvg"></Image>
              <Image src={dotSvg} alt="dotscg"></Image>
              <Image src={youtubeSvg} alt="youtubeSvg"></Image>
            </div>
            <div className=" mt-[22px] flex items-center justify-center gap-5">
              <Image src={appleDownloadSvg} alt="appledonwload svg"></Image>
              <Image src={googleDownloadSvg} alt="googleDownload svg"></Image>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
