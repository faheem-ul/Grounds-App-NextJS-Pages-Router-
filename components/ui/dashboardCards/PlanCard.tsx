import Image from "next/image";
import editSvg from "../../../public/edit.svg";

function PlanCard() {
  return (
    <div className="mt-6 w-[100%] min-w-[450px] max-w-[450px] mob:min-w-[370px]">
      <div className="flex w-full items-center justify-between">
        <p className="p-xl p-white font-bold leading-6">MyPlan</p>
        <Image src={editSvg} alt="edit " />
      </div>
      <div className="mt-6  shrink-0 rounded-[24px] bg-white px-6 py-6 ">
        <div className="">
          <p className="p-sm p-white font-semibold leading-5">
            12 Month • <span className=" text-accentGreen ">Best Deal</span>
          </p>
          <p className="p-sm p-white font-semibold leading-5"></p>
          <p className="mt-2 text-[12px] font-medium text-blackOpacity">
            Term expires March 5, 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
