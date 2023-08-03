
'use client'
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className=" text-sm text-designColor tracking-[4px]">2022-2023</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="DEc in Computer Science"
            subTitle="College Lacité (2021 - 2023)"
            result="3.4/4"
            des="The training provided by college in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="IT and telecom network"
            subTitle="Université des Montagnes (2018 - 2020)"
            result="Cameroon"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className=" text-sm text-designColor tracking-[4px]">2022-2023</p>
          <h2 className="text-4xl font-bold">Job Expirience</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Intern Webmaster"
            subTitle="CEPEO - (2023)"
            result="CANADA"
            des="CEPEO hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
