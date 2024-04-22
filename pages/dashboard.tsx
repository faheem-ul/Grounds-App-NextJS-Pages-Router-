import Link from "next/link";
import Image from "next/image";

// import AccountCard from "../ui/dashboardCards/AccountCard";
// import ProfileCard from "../ui/dashboardCards/ProfileCard";
// import PlanCard from "../ui/dashboardCards/PlanCard";
// import PaymentCard from "../ui/dashboardCards/PaymentCard";
import cameraIcon from "../public/cameraicon.svg";
import androidsvg from "../public/balckfillgoogledownload.svg";
import iossvg from "../public/blackfillappledownload.svg";
function Dashboard() {
  return (
    <div className="bg-primary">
      <div className="flex items-center justify-between px-[10%] py-6">
        <div className="bg-yellow">
          <p className="text-[40px] font-bold text-darkBrown">
            <Link href="/">Grounds</Link>
          </p>
        </div>
        <div className="bg-red">
          <Link href="/">
            <button className="py-2 pr-3 text-[16px] font-semibold leading-6 tracking-[0.48px] text-darkBrown">
              Log out
            </button>
          </Link>
        </div>
      </div>

      <div className="flex  items-center justify-center gap-[250px] text-center">
        <div className=" flex items-center gap-6">
          <div className=" relative mt-[5%] flex h-[96px] w-[96px] justify-center rounded-full bg-black text-center ">
            <input
              type="file"
              className=" absolute left-[-30px] w-[110px] p-8 opacity-0 "
            />
            <Image src={cameraIcon} alt="camera icon" />
          </div>
          <p className="text-[20px] font-semibold leading-[28px] text-[#1E2534]">
            Welcome, ebook
          </p>
        </div>

        <div className=" flex flex-col">
          <p className=" py-3 text-sm font-semibold text-blackOpacity">
            Download the app below and login in with the same <br></br>{" "}
            creditentials you just used to create your account
          </p>
          <div className=" my-3 flex justify-center gap-4">
            <Image src={androidsvg} alt="" />
            <Image src={iossvg} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10 bg-black">
        <div>
          {/* <AccountCard /> */}
          {/* <ProfileCard /> */}
        </div>
        <div>
          {/* <PlanCard /> */}
          {/* <PaymentCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
