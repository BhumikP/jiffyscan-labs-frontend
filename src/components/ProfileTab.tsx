import { useState } from "react";
import { Code, Layout, LogOut, User } from "react-feather";

const dropdownOptions = [
  {
    id: 1,
    icon: <User className="w-4 h-4" />,
    name: "View Profile",
  },
  {
    id: 2,
    icon: <Layout className="w-4 h-4" />,
    name: "Dashboard",
  },
  {
    id: 3,
    icon: <Code className="w-4 h-4" />,
    name: "API",
  },
  {
    id: 4,
    icon: <LogOut className="w-4 h-4" />,
    name: "Log Out",
  },
];

function ProfileTab() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="mt-1 flex flex-row ">
      <div className="rounded-[200px]  relative me-3 flex p-2 ">
        <span className="relative font-medium text-[16px]  text-blue-600">
          OR
        </span>
        <div className="rounded-[5px]  bg-green-600 absolute right-[0px] bottom-[0px] w-[10px] h-[10px]"></div>
      </div>
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span className="self-start font-semibold text-[14px]">
          Olivia Rhye
        </span>
        <span className="break-words  text-[14px] ">olivia@jiffyscan.xyz</span>
      </div>
      <ul
        className={`${
          openMenu ? "" : "hidden"
        } absolute z-100 top-20 w-[180px] lg:w-[208px] overflow-auto rounded-[8px] bg-white border border-lightGray p-3 font-sans text-sm font-normal  shadow-lg shadow-blue-gray-500/10 focus:outline-none`}
      >
        {dropdownOptions.map((items) => (
          <li
            key={items.id}
            className="mx-4 mb-5  flex justify-start items-center gap-3 cursor-pointer text-[#5A5A62]"
          >
            <div className=" me-3 flex gap-4 items-center">{items.icon}</div>
            <span className="font-medium leading-3 ">{items.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileTab;
