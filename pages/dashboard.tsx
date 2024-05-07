import { ReactNode, useContext, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

import { auth } from "../firebaseConfig";

import PrivateRoutes from "../components/Layouts/PrivateLayout/PrivateRoutes";

import AccountCard from "@/components/ui/dashboardCards/AccountCard";
import ProfileCard from "@/components/ui/dashboardCards/ProfileCard";
import PlanCard from "@/components/ui/dashboardCards/PlanCard";
import PaymentCard from "@/components/ui/dashboardCards/PaymentCard";

import cameraIcon from "../public/cameraicon.svg";
import androidsvg from "../public/balckfillgoogledownload.svg";
import iossvg from "../public/blackfillappledownload.svg";
import addIcon from "../public/addicon.svg";
import PrivateLayout from "@/components/Layouts/PrivateLayout/PrivateLayout";

function Dashboard() {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  // console.log(auth.onAuthStateChanged);

  const router = useRouter();

  const handleLogout = () => {
    auth.signOut();
    router.push("/login");
    console.log("logged out");
  };

  return (
    // <PrivateRoutes>
    <div className="bg-primary">
      <div className="flex items-center justify-between px-[10%] py-6">
        <div className="">
          <p className="text-[40px] font-bold text-darkBrown">
            <Link href="/">Grounds</Link>
          </p>
        </div>
        <div className="bg-red">
          <button
            className="py-2 pr-3 text-[16px] font-semibold leading-6 tracking-[0.48px] text-darkBrown"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="flex  items-center justify-center gap-[250px] text-center mob:flex-col mob:gap-10">
        <div className=" flex items-center gap-6 mob:flex-col">
          <div className=" relative mt-[5%] flex h-[96px] w-[96px] justify-center rounded-full bg-black text-center ">
            <input
              type="file"
              className=" absolute left-[-30px] w-[110px] p-8 opacity-0 "
            />
            <Image src={cameraIcon} alt="camera icon" />
            <Image
              className=" absolute left-[63px] top-[69px]"
              src={addIcon}
              alt="add icon"
            />
          </div>
          <p className="text-[20px] font-semibold leading-[28px] text-[#1E2534]">
            Welcome, ebook
          </p>
        </div>

        <div className=" flex flex-col">
          <p className=" py-3 text-sm font-semibold text-blackOpacity mob:py-0">
            Download the app below and login in with the same <br></br>{" "}
            creditentials you just used to create your account
          </p>
          <div className=" my-3 flex justify-center gap-4">
            <Image src={androidsvg} alt="" />
            <Image src={iossvg} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-baseline justify-center gap-14 bg-primary pb-4 mob:gap-[15px]">
        <div>
          <AccountCard />
          <ProfileCard />
        </div>
        <div>
          <PlanCard />
          <PaymentCard />
        </div>
      </div>
    </div>
    // /* </PrivateRoutes> */
  );
}

export default Dashboard;
Dashboard.privateLayout = function (page: ReactNode) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
