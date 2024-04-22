import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import closeIcon from "public/icons/icon-close-drawer.svg";
import dragLine from "public/icons/drag_line.svg";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  title?: string;
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  className,
  children,
  title,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleEscapeKeyPress);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscapeKeyPress);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen]);

  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed right-0 top-0 z-50 h-full w-full bg-black opacity-50"
          onClick={handleOverlayClick}
        ></div>
      )}
      {/* isOpen ? " md:translate-x-0" : "translate-y-full md:translate-x-full", */}

      {/* Mobile Drawer */}
      <div
        className={twMerge(
          `no-scrollbar md:hidden fixed bottom-0 right-0 z-[999] block h-auto max-h-[90%] w-full transform overflow-x-hidden rounded-t-[20px] bg-white py-[40px] transition-transform duration-300 ease-in-out`,
          isOpen ? " md:translate-x-0" : "md:translate-x-full translate-y-full",

          className,
        )}
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add desired box shadow
        }}
      >
        {/* Mobile Heading and close Button */}
        <p className="mb-[31px] mt-[-10px] text-center text-[14px] font-semibold">
          {title}
        </p>

        <button
          className="border-[#292D32 hover:bg-gray-200] absolute right-5 top-5 rounded-lg border-2 p-2"
          onClick={onClose}
        >
          <Image src={closeIcon} alt="closeIcon" />
        </button>

        <div className="md:hodden absolute left-[50%] top-[8px] block translate-x-[-50%]">
          <Image src={dragLine} alt="dragLine" />
        </div>
        {/* Mobile Drawer */}

        {/* Drawer Close Button */}
        {/* <div className="mx-5 my-5 flex justify-end"> */}
        {/* <button
className="border-[#292D32 hover:bg-gray-200] absolute right-5 top-5 rounded-lg border-2 p-2"
onClick={onClose}
>
<Image src={closeIcon} alt="closeIcon" />
</button> */}
        {/* </div> */}

        {/* Drawer content */}
        <div className="h-full w-full">{children}</div>
      </div>

      {/* Desktop Drawer */}
      <div
        className={twMerge(
          `md:block fixed right-0 top-0 z-[999] hidden h-full w-[450px] transform overflow-x-hidden rounded-l-[20px] bg-white transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
            // isOpen ? "h-[100%] w-full translate-y-[10%]" : "translate-y-full"
          }`,
          className,
        )}
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add desired box shadow
        }}
      >
        {/* Drawer Close Button */}
        {/* <div className="mx-5 my-5 flex justify-end"> */}
        <button
          className="border-[#292D32 hover:bg-gray-200] absolute right-5 top-5 rounded-lg border-2 p-2"
          onClick={onClose}
        >
          <Image src={closeIcon} alt="closeIcon" />
        </button>
        {/* </div> */}

        {/* Drawer content */}
        <div className="h-full w-full">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
