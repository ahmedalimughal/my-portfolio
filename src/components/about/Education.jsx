import React from "react";
import { Link } from "react-router-dom";

const educationContent = [
  {
    year: "Issued Jan 2024",
    degree: "Foundations of CybersecurityFoundations of Cybersecurity",
    institute: "Coursera Course Certificates",
    details: `I'm thrilled to announce that I've successfully completed the Foundations of Cybersecurity certification, showcasing a deep understanding of key principles in the field. This accomplishment reflects my commitment to staying updated on the latest developments in digital security, essential for safeguarding information in our tech-driven world. Congratulations to me for attaining proficiency in crucial cybersecurity practices!`,
    link: 'https://www.coursera.org/account/accomplishments/verify/THGS4G5T4JXR',
    Skills: 'Historical Attacks · Ethics in cybersecurity · Cybersecurity · NIST Cybersecurity Framework (CSF) · Information Security (INFOSEC)',
    Credential: 'Credential ID THGS4G5T4JXR',
    
  },
  {
    year: "Issued Jan 2024",
    degree: "HTML Essential TrainingHTML Essential Training",
    institute: "LinkedIn",
    details: `I have completed the HTML Essential Training, showcasing proficiency in HTML syntax, document structure, text formatting, hyperlinks, images, multimedia, forms, and tables.
    The benefits of working with UI frameworks.`,
    link: 'https://www.linkedin.com/learning/certificates/b3fa6f55d0ed0485e0a672b84510cf5b4ba43dce2adb461e4fd87aaa40c60333',
    Skills: 'Responsive Web Design · Cascading Style Sheets (CSS) · Hypertext Transfer Protocol Secure (HTTPS) · HTML · JavaScript',
    Credential: 'Credential ID b3fa6f55d0ed04',
    
  },
  {
    year: "Issued Jan 2024",
    degree: "META - Introduction to Front-End Development",
    institute: "Coursera Course Certificates",
    details: `Distinguish between front-end, back-end, and full-stack developers.
    Create and style a webpage with HTML and CSS.
    The benefits of working with UI frameworks.`,
    link: 'https://www.coursera.org/account/accomplishments/verify/BP4RW83WMHZK',
    Skills: 'Responsive Web Design · User Interface Design · HTML and CSS · Front-End Web Development · Web Development Tools',
    Credential: 'Credential ID BP4RW83WMHZK',
    
  },
  {
    year: "Issued Sep 2023",
    degree: "Web Development",
    institute: "Great Learning",
    details: `The Web Development Certification is a comprehensive program designed to equip individuals with the skills and knowledge needed to excel in the dynamic field of web development. This certification signifies a mastery of the fundamental concepts, technologies, and best practices essential for creating functional, user-friendly, and visually appealing websites.`,
    Skills: 'jQuery · PhpMyAdmin · Database Design · JavaScript · PHP · MySQL',
    
  },
  {
    year: "Issued 2018",
    degree: "Certified Software Engineer",
    institute: "Aptech",
    details: `Skills: jQuery · Cascading Style Sheets (CSS) · WordPress · PhpMyAdmin · Bootstrap (Framework) · HTML · JavaScript · PHP · Wordpress Development · Laravel`,
    Skills: 'jQuery · PhpMyAdmin · Database Design · JavaScript · PHP · MySQL',
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <hr />
          <p className="open-sans-font">Skills: {val.Skills}</p>
          <hr />
          {val.Credential && <span className="time open-sans-font">{val.Credential}</span>} <br />
          {val.link && <p className="time open-sans-font ">
            <Link className="text-white text-decoration-none" to={val.link} target="_blank" >View Certificate &nbsp;
             <i className="fa fa-external-link"></i>
            </Link></p> }
           
            
        </li>
      ))}
    </ul>
  );
};

export default Education;
