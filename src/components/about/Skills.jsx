import React from "react";

const skillsContent = [
  { skillClass: "p99", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p95", skillPercent: "95", skillName: "CSS" },
  { skillClass: "p80", skillPercent: "80", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p75", skillPercent: "75", skillName: "JQUERY" },
  { skillClass: "p99", skillPercent: "99", skillName: "Bootstrap" },
  { skillClass: "p45", skillPercent: "65", skillName: "WP Plugin" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
