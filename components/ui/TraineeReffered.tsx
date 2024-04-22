import { useState } from "react";

function TraineeReffered() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className="flex w-[433px] cursor-pointer items-center justify-between rounded-2xl border-2 border-[#a8a4a166] bg-white p-2 px-4 mob:w-[392px]"
        onClick={toggleContent}
      >
        <p className="text-[13px] text-blackOpacity">Trainer referred by</p>
        <p className="text-[14px] font-semibold text-accentGreen">View</p>
      </div>

      {isOpen && (
        <div className=" mt-3 rounded-2xl border-2 border-[#a8a4a166] bg-white py-2 pt-4">
          <p className="flex cursor-pointer items-center justify-between px-4 py-2 text-[13px] font-normal text-blackOpacity hover:bg-[#F8F8F8]">
            Heidi Somers
          </p>
          <p className="flex cursor-pointer items-center justify-between px-4 py-2 text-[13px] font-normal text-blackOpacity hover:bg-[#F8F8F8]">
            Bailey Stewart
          </p>
          <p className="flex cursor-pointer items-center justify-between px-4 py-2 text-[13px] font-normal text-blackOpacity hover:bg-[#F8F8F8]">
            Brooklyn Moore
          </p>
          <p className="flex cursor-pointer items-center justify-between px-4 py-2 text-[13px] font-normal text-blackOpacity hover:bg-[#F8F8F8]">
            Kara Corey
          </p>
          <p className="flex cursor-pointer items-center justify-between px-4 py-2 text-[13px] font-normal text-blackOpacity hover:bg-[#F8F8F8]">
            Teresa Hurtado
          </p>
          <p className="flex cursor-pointer items-center justify-between px-4 py-2 text-[13px] font-normal text-blackOpacity hover:bg-[#F8F8F8]">
            None
          </p>
        </div>
      )}
    </div>
  );
}

export default TraineeReffered;
