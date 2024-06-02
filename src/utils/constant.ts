import first from "@/assets/card/Rectangle72.png";
import second from "@/assets/card/Rectangle73.png";
import third from "@/assets/card/Rectangle7.png";
import forth from "@/assets/card/Rectangle71.png";

export const completedTaskData = [
  {
    id: 1,
    title: "Design Earn’s Talent Leaderboard",
    author: "Superteam",
    usdcPrice: 700,
    position: "1st",
    tags: ["Design"],
    date: "04/04/2023",
    participants: 36,
    image: first,
  },
  {
    id: 2,
    title: "Armada UI/UX Review",
    author: "Dean’s List Dao",
    tags: ["Design"],
    date: "21/03/2023",
    participants: 7,
    image: second,
  },
  {
    id: 3,
    title: "Create a Frame for Farcaster",
    author: "Deribet",
    usdcPrice: 500,
    position: "1st",
    tags: ["Frontend", "Backend", "Blockchain"],
    date: "14/03/2023",
    participants: 20,
    image: third,
  },
  {
    id: 4,
    title: "Write a thread with memes for PP Program on Solana",
    author: "pSTAKE Finance",
    usdcPrice: 100,
    position: "3rd",
    tags: ["Content"],
    date: "06/03/2023",
    participants: 12,
    image: forth,
  },
];

export const reviewTaskData = [
  {
    id: 4,
    title: "Write a thread with memes for PP Program on Solana",
    author: "pSTAKE Finance",
    tags: ["Content"],
    date: "06/03/2023",
    participants: 12,
    image: forth,
  },
  {
    id: 2,
    title: "Armada UI/UX Review",
    author: "Dean’s List Dao",
    tags: ["Design"],
    date: "21/03/2023",
    participants: 7,
    image: second,
  },

  {
    id: 1,
    title: "Design Earn’s Talent Leaderboard",
    author: "Superteam",
    tags: ["Design"],
    date: "04/04/2023",
    participants: 36,
    image: first,
  },
  {
    id: 3,
    title: "Create a Frame for Farcaster",
    author: "Deribet",
    tags: ["Frontend", "Backend", "BlockChain"],
    date: "14/03/2023",
    participants: 20,
    image: third,
  },
];

export const filterOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Design",
    value: "Design",
  },
  {
    label: "Frontend",
    value: "Frontend",
  },
  {
    label: "Backend",
    value: "Backend",
  },
  {
    label: "Blockchain",
    value: "Blockchain",
  },
  {
    label: "Content",
    value: "Content",
  },
];

export const COMPLETED = "COMPLETED";
export const INREVIEW = "INREVIEW";
