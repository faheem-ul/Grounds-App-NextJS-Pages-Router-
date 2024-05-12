import React, { ReactNode, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebaseConfig";

import arrowbackSvg from "../public/arrowback.svg";
import googledownloadSvg from "../public/googledownload.svg";
import appledownloadSvg from "../public/appledonwload.svg";
import { error, log } from "console";
import Signup from "./signup";
import PrivateLayout from "@/components/Layouts/PrivateLayout/PrivateLayout";

function Login() {
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");

  const handleLoginFormSubmit = async () => {
    setLoginError("");
    if (loginEmail === "" || loginPassword === "") {
      alert("Please enter all the fields");
    } else {
      try {
        const loginUserCredentials = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log("login successful");

        router.push("/dashboard");
      } catch (error: any) {
        setLoginError(error.message);
        console.log("error in login", error);
      }
    }
  };

  return (
    <div className=" flex bg-primary mob:flex-col-reverse ">
      <div className=" flex h-[100vh] w-[40%] justify-center py-6 mob:h-[56vh]">
        <div className="flex flex-col justify-center mob:justify-start">
          <h2 className=" pb-[35px] font-bold">Login</h2>
          <div>
            <form
              className="flex flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                {
                  handleLoginFormSubmit();
                }
              }}
            >
              <input
                type="email"
                placeholder="Email"
                className=" text-bold mb-3 w-[400px] rounded-[24px] px-6 py-3 mob:w-[335px] mob:py-3"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className=" text-bold mb-8 w-[400px] rounded-[24px] px-6 py-3 mob:w-[335px] mob:py-3"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />

              <p className=" underline"> Forgot Password</p>
              <p className=" mt-10 text-center text-blackOpacity mob:mt-8 mob:font-medium">
                You donot have an account?{" "}
                <span className="underline ">
                  <Link href="/checkout">Sign Up</Link>
                </span>
              </p>
              <button type="submit" className="mt-4">
                <p className="flex h-[56px]  items-center justify-center rounded-[24px] bg-darkBrown text-[16px] font-medium leading-[24px] text-white">
                  LogIn
                </p>
              </button>
              {loginError && (
                <p className="mt-4 text-center text-[14px] font-normal leading-[18px] text-blackOpacity">
                  {loginError}
                </p>
              )}
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
        className="flex h-[100vh] w-[60%] justify-center rounded-tl-[40px] bg-cover bg-center bg-no-repeat mob:h-[56vh] mob:rounded-tl-[0px] mob:bg-contain mob:bg-top "
      >
        <div className=" absolute left-10 top-8 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[3px] border-opacity-[0.1] ">
          <Link href="/">
            <Image src={arrowbackSvg} alt="arrow back svg" />
          </Link>
        </div>
        <Link href="/">
          <p className=" absolute right-[65px] top-[35px] flex h-[44px] w-[104px] cursor-pointer items-center justify-center rounded-[24px] bg-primary font-medium text-accent mob:hidden">
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

          <div className=" absolute bottom-[100px] z-20 flex gap-5 mob:bottom-[450px]">
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
          className="absolute bottom-[0px] h-[350px] w-[60%] opacity-90 mob:top-[320px] mob:h-[200px] mob:w-full"
        ></div>
      </div>
    </div>
  );
}

export default Login;
Login.privateLayout = function (page: ReactNode) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
