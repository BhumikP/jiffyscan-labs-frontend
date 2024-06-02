import { Search } from "react-feather";
import filterIcon from "@/assets/filterIcon.png";
import {
  COMPLETED,
  INREVIEW,
  completedTaskData,
  filterOptions,
  reviewTaskData,
} from "@/utils/constant";
import ReactSelect from "@/components/common/Reactselect";
import { useState } from "react";
import Header from "@/layout/Header";
import HackathonCard from "@/components/HackathonCard";

interface Option {
  label: string;
  value: string;
}

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    filterOptions[0]
  );

  const [selectedTab, setSelectedTab] = useState(COMPLETED);
  const [taskData, setTaskData] = useState(completedTaskData);

  const handleChange = (
    newValue :Option | null
  ) => {
    const tasks =
      selectedTab === COMPLETED
        ? completedTaskData
        : selectedTab === INREVIEW
        ? reviewTaskData
        : null;

    setSelectedOption(newValue);
    if (newValue && newValue.value !== "all") {
      const filtered = tasks?.filter((item) =>
        item.tags.includes(newValue.value)
      );
      filtered && setTaskData(filtered);
    } else {
      tasks && setTaskData(tasks);
    }
  };

  const handleTab = (tab: string) => {
    const tasks = tab === COMPLETED ? completedTaskData : reviewTaskData;
    setTaskData(tasks);
    setSelectedTab(tab);
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center w-100">
      <section id="header">
        <Header />
      </section>
      <main>
        <div className="flex flex-row">
          <div className=" flex flex-col items-center">
            <div className="me-6 mb-6 grid grid-cols-2 items-center justify-between 2xl:w-full">
              <div className=" flex flex-row ">
                <span className="me-6 font-semibold text-[20px] text-lightBlack">
                  Work History
                </span>
                <div className="bg-[#CBD8E9] me-6 w-[1px] h-[24px] mt-1.5"></div>
                <div className="text-sm font-medium text-center text-gray-500  ">
                  <ul className="flex flex-wrap -mb-px cursor-pointer text-lg">
                    <li
                      onClick={()=>handleTab(COMPLETED)}
                      className={`me-2 inline-block px-4 py-1 rounded-t-lg text-gray hover:border-gray-300 ${
                        selectedTab === COMPLETED
                          ? "text-black font-normal"
                          : ""
                      }`}
                    >
                      Completed
                    </li>
                    <li
                      onClick={()=>handleTab(INREVIEW)}
                      className={`me-2 inline-block px-4 py-1 border-b-2 border-transparent rounded-t-lg text-gray hover:border-gray-300 ${
                        selectedTab === INREVIEW ? "text-black font-normal" : ""
                      }`}
                    >
                      In Review
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row ms-auto">
                <div className="flex flex-row gap-4">
                  <div className=" flex flex-row gap-2 items-center">
                    <img className="w-4 h-4" src={filterIcon} />
                    <span className="font-normal text-[14px] text-[#64748B]">
                      Filter By
                    </span>
                  </div>
                  <ReactSelect
                    options={filterOptions}
                    value={selectedOption}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <hr className="mb-3 w-full text-[#DADCE0]" />
            {taskData.map((task) => (
              <HackathonCard
                key={task.id}
                title={task.title}
                author={task.author}
                usdcPrice={task.usdcPrice}
                position={task.position}
                tags={task.tags}
                date={task.date}
                participants={task.participants}
                image={task.image}
              />
            ))}
          </div>
          <div className="bg-[#EBEBEB] xl:mx-10 mx-5 w-[1px]"></div>
          <div className="rounded-[42px] bg-aliceBlue  flex flex-row p-5 gap-3 h-14 items-center">
            <Search className="w-5 h-5 opacity-60" />
            <input
              placeholder="Search Bounties, Profiles, and more..."
              className="break-words  xl:w-80  text-[18px] placeholder-gray focus:outline-none bg-transparent "
            />
          </div>
        </div>
      </main>
    </div>
  );
}
