import React from "react";

const skillsContent = [
  { skillClass: "p99", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p91", skillPercent: "95", skillName: "CSS" },
  { skillClass: "p90", skillPercent: "99", skillName: "Bootstrap" },
  { skillClass: "p89", skillPercent: "89", skillName: "JavaScript" },
  { skillClass: "p75", skillPercent: "75", skillName: "jQuery" },
  { skillClass: "p80", skillPercent: "80", skillName: "PHP" },
  { skillClass: "p85", skillPercent: "85", skillName: "Laravel" },
  { skillClass: "p90", skillPercent: "90", skillName: "RESTful APIs" },
  { skillClass: "p85", skillPercent: "85", skillName: "API Integration" },
  { skillClass: "p95", skillPercent: "95", skillName: "WordPress" },
  { skillClass: "p80", skillPercent: "80", skillName: "WP Plugin Development" },
  { skillClass: "p85", skillPercent: "85", skillName: "MySQL" },
  { skillClass: "p75", skillPercent: "75", skillName: "Database Design" },
  { skillClass: "p80", skillPercent: "80", skillName: "Git / Version Control" },
  { skillClass: "p75", skillPercent: "75", skillName: "Server Deployment" },
  { skillClass: "p85", skillPercent: "85", skillName: "System Architecture" },
  { skillClass: "p80", skillPercent: "80", skillName: "Project Leadership" }
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
