import Image from "next/image";

import ProfileDrawer from "../drawers/ProfileDrawer";

import editSvg from "../../../public/edit.svg";

function ProfileCard() {
  return (
    <div className="mt-6 w-[100%] min-w-[450px] max-w-[450px] mob:min-w-[370px]">
      <div className="flex w-full items-center justify-between">
        <p className="p-xl p-white font-bold leading-6">My Profile</p>
        <ProfileDrawer />
      </div>
      <div className="mt-6  shrink-0 rounded-[24px] bg-white px-6 py-6 ">
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Age</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
        <div className=" h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Height</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
        <div className=" h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Weight</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
        <div className=" h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Goal</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
        <div className=" h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">
            Daily meal amount
          </p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
