import React from "react";
import { Link } from "react-router-dom";

const personalInfoContent = [
  { meta: "fa fa-user", metaInfo: "Ahmed Ali Mughal" },
  { meta: "fa fa-child", metaInfo: "23 Years" },
  { meta: "fa fa-flag", metaInfo: "Pakistani" },
  { meta: "fa fa-tasks", metaInfo: "Available" },
  { meta: "fa fa-map-marker", metaInfo: "Karachi, Pakistan" },
  
  { meta: "fa fa-skype", metaInfo: " ahmedali.mughal" , metaLink:"https://join.skype.com/invite/vgtgA8pCBqPa"},
  { meta: "fa fa-phone", metaInfo: "+92 3302529311"  , metaLink: "tel:+923302529311"},
  { meta: "fa fa-language", metaInfo: "German, English" },
  
  { meta: "fa fa-envelope", metaInfo: "ahmedalimughal.dev@gmail.com" , metaLink: "mailto:ahmedalimughal.dev@gmail.com"},
  { meta: "fa fa-linkedin" , metaInfo:"Ahmed Ali Mughal" , metaLink: "https://www.linkedin.com/in/ahmed-ali-mughal/"}
  
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title px-1 icon"><i className={val.meta}></i></span>
          <Link to={val.metaLink} className="text-decoration-none text-white">
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
