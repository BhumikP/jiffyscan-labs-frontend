import jiffyScanLogo from "@/assets/jiffyScanLogo.png";
import jiffyScanIcon from "@/assets/jiffyScanIcon.png";
import LightningImage from "@/assets/Lightning.png";
import { ChevronDown, Moon } from "react-feather";
import Navbar from "./Navbar";
import ProfileTab from "@/components/ProfileTab";

function Header() {
  return (
    <div className=" mb-4 flex flex-col items-end px-5 py-5  ">
      <div className="flex  gap-x-6 2xl:gap-x-14 justify-between items-center  ">
        <div className=" flex flex-row lg:w-[178px] items-center  ">
          <img className="me-6 w-[51.1px] h-[34.3px]" src={jiffyScanIcon} />
          <img className=" w-[103px] h-[25.2px]" src={jiffyScanLogo} />
        </div>
        <Navbar />
        <div className=" rounded-[40px] border-[#DADCE0] border-2 hover:border-1 shadow-custom-1 hover:shadow-custom-2  focus:border-[#195BDF66] px-2 py-1 flex flex-row  2xl:w-[360px] w-auto">
          <div className=" flex flex-row px-3 gap-1 items-center cursor-pointer">
            <img src={LightningImage} className="w-7 h-7" />
            <ChevronDown className="opacity-60 w-[24px] h-[24px]" />
          </div>
          <div className="bg-[#DADCE0]  my-1 me-4 w-[1px] h-[24px]"></div>
          <input
            placeholder="Search an userOp"
            className="whitespace-nowrap overflow-hidden text-ellipsis inline float-left line-clamp-1   w-[220px]  pe-4 font-normal focus:outline-none text-[14px] leading-[2.286]   placeholder-[#9E9E9E]"
          />
        </div>
        <ProfileTab />
        <Moon className="opacity-60" />
      </div>
    </div>
  );
}

export default Header;
