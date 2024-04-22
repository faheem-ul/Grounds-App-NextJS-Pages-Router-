import React from "react";

import Link from "next/link";
import Image from "next/image";

import arrowbackSvg from "../public/arrowback.svg";
import appledownloadSvg from "../public/appledonwload.svg";
import googledownloadSvg from "../public/googledownload.svg";
import errorSvg from "../public/error.svg";

function Signup() {
  return (
    <div className=" flex h-screen bg-primary mob:flex-col-reverse ">
      <div className=" flex w-full justify-center overflow-y-scroll py-6 mob:h-[56vh]">
        <div className="flex flex-col ">
          <p className="sticky-login-text  mt-[30px] hidden text-[16px] font-normal leading-4 text-blackOpacity mob:block ">
            Already have an account?{" "}
            <Link
              href="/login"
              className=" cursor-pointer font-medium text-accentGreen underline"
            />
          </p>
          <h2 className=" mt-[95px] pb-[16px] text-[20px] font-semibold mob:mt-[50px]">
            Your Information
          </h2>
          <div className=" mb-[10px] flex items-center gap-3">
            <Image src={errorSvg} alt="error svg" />
            <p className="text-dark-brown  text-[12px] font-normal leading-[26px]">
              You will use this email when signing into the app
            </p>
          </div>
          <div>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="First Name "
                className=" text-bold mb-3 w-[400px] rounded-[24px] px-6 py-3 mob:w-[335px] mob:py-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" text-bold mb-3 w-[400px] rounded-[24px] px-6 py-3 mob:w-[335px] mob:py-3"
              />
              <input
                type="email"
                placeholder="Email"
                className=" text-bold mb-3 w-[400px] rounded-[24px] px-6 py-3 mob:w-[335px] mob:py-3"
              />
              <input
                type="password"
                placeholder="Password"
                className=" text-bold mb-3 w-[400px] rounded-[24px] px-6 py-3 mob:w-[335px] mob:py-3"
              />
              <h2 className=" mt-[32px] pb-[16px] text-[20px] font-semibold">
                Payment Details
              </h2>

              <div>
                <form className="flex flex-col">
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className=" text-bold mb-3 w-[400px] rounded-[24px] px-6 py-3 mob:w-[335px] mob:py-3"
                  />
                  <div className=" flex gap-[10px]">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className=" text-bold mb-8 w-[195px] rounded-[24px] px-6 py-3  mob:py-3"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className=" text-bold mb-8 w-[195px] rounded-[24px] px-6 py-3 mob:py-3"
                    />
                  </div>
                </form>
              </div>

              <p className="sticky-login-text mb-[20px] ml-[0px]  text-[16px] font-normal leading-4 text-blackOpacity mob:mx-[20px]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className=" cursor-pointer font-medium text-accentGreen underline"
                >
                  Log In
                </Link>
              </p>
              <button type="submit" className="mt-4">
                <Link href="/dashboard">
                  <p className="flex h-[56px] items-center justify-center rounded-[24px] bg-accentGreen text-[16px] font-medium leading-[24px] text-white mob:w-[392px]">
                    Start Your Journey
                  </p>
                </Link>
              </button>
              <div className=" mt-[18px] pb-[20px] text-center text-[11px] font-normal leading-[20px] text-blackOpacity">
                At the end of your free trial your subscription will
                automatically
                <br />
                rollover to a $99.99/year subscription billed annually unless
                <br />
                cancelled.
                <br />
                <br />
                Privacy Policy | Terms of service{" "}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      <div
        style={{
          backgroundImage: "url(/loginImage.png)",
        }}
        className="flex h-[100vh] w-full justify-center rounded-tl-[40px] bg-cover bg-center bg-no-repeat mob:h-[56vh] mob:rounded-tl-[0px]    mob:bg-top "
      >
        <div className=" absolute left-10 top-8 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[3px] border-opacity-[0.1] ">
          <Link href="/">
            <Image src={arrowbackSvg} alt="arrow back svg" />
          </Link>
        </div>
        <Link href="/">
          <p className=" absolute right-[100px] top-[80px] flex h-[44px] w-[104px] items-center justify-center rounded-[24px] bg-primary font-medium text-accent mob:hidden">
            Home
          </p>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="text-[54px] font-bold uppercase text-primary">
              Grounds
            </p>
            <p className="text-center leading-6 text-primary ">
              Your new training grounds
            </p>
          </div>

          <div className=" absolute bottom-[100px] z-20 flex gap-5 mob:bottom-[450px] mob:hidden">
            <Image
              src={appledownloadSvg}
              alt="appledownload"
              className="w-[139px]"
            />
            <Image src={googledownloadSvg} alt="googledownload" />
          </div>
        </div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, hsla(40,32%,93%,0), hsla(40,32%,93%,.63) 50.77%, #f2eee6)",
          }}
          className="absolute bottom-[0px] h-[350px] w-[50%] opacity-90 mob:top-[320px] mob:h-[200px] mob:w-full"
        ></div>
      </div>
    </div>
  );
}

export default Signup;
