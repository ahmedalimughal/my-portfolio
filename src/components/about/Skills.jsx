import React from "react";

const skillsContent = [
  { skillClass: "p99", skillPercent: "100", skillName: "HTML5" },
  { skillClass: "p95", skillPercent: "95", skillName: "CSS3" },
  { skillClass: "p90", skillPercent: "90", skillName: "Tailwind CSS" },
  { skillClass: "p90", skillPercent: "90", skillName: "Bootstrap" },
  { skillClass: "p89", skillPercent: "89", skillName: "JavaScript" },
  { skillClass: "p85", skillPercent: "85", skillName: "TypeScript" },
  { skillClass: "p85", skillPercent: "85", skillName: "React.js" },
  { skillClass: "p80", skillPercent: "80", skillName: "Next.js" },

  { skillClass: "p80", skillPercent: "80", skillName: "jQuery" },
  { skillClass: "p90", skillPercent: "90", skillName: "PHP" },
  { skillClass: "p90", skillPercent: "90", skillName: "Laravel" },
  { skillClass: "p90", skillPercent: "90", skillName: "REST APIs" },
  { skillClass: "p85", skillPercent: "85", skillName: "API Integration" },

  { skillClass: "p85", skillPercent: "85", skillName: "MySQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "Database Design" },
  { skillClass: "p75", skillPercent: "75", skillName: "Redis" },

  { skillClass: "p90", skillPercent: "90", skillName: "WordPress" },
  { skillClass: "p85", skillPercent: "85", skillName: "WP Plugin Development" },
  { skillClass: "p80", skillPercent: "80", skillName: "WooCommerce" },

  { skillClass: "p85", skillPercent: "85", skillName: "Git / GitHub" },
  { skillClass: "p80", skillPercent: "80", skillName: "CI/CD" },
  { skillClass: "p75", skillPercent: "75", skillName: "Docker" },

  { skillClass: "p85", skillPercent: "85", skillName: "Cloud Architecture" },
  { skillClass: "p80", skillPercent: "80", skillName: "AWS" },
  { skillClass: "p80", skillPercent: "80", skillName: "Server Deployment" },

  { skillClass: "p85", skillPercent: "85", skillName: "System Architecture" },
  { skillClass: "p85", skillPercent: "85", skillName: "Software Engineering" },
  { skillClass: "p90", skillPercent: "90", skillName: "SaaS Development" },

  { skillClass: "p85", skillPercent: "85", skillName: "ERP Systems" },
  { skillClass: "p85", skillPercent: "85", skillName: "HRMS Solutions" },
  { skillClass: "p80", skillPercent: "80", skillName: "POS Systems" },
  { skillClass: "p80", skillPercent: "80", skillName: "Payment Solutions" },
  { skillClass: "p75", skillPercent: "75", skillName: "Fleet Management" },

  { skillClass: "p90", skillPercent: "90", skillName: "Project Leadership" },
  { skillClass: "p85", skillPercent: "85", skillName: "Product Management" },
  { skillClass: "p85", skillPercent: "85", skillName: "Team Leadership" },
  { skillClass: "p80", skillPercent: "80", skillName: "Agile Methodology" }
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
