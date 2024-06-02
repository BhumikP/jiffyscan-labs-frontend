import trophyIcon from "@/assets/trophy.png";
import usdcIcon from "@/assets/usdc_icon.png";
import Badge from "./common/Badge";

type leaderBoardProps = {
  title: string;
  author: string;
  usdcPrice?: number;
  position?: string;
  tags?: string[];
  date: string;
  participants?: number;
  image: string;
};

const bgColors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-indigo-200",
  "bg-teal-200",
  "bg-orange-200",
];

const textColors = [
  "text-red-800",
  "text-blue-800",
  "text-green-800",
  "text-yellow-800",
  "text-purple-800",
  "text-pink-800",
  "text-indigo-800",
  "text-teal-800",
  "text-orange-800",
];

function HackathonCard({
  title,
  author,
  usdcPrice,
  position,
  tags,
  date,
  participants,
  image,
}: leaderBoardProps) {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * bgColors.length);
  };

  return (
    <div className="rounded-[8px] bg-[#FFFFFF] mb-1 flex flex-row justify-between py-4 px-8 w-full 2xl:w-[1080px] cursor-pointer">
      <div className="flex flex-row ">
        <img
          src={image}
          className={`rounded-[6px]   bg-cover bg-no-repeat me-6 w-[80px] h-[80px]`}
        />
        <div className="my-1.5 flex flex-col ">
          <div className="mb-3 flex flex-row  ">
            <span className="me-2   text-[20px]  text-[#252424]">{title}</span>
            <div className="mt-1.5 mx-2 inline-block text-gray  font-normal text-[14px]  ">
              by
            </div>
            <span className="  text-[20px]  text-blue1">{author}</span>
          </div>
          <div className="mx-1.5 flex flex-row self-start items-center ">
            {usdcPrice && (
              <div className="me-4 flex flex-row items-center gap-2">
                <img className="w-6 h-6" src={usdcIcon} />
                <span className="me-1.5  text-[20px]  font-semibold">
                  {usdcPrice}
                </span>
                <div className=" inline-block   text-[18px]  text-blue`">
                  USDC
                </div>
              </div>
            )}
            {position && (
              <>
                <div className="bg-[#CBD8E9] mx-0.5 me-4 w-[1px] h-[24px]"></div>
                <div className="me-4 flex flex-row items-center gap-2 ">
                  <img className="w-[13px] h-[13px]" src={trophyIcon} />
                  <span className="text-[18px] text-gray  ">
                    {position} Place
                  </span>
                </div>
              </>
            )}
            {tags &&
              tags.map((name) => {
                const randomIndex = getRandomIndex();
                const bgColor = bgColors[randomIndex];
                const textColor = textColors[randomIndex];
                return (
                  <Badge
                    key={name}
                    name={name}
                    bgColor={bgColor}
                    textColor={textColor}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="my-2.5 flex flex-col items-end ">
        <div className="mb-4 inline-block text-[18px] text-gray ">{date}</div>
        <div className="flex flex-row gap-2 ">
          <span className=" text-[18px]  text-lightBlack">{participants}</span>
          <span className=" text-[18px] text-gray">Participants</span>
        </div>
      </div>
    </div>
  );
}

export default HackathonCard;
