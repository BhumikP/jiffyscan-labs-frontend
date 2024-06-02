import { ChevronDown } from "react-feather";

const navData = [
  {
    id: 1,
    title: "Home",
    link: "/",
    hasOptions: false,
  },
  {
    id: 2,
    title: "Blockchain",
    link: "/blockchain",
    hasOptions: true,
  },
  {
    id: 3,

    title: "Developers",
    link: "/developers",
    hasOptions: true,
  },
  {
    id: 4,

    title: "More",
    link: "/more",
    hasOptions: true,
  },
  {
    id: 5,

    title: "About 4337",
    link: "/about4337",
    hasOptions: false,
  },
];

function Navbar() {
  return (
    <div className="mt-1 mb-2 flex flex-row justify-between lg:w-[586px] w-full ">
      {navData.map((items) => (
        <div
          key={items.id}
          className={`flex flex-row  items-center cursor-pointer ${
            items.link === window.location.pathname ? "text-blue-800" : ""
          } `}
        >
          <span className="me-3 font-normal text-[16px] leading-[2] text-gray">
            {items.title}
          </span>
          {items.hasOptions && <ChevronDown className="opacity-60" />}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
