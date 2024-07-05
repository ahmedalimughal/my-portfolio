import React from "react";

const experienceContent = [
  {
    year: "Jun 2024 - Present",
    position: "Senior Web Developer",
    compnayName: "Ossols Pvt Ltd · Full-time",
    details: `On the position of Senior Web Developer at Ossols Pvt Ltd, a full-time role. In this position, I specializes in various CMS platforms including WordPress, Shopify, Wix, and Squarespace, as well as in plugin development.`,
  },
  {
    year: "Jun 2023 - July 2024",
    position: "Senior Web Developer",
    compnayName: "HBOX Digital · Full-time",
    details: `As a seasoned Web Developer, I specialize in harnessing the power of WordPress, PHP Custom Portals, and Bubble.io technology to create dynamic and engaging online experiences.`,
  },
  {
    year: "Mar 2022 - Sep 2023",
    position: " Team lead & Wordpress Developer",
    compnayName: "Salsoft Technologies (Pvt) Ltd · Full-time",
    details: `Skills: JavaScript · E-commerce Optimization · PSD to Wordpress · Functionality · WordPress · amelia`,
  },
  {
    year: "Mar 2021 - Feb 2022",
    position: " Team lead & Wordpress Developer",
    compnayName: "Chimp Advertising · Full-time",
    details: `Working as a Team lead on CMS development team and also doing fronted development.`,
  },
  {
    year: "Jan 2020 - Jan 2021",
    position: " Web Developer",
    compnayName: "OneTen Design · Full-time",
    details: `Setup a small business unit and i play as a role of Cheif Administration officer and also look after the development team and affiliation business`,
  },
  {
    year: "Feb 2020 - Aug 2020",
    position: "Wordpress Developer",
    compnayName: "Evolve Information Solutions · Full-time",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "Feb 2018 - Jan 2019",
    position: "Wordpress Developer",
    compnayName: "Reems Digital · Full-time",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
