"use client";

import { cn } from "@/lib/utils";

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className={cn(
        "bg-no-repeat bg-cover px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer hover:bg-orange-2 bg-gray-800 text-white p-10 rounded-lg transform transition duration-300 hover:scale-105",
        className
      )}
      onClick={handleClick}
    >
      <div
        style={{ minHeight: "100px", maxHeight: "100px" }}
        className="flex flex-col gap-2 transform transparent-bg2 transition duration-300 hover:scale-105 p-3 text-sm "
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm font-normal text-gray-300">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
