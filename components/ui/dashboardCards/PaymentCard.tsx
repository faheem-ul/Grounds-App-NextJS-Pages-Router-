import Image from "next/image";

import PaymetDrawer from "../drawers/PaymentDrawer";

import editSvg from "../../../public/edit.svg";

function PaymentCard() {
  return (
    <div className="mt-6 w-[100%] min-w-[450px] max-w-[450px] mob:min-w-[370px]">
      <div className="flex w-full items-center justify-between">
        <p className="p-xl p-white font-bold leading-6">My Payment Method</p>
        <PaymetDrawer />
      </div>
      <div className="mt-6  shrink-0 rounded-[24px] bg-white px-6 py-6 ">
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Payment Method</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
        <div className=" h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Card Number</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
        <div className=" h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Expiry Date</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className=" my-[20px] w-full border-t-[0.5px] border-blackOpacity opacity-50"></div>
        <div className=" h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Email</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
