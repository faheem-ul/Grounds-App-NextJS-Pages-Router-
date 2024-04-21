import { useState } from "react";

import Image from "next/image";

// import annaulsvg from "../assets/SVGs/annual.svg";
// import starsvg from "../assets/SVGs/star.svg";
import marksvg from "../public/star.svg";
import cardimage from "../public/checkoutCard.png";

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
        className="mb-6 flex cursor-pointer rounded-[20px] border-2 border-[#ff7565] bg-[#161626]"
        onClick={handlefirstcardExpand}
      >
        <div className="py-4">
          <div className="leading-[18px]my-1 flex items-center px-6 text-sm  font-bold">
            {/* <Image src={annaulsvg} alt="" /> */}
            <p className=" ml-2 font-extrabold uppercase text-white">Annual</p>
          </div>
          <p className="my-1 px-6 text-sm font-semibold uppercase leading-[18px] text-[#98A7C3]">
            $9.99 USD/Per Month • BILLED ANNUALLY
          </p>
          <p className=" mt-2 px-6 text-xs font-normal leading-[18px] text-[#98A7C3]">
            At the end of your 30 day trial your subscription will automatically
            rollover to a $119.99/year subscription billed annually unless
            cancelled.
          </p>
          <div className=" mb-3 mt-3 flex gap-1 px-6">
            {/* <img src={starsvg} alt="" /> */}
            <p className="font-medium text-white">RECOMMENEDED</p>
          </div>
          <div className="mx-6 my-1 h-px border-0 bg-gray-200 "></div>
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
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white ">
                  Choose Over 10 Million Branded Foods
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white  ">
                  Choose Over 10 Million Branded Foods
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white   ">
                  Wide Variety Of Delicious Recipes
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white   ">
                  Access To Our Exclusive Community
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="mb-6 flex cursor-pointer rounded-[20px] border-2 border-[#ff7565] bg-[#161626]"
        onClick={handlesecondcardExpand}
      >
        <div className="py-4">
          <div className="leading-[18px]my-1 flex items-center px-6 text-sm  font-bold">
            {/* <img src={annaulsvg} alt="" /> */}
            <p className=" ml-2 font-extrabold uppercase text-white">Annual</p>
          </div>
          <p className="my-1 px-6 text-sm font-semibold uppercase leading-[18px] text-[#98A7C3]">
            $9.99 USD/Per Month • BILLED ANNUALLY
          </p>
          <p className=" mt-2 px-6 text-xs font-normal leading-[18px] text-[#98A7C3]">
            At the end of your 30 day trial your subscription will automatically
            rollover to a $119.99/year subscription billed annually unless
            cancelled.
          </p>
          <div className=" mb-3 mt-3 flex gap-1 px-6">
            {/* <Image src={starsvg} alt="" /> */}
            <p className="font-medium text-white">RECOMMENEDED</p>
          </div>
          <div className="mx-6 my-1 h-px border-0 bg-gray-200 "></div>
          {secondcardExpand && (
            <>
              <div className=" no-scrollbar mb-3 mt-3 flex gap-2 overflow-scroll px-6">
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
                <Image
                  className=" h-[84px] w-[84px] rounded-2xl object-cover"
                  src={cardimage}
                  alt=""
                />
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white ">
                  Choose Over 10 Million Branded Foods
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white  ">
                  Choose Over 10 Million Branded Foods
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white   ">
                  Wide Variety Of Delicious Recipes
                </p>
              </div>
              <div className="mb-2 flex items-center gap-1 px-6 ">
                <Image src={marksvg} alt="" />
                <p className=" text-sm font-bold capitalize  leading-[18px] tracking-[-5%] text-white   ">
                  Access To Our Exclusive Community
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
