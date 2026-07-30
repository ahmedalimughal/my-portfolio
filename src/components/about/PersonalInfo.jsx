import React from "react";

const personalInfoContent = [
  { meta: "fa fa-user", metaInfo: "Ahmed Ali Mughal" },
  { meta: "fa fa-child", metaInfo: "25 Years" },
  { meta: "fa fa-flag", metaInfo: "Pakistani" },
  { meta: "fa fa-tasks", metaInfo: "Available" },
  { meta: "fa fa-map-marker", metaInfo: "Karachi, Pakistan" },
  
  { meta: "fa fa-phone", metaInfo: "+92 330 2529 311", metaLink: "tel:+923302529311" },
  { meta: "fa fa-language", metaInfo: "German, English" },
  
  { meta: "fa fa-envelope", metaInfo: "ahmedali110@gmail.com", metaLink: "mailto:ahmedali110@gmail.com" },
  { meta: "fa fa-linkedin", metaInfo: "Ahmed Ali Mughal", metaLink: "https://www.linkedin.com/in/ahmed-ali-mughal/" },

  { meta: "fa fa-heart-o", metaInfo: "@ahmedalimughal", metaLink: "https://lovable.dev/@ahmedalimughal" }
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title px-1 icon">
            <i className={val.meta}></i>
          </span>

          {val.metaLink ? (
            <a
              href={val.metaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                {val.metaInfo}
              </span>
            </a>
          ) : (
            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
              {val.metaInfo}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
