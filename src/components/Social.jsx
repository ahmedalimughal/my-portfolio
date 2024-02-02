import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-github",
    link: "https://github.com/ahmedalimughal",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/AhmedAliMexah" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/ahmed-ali-mughal/",
  },
  //{ iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
