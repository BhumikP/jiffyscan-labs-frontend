import React from "react";

interface BadgeProps {
  name: string;
  bgColor: string;
  textColor: string;
}

const Badge: React.FC<BadgeProps> = ({ name, bgColor, textColor }) => {
  return (
    <span
      className={`mx-3 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600  ${textColor} ${bgColor} ${textColor}`}
    >
      {name}
    </span>
  );
};

export default Badge;
