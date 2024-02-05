import React from "react";
import { Link } from "react-router-dom";

const personalInfoContent = [
  { meta: "Full Name", metaInfo: "Ahmed Ali Mughal" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Karachi, Pakistan" },
  
  { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "phone", metaInfo: "+92 3302529311"  , metaLink: "tel:+923302529311"},
  { meta: "langages", metaInfo: "German, English" },
  
  { meta: "Email", metaInfo: "ahmedalimughal.dev@gmail.com" , metaLink: "mailto:ahmedalimughal.dev@gmail.com"},
  { meta: "Linkedin" , metaInfo:"Ahmed Ali Mughal" , metaLink: "https://www.linkedin.com/in/ahmed-ali-mughal/"}
  
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <Link to={val.metaLink} className="text-white">
            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}            
          </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
