
'use client'
import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "../../components/resume/Education";
import Skills from "../../components/resume/Skills";
import Experience from "../../components/resume/Expirience";
import Achievement from "../../components/resume/Achivements";

const Resume = () => {
  const [educationContent, setEducationContent] = useState(false);
  const [achivementsContent, setAchivementsContent] = useState(true);
  const [skilsContent, setSkilsContent] = useState(false);
  const [expirienceContent, setExperienceContent] = useState(false)
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-brack">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS ON IT" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li onClick={()=>
            setEducationContent(false) & setAchivementsContent(true) & setExperienceContent(false) & setSkilsContent(false)
          } className={`${achivementsContent ? "border-designColor rounded-lg" :"border-transparent"} resumeLi`}>Achivements</li>
          <li onClick={()=>
            setEducationContent(false) & setAchivementsContent(false) & setExperienceContent(false) & setSkilsContent(true)
          } className={`${skilsContent ? "border-designColor rounded-lg" :"border-transparent"} resumeLi`}>Professionnal Skils</li>
          <li onClick={()=>
            setEducationContent(true) & setAchivementsContent(false) & setExperienceContent(false) & setSkilsContent(false)
          } className={`${educationContent ? "border-designColor rounded-lg" :"border-transparent"} resumeLi`}>Education</li>
          <li onClick={()=>
            setEducationContent(false) & setAchivementsContent(false) & setExperienceContent(true) & setSkilsContent(false)
          } className={`${expirienceContent ? "border-designColor rounded-lg" :"border-transparent"} resumeLi`}>Experience</li>
        </ul>
      </div>
      {achivementsContent && <Achievement/>}
      {skilsContent && <Skills/>}
      {educationContent && <Education/>}
      {expirienceContent && <Experience/>}
    </section>
  );
};

export default Resume;