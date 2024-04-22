import React, { useState } from "react";
import Image from "next/image";

import editSvg from "../../../public/edit.svg";
import crossSvg from "../../../public/cross.svg";
import tickSvg from "../../../public/tick.svg";
import greentick from "../../../public/greentick.svg";

function PlanDrawer() {
  const [isOpen, setIsOpne] = useState<Boolean>(false);
  const [annaully, setAnnual] = useState<Boolean>(false);
  const [monthly, setMonthly] = useState<Boolean>(true);

  const toggleContent = () => {
    setIsOpne(!isOpen);
  };

  const handleAnnualCard = () => {
    setAnnual(true);
    setMonthly(false);
  };

  const handleMonthlyCard = () => {
    setAnnual(false);
    setMonthly(true);
  };
  return (
    <div className="">
      <Image src={editSvg} alt="EDIT" onClick={toggleContent} className="" />
      {isOpen && (
        <>
          <div
            className="fixed right-0 top-0 h-full w-full bg-black opacity-50"
            onClick={toggleContent}
          ></div>
          <div className=" no-scrollbar fixed bottom-0 right-0 z-[50] flex h-[100vh] w-[30%] justify-center  overflow-y-scroll  rounded-tl-[20px] bg-primary px-5 py-[40px] mob:bottom-[40%] mob:h-[50vh] mob:w-full mob:rounded-[24px] ">
            <button className="border-[#292D32 hover:bg-gray-200] absolute right-5 top-5  rounded-lg border-2 p-2">
              <Image
                alt="closeIcon"
                src={crossSvg}
                onClick={toggleContent}
                className=" h-[20px] w-[20px]"
              />
            </button>
            <div className="absolute left-[50%] top-[8px]"></div>
            <div className="flex h-full w-full flex-col">
              <div className="">
                <p className=" mb-4 px-[25px] text-[22px] font-bold">
                  Unlock Your Potential
                </p>
                <p className=" text-center text-blackOpacity">
                  Select a subscription plan to unlock all of our premium
                  features inside the Grounds app
                </p>
              </div>

              <div
                onClick={handleAnnualCard}
                className={`cursor-pointer rounded-[20px] border-2 border-[#F2EEE6] bg-primary p-5 ${
                  annaully ? " bg-primary" : "bg-white"
                }`}
              >
                <div className="flex h-[24px] w-[126px] items-center justify-center rounded-[6px] bg-white shadow-xl">
                  <p className=" text-[8px] font-bold text-accentGreen">
                    BEST VALUE • 60% OFF
                  </p>
                </div>
                <p className=" mt-[15px] text-[14px] font-bold text-darkBrown">
                  Annual Membership
                </p>
                <p className=" mt-[5px] text-[12px] font-semibold text-blackOpacity">
                  $8.33/PER MONTH
                </p>
                <p className="mt-[8px] w-[285px] text-[12px] font-normal text-blackOpacity">
                  At the end of your trial you will automatically rollover to a
                  $99.99/year subscription billed annually unless cancelled.
                </p>
                {annaully && (
                  <>
                    <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
                    <div className=" flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Access To All Trainers Programs
                      </p>
                    </div>
                    <div className=" mt-[12px] flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Log or scan your Branded Foods
                      </p>
                    </div>
                    <div className=" mt-[12px] flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Comprehensive Period Tracking
                      </p>
                    </div>
                    <div className=" mt-[12px] flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Accessour Grounds Community
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div
                onClick={handleMonthlyCard}
                className={`mt-5 cursor-pointer rounded-[20px] border-2 border-[#F2EEE6] bg-primary p-5 ${
                  monthly ? " bg-primary" : "bg-white"
                }`}
              >
                <div className=" flex justify-between">
                  <p className=" mt-[0px] text-[14px] font-bold text-darkBrown">
                    Monthly Membership
                  </p>
                  <Image src={greentick} alt="green tic" />
                </div>
                <p className=" mt-[5px] text-[12px] font-semibold text-blackOpacity">
                  $19.19/PER MONTH
                </p>
                <p className="mt-[8px] w-[285px] text-[12px] font-normal text-blackOpacity">
                  At the end of your trial you will automatically rollover to a
                  $99.99/year subscription billed annually unless cancelled.
                </p>

                {monthly && (
                  <>
                    <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
                    <div className=" flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Access To All Trainers Programs
                      </p>
                    </div>
                    <div className=" mt-[12px] flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Log or scan your Branded Foods
                      </p>
                    </div>
                    <div className=" mt-[12px] flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Comprehensive Period Tracking
                      </p>
                    </div>
                    <div className=" mt-[12px] flex items-center gap-2">
                      <Image src={tickSvg} alt="tick"></Image>
                      <p className="text-[14px] font-bold text-[#1E2534]">
                        Accessour Grounds Community
                      </p>
                    </div>
                  </>
                )}
              </div>
              <button
                type="submit"
                className=" mb-4 mt-[16px] flex h-[52px] w-full items-center justify-center rounded-[24px] bg-darkBrown py-[30px] text-[16px] font-medium text-white opacity-100"
              >
                Update
              </button>
              <p className="text-dark-brown mt-[10px] cursor-pointer text-center text-[14px] font-medium">
                Cancel Subscription
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PlanDrawer;
