import { useState } from "react";

import Image from "next/image";

// import annaulsvg from "../assets/SVGs/annual.svg";
// import starsvg from "../assets/SVGs/star.svg";
import marksvg from "../../public/star.svg";
import cardimage from "../../public/checkoutCard.png";

function SignupCards() {
  const handlefirstcardExpand = () => {
    setFirstcardExpand(true);
    setSecondcardExpand(false);
  };
  const handlesecondcardExpand = () => {
    setFirstcardExpand(false);
    setSecondcardExpand(true);
  };
  const [firstcardExpand, setFirstcardExpand] = useState(true);
  const [secondcardExpand, setSecondcardExpand] = useState(false);
  return (
    <>
      <div
        className="mb-6 mt-8 flex cursor-pointer rounded-[20px] border-2 border-accentGreen bg-white"
        onClick={handlefirstcardExpand}
      >
        <div className=" w-[433px] py-4 mob:w-[392px]">
          <div className="leading-[18px]my-1 flex items-center px-6 text-sm  font-bold">
            {/* <Image src={annaulsvg} alt="" /> */}
            <p className="text-[14px] font-semibold text-black mob:font-semibold">
              <span className=" font-medium text-accentGreen mob:font-semibold">
                {" "}
                Annual •
              </span>{" "}
              Billed at $99.99 USD/yr
            </p>
          </div>
          <p className="mt-[4px] px-[24px] text-[20px] font-bold leading-[32px] text-black">
            $8.33 <span className="mob:ml-[-3px] mob:text-[14px] "> USD </span>{" "}
            <span className="ml-[-3px]"> /mo </span>
          </p>
          <p className=" mb-[10px] px-[24px] text-[12px] font-bold text-darkBrown mob:my-[8px]">
            All programs included in your subscription
          </p>

          <div className=" mb-3 flex gap-1 px-6">
            {/* <img src={starsvg} alt="" /> */}
          </div>

          {firstcardExpand && (
            <>
              <div className=" no-scrollbar mb-3 mt-3 flex gap-2 overflow-scroll px-6">
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt="card Image"
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Access To All Trainers Programs
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Log or Scan Your Branded Foods
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Comprehensive Period Training
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Access To Our Ground Community
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="mb-6 flex cursor-pointer rounded-[20px] border-2 border-accentGreen bg-white"
        onClick={handlesecondcardExpand}
      >
        <div className="w-[433px] py-4 mob:w-[392px]">
          <div className="leading-[18px]my-1 flex items-center px-6 text-sm  font-bold">
            {/* <Image src={annaulsvg} alt="" /> */}
            <p className="text-[14px] font-semibold text-black mob:font-semibold">
              <span className=" font-medium text-accentGreen mob:font-semibold">
                {" "}
                Annual •
              </span>{" "}
              Billed at $99.99 USD/yr
            </p>
          </div>
          <p className="mt-[4px] px-[24px] text-[20px] font-bold leading-[32px] text-black">
            $8.33 <span className="mob:ml-[-3px] mob:text-[14px] "> USD </span>{" "}
            <span className="ml-[-3px]"> /mo </span>
          </p>
          <p className=" mb-[10px] px-[24px] text-[12px] font-bold text-darkBrown mob:my-[8px]">
            All programs included in your subscription
          </p>

          <div className=" mb-3 flex gap-1 px-6">
            {/* <img src={starsvg} alt="" /> */}
          </div>

          {secondcardExpand && (
            <>
              <div className=" no-scrollbar mb-3 mt-3 flex gap-2 overflow-scroll px-6">
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt="card Image"
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Access To All Trainers Programs
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Log or Scan Your Branded Foods
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Comprehensive Period Training
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className="text-dark-brown left-4 text-[14px] font-semibold mob:text-[12px]">
                  Access To Our Ground Community
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SignupCards;
