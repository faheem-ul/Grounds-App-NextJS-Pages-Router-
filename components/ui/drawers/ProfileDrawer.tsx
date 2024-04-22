import React, { useState } from "react";
import Image from "next/image";

import editSvg from "../../../public/edit.svg";
import crossSvg from "../../../public/cross.svg";

function ProfileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [Cm, setCm] = useState(false);
  const [feet, setFeet] = useState(true);
  const [kg, setKg] = useState(false);
  const [lb, setLb] = useState(true);
  const [selectedNumber, setSelectedNumber] = useState(3);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const showCmInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFeet(false);
    setCm(true);
  };

  const showFeetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFeet(true);
    setCm(false);
  };
  const showKgInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLb(true);
    setKg(false);
  };
  const showLbInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLb(true);
    setKg(false);
  };

  const handleClick = (number) => {
    setSelectedNumber(number);
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
          <div className="no-scrollbar fixed bottom-0 right-0 z-[50]  block h-[100vh] w-[30%] overflow-y-scroll rounded-tl-[20px] bg-primary py-[40px] mob:bottom-[40%] mob:h-[50vh] mob:w-full ">
            <button
              className="border-[#292D32 hover:bg-gray-200] absolute right-5 top-5  rounded-lg border-2 p-2"
              onClick={toggleContent}
            >
              <Image
                alt="closeIcon"
                src={crossSvg}
                className=" h-[20px] w-[20px]"
              />
            </button>
            <div className="md:hidden absolute left-[50%] top-[8px] block translate-x-[-50%]"></div>
            <div className=" w-full ">
              <div className="flex h-full w-full flex-col justify-center  px-[20px]">
                <p className=" mb-[24px] px-[25px] text-[24px] font-semibold text-darkBrown">
                  Edit My Profile
                </p>
                <form className=" flex w-full flex-col px-[25px]  ">
                  <input
                    type="text"
                    placeholder="Age"
                    name="oldPassword"
                    className="mb-[20px] w-full  rounded-[24px]  px-[25px] py-[16px] text-[14px] font-medium leading-4 outline-black"
                    value=""
                  />

                  <div className="mb-[20px] flex w-full items-center gap-2 rounded-[20px] bg-white">
                    {feet && (
                      <>
                        <input
                          name="cm"
                          type="number"
                          placeholder="Height"
                          className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                          value="0"
                        />

                        <div className="mr-[4px] flex h-[40px] w-[132px] items-center rounded-[20px] bg-primary">
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showCmInput}
                          >
                            Cm
                          </div>
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showCmInput}
                          >
                            Ft
                          </div>
                        </div>
                      </>
                    )}

                    {Cm && (
                      <>
                        <input
                          name="feet"
                          type="number"
                          placeholder="Height"
                          className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                          value="0"
                        />
                        <input
                          name="inches"
                          type="number"
                          placeholder="Height"
                          className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                          value="0"
                        />
                        <div className="mr-[4px] flex h-[40px] w-[132px] items-center rounded-[20px] bg-primary">
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showFeetInput}
                          >
                            Cm
                          </div>
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showCmInput}
                          >
                            Ft
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mb-[20px] flex w-full items-center gap-2 rounded-[20px] bg-white">
                    {lb && (
                      <>
                        <input
                          name="cm"
                          type="number"
                          placeholder="Height"
                          className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                          value="0"
                        />

                        <div className="mr-[4px] flex h-[40px] w-[132px] items-center rounded-[20px] bg-primary">
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showKgInput}
                          >
                            kg
                          </div>
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showKgInput}
                          >
                            lb
                          </div>
                        </div>
                      </>
                    )}

                    {kg && (
                      <>
                        <input
                          name="feet"
                          type="number"
                          placeholder="Height"
                          className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                          value="0"
                        />
                        <input
                          name="inches"
                          type="number"
                          placeholder="Height"
                          className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                          value="0"
                        />
                        <div className="mr-[4px] flex h-[40px] w-[132px] items-center rounded-[20px] bg-primary">
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showLbInput}
                          >
                            Kg
                          </div>
                          <div
                            className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[10px] text-[14px] font-medium leading-4 outline-black"
                            onClick={showLbInput}
                          >
                            lb
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </form>
                <p className=" mb-[24px] px-[20px] text-[24px]  font-semibold text-darkBrown">
                  Goal
                </p>
                <div className=" px-[25px]">
                  <label className="mb-4  flex h-[48px] cursor-pointer items-center justify-between rounded-[24px] bg-white px-[20px]  py-[15px] ">
                    <span>Lose Weight</span>
                    <div className="border-caption h-[15px] w-[15px] rounded-full  border-2"></div>
                  </label>
                  <label className="mb-4 flex h-[48px] cursor-pointer items-center justify-between rounded-[24px] bg-white px-[20px] py-[15px] ">
                    <span>Maintain Weight</span>
                    <div className="border-caption h-[15px] w-[15px] rounded-full  border-2"></div>
                  </label>
                  <label className="mb-4 flex h-[48px] cursor-pointer items-center justify-between rounded-[24px] bg-white px-[20px] py-[15px] ">
                    <span>Gain Weight</span>
                    <div className="border-caption h-[15px] w-[15px] rounded-full  border-2"></div>
                  </label>
                  <label className="mb-4 flex h-[48px] cursor-pointer items-center justify-between rounded-[24px] bg-white px-[20px] py-[15px] ">
                    <span>Just Exploring</span>
                    <div className="border-caption h-[15px] w-[15px] rounded-full  border-2"></div>
                  </label>
                </div>
                <p className="mb-[24px] px-[20px] text-[24px] font-semibold text-darkBrown">
                  Daily Meal Amount
                </p>
                <div>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div
                      className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full text-[12px] font-semibold ${
                        selectedNumber === 3
                          ? "bg-black text-white"
                          : "bg-white text-[#1E2534]"
                      }`}
                      onClick={() => handleClick(3)}
                    >
                      3
                    </div>
                    <div
                      className={`text-caption flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full text-[12px] font-semibold ${
                        selectedNumber === 4
                          ? "bg-black text-white"
                          : "bg-white text-[#1E2534]"
                      }`}
                      onClick={() => handleClick(4)}
                    >
                      4
                    </div>
                    <div
                      className={`text-caption flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full text-[12px] font-semibold ${
                        selectedNumber === 5
                          ? "bg-black text-white"
                          : "bg-white text-[#1E2534]"
                      }`}
                      onClick={() => handleClick(5)}
                    >
                      5
                    </div>
                    <div
                      className={`text-caption flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full text-[12px] font-semibold ${
                        selectedNumber === 6
                          ? "bg-black text-white"
                          : "bg-white text-[#1E2534]"
                      }`}
                      onClick={() => handleClick(6)}
                    >
                      6
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" mt-[16px] flex h-[52px] w-full items-center justify-center rounded-[24px] bg-darkBrown text-[16px] font-medium text-white opacity-100"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileDrawer;
