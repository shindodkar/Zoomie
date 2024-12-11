"use client";
import MeetingList from "@/components/MeetingList";
import React from "react";
import { useState, useEffect } from "react";
const Home = () => {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      setDateTime({
        date: now.toLocaleDateString("en-US", options),
        time: now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-center bg-no-repeat bg-hero bg-cover ">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="transparent-bg max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at : 12.30 PM
          </h2>
          <div className="flex flex-col gap-2  p-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl ">
              {dateTime.time}
            </h1>
            <p className="text-lg font-medium text-gray-300 lg:text-2xl ">
              {" "}
              {dateTime.date}
            </p>
          </div>
        </div>
      </div>
      <MeetingList />
    </section>
  );
};

export default Home;
