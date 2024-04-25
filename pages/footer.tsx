import Link from "next/link";
import Image from "next/image";

import instaSvg from "../public/insta.svg";
import facebookSvg from "../public/facebook.svg";
import youtubeSvg from "../public/youtube.svg";
import dotSvg from "../public/dot.svg";
import appleSvg from "../public/footerApple.svg";
import googlesvg from "../public/footerGoogle.svg";

function Footer() {
  return (
    <div className=" bg-primary pb-5">
      <div className=" flex items-center">
        <div className=" flex w-[35%] flex-col items-center gap-6 border-r-[1px] border-blackOpacity py-8 text-[20px] font-semibold">
          <Link href="/">Home</Link>
          <Link href="/">Support</Link>
          <Link href="/">Terms and Conditions</Link>
          <Link href="/">Privacy Policy</Link>
        </div>

        <div className=" flex  w-[35%] flex-col items-center border-r-[1px] border-blackOpacity py-8">
          <p className=" text-[24px] font-bold leading-[40px] text-darkBrown">
            GROUNDS
          </p>
          <p className=" text-13px max-w-[320px]  pt-8 text-center text-blackOpacity">
            Challenge yourself now to become the best you possible. Get the
            Grounds app!
          </p>
          <div className=" mt-6 flex gap-4 ">
            <Image src={instaSvg} alt="social media svg"></Image>
            <Image src={dotSvg} alt="social medi" />
            <Image src={facebookSvg} alt="social media svg"></Image>
            <Image src={dotSvg} alt="social medi" />
            <Image src={youtubeSvg} alt="social media svg"></Image>
          </div>
        </div>
        <div className=" flex w-[30%] flex-col items-center gap-6">
          <Image src={appleSvg} alt="apple svg"></Image>
          <Image src={googlesvg} alt="google svg"></Image>
        </div>
      </div>
      <div className=" flex flex-col items-center border-b-[1px] border-blackOpacity"></div>
    </div>
  );
}

export default Footer;
