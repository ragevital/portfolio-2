import React from "react";
import Title from "../layouts/Title";
import Card from "../../components/features/Card";
import { FaMobile } from "react-icons/fa";
import {
  SiAntdesign,
  SiGimp,
  SiMongodb,
  SiMysql,
  SiWordpress,
} from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I DO" />

      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Mobile Development"
          des="Analyze Code Performance In Production, At Any Scale, All The Time, With Minimal Overhead. "
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des=" make a product or service usable, enjoyable, and accessible."
          icon={<SiAntdesign />}
        />
        <Card
          title="Big Data Management"
          des="Create a Database. With RDBMS (Relational Database Management Systems) we have Databases, Tables, Rows and Columns. ..."
          icon={<SiMongodb />}
        />
        <Card
          title="E-commer developer sites"
          des="Build an adminiatrate website and network websites"
          icon={<SiWordpress />}
        />
        <Card
          title="Stocking with SQL"
          des="widely used relational database management system"
          icon={<SiMysql />}
        />
        <Card
          title="Graphic Edition"
          des="image manipulation (retouching) and image editing, free-form drawing, transcoding between different image file formats, and more specialized tasks."
          icon={<SiGimp />}
        />
      </div>
    </section>
  );
};

export default Features;
