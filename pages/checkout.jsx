import React from "react";

import Link from "next/link";
import Image from "next/image";

import SignupCards from "../components/ui/SignupCards";
import TraineeRefered from "../components/ui/TraineeReffered";

import rightLine from "../public/checkoutright.svg";
import appledownloadSvg from "../public/appledonwload.svg";
import googledownloadSvg from "../public/googledownload.svg";
import arrowbackSvg from "../public/arrowback.svg";
import oneSvg from "../public/one.svg";

function Checkout() {
  return (
    <div className=" flex h-screen bg-primary mob:flex-col-reverse ">
      <div className=" flex w-full justify-center overflow-y-scroll py-6 mob:h-[56vh]">
        <div className=" flex flex-col items-center">
          <div class="absolute left-[120px] right-2  top-[160px] block h-[76%] w-0 border border-dashed border-accentGreen mob:hidden "></div>
          <p class="plan-login-text md:block mb-[20px] ml-[20px] mt-[30px] text-[16px] font-normal leading-4 text-blackOpacity mob:mx-[20px]">
            Already have an account?{" "}
            <Link
              href="/login"
              className=" cursor-pointer font-medium text-accentGreen underline"
            >
              Log In
            </Link>
          </p>
          <div className=" mr-[270px] flex items-center  gap-8 ">
            <Image src={oneSvg} alt="one svg" />
            <p className=" text-[20px] font-bold capitalize text-darkBrown mob:ml-0 mob:mt-0 mob:text-[18px]">
              Select subscription plan
            </p>
          </div>
          <SignupCards />
          <TraineeRefered />
          <button type="submit" className="mt-4">
            <Link href="/dashboard">
              <p className="flex h-[56px]  items-center justify-center rounded-[24px] bg-darkBrown text-[16px] font-medium leading-[24px] text-white">
                LogIn
              </p>
            </Link>
          </button>
        </div>
      </div>

      {/*  */}
      {/*  */}
      <div
        style={{
          backgroundImage: "url(/loginImage.png)",
        }}
        className="flex w-full justify-center rounded-tl-[40px] bg-cover bg-center bg-no-repeat mob:h-[56vh] mob:rounded-tl-[0px] mob:bg-contain mob:bg-top "
      >
        <div className=" absolute left-10 top-8 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[3px] border-opacity-[0.1] ">
          <Link href="/">
            {<Image src={arrowbackSvg} alt="arrow back svg" />}
          </Link>
        </div>
        <div>
          <Link href="/">
            <p className=" absolute right-[200px] top-[80px] flex h-[44px] w-[104px] items-center justify-center rounded-[24px] font-bold text-white mob:hidden">
              Home
            </p>
          </Link>
          <Link href="/login">
            <p className=" absolute right-[100px] top-[80px] flex h-[44px] w-[104px] items-center justify-center rounded-[24px] bg-primary font-medium text-accent mob:hidden">
              Login
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="text-center font-extrabold text-primary">
              Start Your 7-Day <br /> Free Trial
            </h1>
            <Image src={rightLine} alt="horizontal Line" />
            <p class="mt-[24px] font-light text-white">
              Register now for the Grounds app and get
              <span class="font-semibold"> INSTANT ACCESS!</span>
            </p>
          </div>

          <div className=" absolute bottom-[100px] z-20 flex gap-5 mob:bottom-[450px]">
            <Image
              src={appledownloadSvg}
              alt="appledownload"
              className="w-[139px]"
            />
            <Image src={googledownloadSvg} alt="googledownload" />
          </div>
        </div>

        {/* <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, hsla(40,32%,93%,0), hsla(40,32%,93%,.63) 50.77%, #f2eee6)",
          }}
          className="absolute bottom-[0px] h-[350px] w-[50%] opacity-90 mob:top-[320px] mob:h-[200px] mob:w-full"
        ></div> */}
      </div>
    </div>
  );
}

export default Checkout;
