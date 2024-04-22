import React, { useState } from "react";
import Image from "next/image";

import editSvg from "../../../public/edit.svg";
import crossSvg from "../../../public/cross.svg";

function AccountDrawer() {
  const [isOpen, setIsOpne] = useState<Boolean>(false);

  const toggleContent = () => {
    setIsOpne(!isOpen);
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
          <div className=" fixed bottom-0 right-0 z-[50] block  h-[100vh]  w-[30%] rounded-[20px] bg-primary py-[40px] mob:bottom-[40%] mob:h-[50vh] mob:w-full ">
            <button className="border-[#292D32 hover:bg-gray-200] absolute right-5 top-5  rounded-lg border-2 p-2">
              <Image
                alt="closeIcon"
                src={crossSvg}
                onClick={toggleContent}
                className=" h-[20px] w-[20px]"
              />
            </button>
            <div className="md:hidden absolute left-[50%] top-[8px] block translate-x-[-50%]"></div>
            <div className="h-full w-full">
              <div className="flex h-full w-full flex-col justify-center">
                <p className=" mb-4 px-[25px] text-[22px] font-bold">
                  Edit My Account
                </p>
                <form className=" flex w-full flex-col px-[20px]  ">
                  <input
                    type="password"
                    placeholder="Enter Old Password"
                    name="oldPassword"
                    className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[16px] text-[14px] font-medium leading-4 outline-black"
                    value=""
                  />
                  <input
                    type="password"
                    placeholder="Enter New Password"
                    name="newPassword"
                    className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[16px] text-[14px] font-medium leading-4 outline-black"
                    value=""
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    name="confirmPassword"
                    className="mb-[12px] w-full  rounded-[24px]  px-[25px] py-[16px] text-[14px] font-medium leading-4 outline-black"
                    value=""
                  />
                  <button
                    type="submit"
                    className=" mt-[16px] flex h-[52px] w-full items-center justify-center rounded-[24px] bg-darkBrown text-[16px] font-medium text-white opacity-100"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AccountDrawer;
