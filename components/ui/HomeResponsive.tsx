import Image from "next/image";
import Link from "next/link";

import homeImage from "../../public/Screenshot (56).jpg";
import videoSvg from "../../public/video.svg";
import appleHealth from "../../public/applehealth.svg";
import googleHealth from "../../public/googlehealth.svg";
import arrowSvg from "../../public/arrow.svg";
import lineSvg from "../../public/responsiveline.svg";

function HomeResponsive() {
  return (
    <div className="main-div-home-responsive bg-[#e9e5dd] ">
      <div className="relative">
        <h1 className="absolute mt-[20px] pl-5 text-[38px] font-bold text-primary">
          Grounds
        </h1>
        <Image
          className=" h-[70vh] w-full object-cover"
          src={homeImage}
          alt="home image"
        />
        <Image
          className="absolute left-[30%] top-[90%] rounded-b-[27px]"
          src={videoSvg}
          alt="home image"
        />
      </div>
      <div className="mt-[120px]  pl-5">
        <h1 className="text-darkBrown text-[55px] leading-[65px] ">Grounds</h1>
        <h1 className="text-darkBrown text-[55px] leading-[65px]">New Year</h1>
        <h1 className="text-darkBrown text-[55px] leading-[65px]">Challange</h1>
      </div>

      <div className="footer-para-main-div relative mt-[20px] pl-5">
        <p className="text-blackOpacity text-[24px]">
          Register now for the Grounds app
        </p>
        <p className="text-blackOpacity text-[24px] opacity-[0.9]">
          and get{" "}
          <span className="text-20 text-darkBrown font-bold">
            INSTANT ACCESS!
          </span>{" "}
        </p>
        <div className=" absolute left-[32%] ">
          <Image src={lineSvg} alt="lineSvg" />
        </div>

        <div>
          <Link href="/">
            <p className="mt-[30px] flex h-[56px] w-[226px] items-center justify-center rounded-[24px] bg-accentGreen text-[16px] font-medium text-white">
              Start Your Free Trial
              <Image className=" ml-3" src={arrowSvg} alt="arrow" />
            </p>
          </Link>

          <div className="mt-10 flex flex-row items-center gap-4">
            <div className="flex flex-row gap-2">
              <Image className="w-[52px]" src={appleHealth} alt="appleHealth" />
              <Image className="" src={googleHealth} alt="googleHealth" />
            </div>
            <div>
              <p className="text-blackOpacity text-[14px] font-medium">
                Compatible with <br />{" "}
                <span className="text-darkBrown">
                  Apple Health & Google Fit
                </span>
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default HomeResponsive;
