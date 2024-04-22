import Image from "next/image";
import editSvg from "../../../public/edit.svg";
import AccountDrawer from "../drawers/AccountDrawer";

function AccountCard() {
  return (
    <div className="w-[100%] min-w-[450px] max-w-[450px] mob:min-w-[370px] ">
      <div className="flex w-full items-center justify-between">
        <p className="p-xl p-white font-bold leading-6">My Account</p>
        <AccountDrawer />
      </div>
      <div className="mt-6  shrink-0 rounded-[24px] bg-white px-6 py-6 ">
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Email</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
        <div className="my-5 h-px border-0 "></div>
        <div className="flex w-full items-center justify-between">
          <p className="p-sm p-white font-semibold leading-5">Password</p>
          <p className="p-sm p-white font-semibold leading-5"></p>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
