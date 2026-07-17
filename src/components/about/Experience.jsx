import React from "react";

const experienceContent = [
  {
    year: "Oct 2025 - Present",
    position: "Senior Central Development Manager",
    compnayName: "HBOX Digital · Full-time",
    details: `Leading the Central Development Team at HBOX Digital while managing the architecture, development, and delivery of enterprise-level web applications. Responsible for full-stack development using PHP, MySQL, JavaScript, Bootstrap, APIs, and modern web technologies. Overseeing project planning, code quality, system optimization, team leadership, and the successful delivery of scalable business solutions.`,
  },
  {
    year: "Jul 2024 - Oct 2025",
    position: "Senior Web Developer",
    compnayName: "Ossols Pvt Ltd · Full-time",
    details: `Worked as a Senior Web Developer, developing and maintaining websites across WordPress, Shopify, Wix, and Squarespace. Specialized in custom theme and plugin development, website optimization, third-party API integrations, and delivering responsive, high-performance web solutions for clients.`,
  },
  {
    year: "Jun 2023 - Jul 2024",
    position: "Senior Web Developer",
    compnayName: "HBOX Digital · Full-time",
    details: `Developed scalable web applications using WordPress, Core PHP, MySQL, and Bubble.io. Built custom portals, business management systems, and responsive web solutions while collaborating with cross-functional teams to deliver high-quality digital products.`,
  },
  {
    year: "Mar 2022 - Sep 2023",
    position: "Team Lead & WordPress Developer",
    compnayName: "Salsoft Technologies (Pvt) Ltd · Full-time",
    details: `Led the CMS development team while developing custom WordPress websites, themes, and plugins. Worked on PSD/Figma to WordPress conversion, e-commerce solutions, JavaScript functionality, website optimization, and third-party integrations including Amelia Booking.`,
  },
  {
    year: "Mar 2021 - Feb 2022",
    position: "Team Lead & WordPress Developer",
    compnayName: "Chimp Advertising · Full-time",
    details: `Managed the CMS development team and supervised multiple web development projects. Developed custom WordPress solutions, responsive front-end interfaces, and optimized websites to improve performance, usability, and client satisfaction.`,
  },
  {
    year: "Jan 2020 - Jan 2021",
    position: "Web Developer",
    compnayName: "OneTen Design · Full-time",
    details: `Worked as a Web Developer while supporting business operations and managing development activities. Developed and maintained client websites, coordinated with the development team, and contributed to business growth through technical and administrative support.`,
  },
  {
    year: "Feb 2020 - Aug 2020",
    position: "WordPress Developer",
    compnayName: "Evolve Information Solutions · Full-time",
    details: `Developed and maintained WordPress websites with custom themes and plugins. Focused on responsive design, website performance optimization, bug fixing, and implementing client requirements using modern web development practices.`,
  },
  {
    year: "Feb 2018 - Jan 2019",
    position: "WordPress Developer",
    compnayName: "Reems Digital · Full-time",
    details: `Started my professional career as a WordPress Developer, building responsive websites, customizing themes, integrating plugins, and maintaining client projects while gaining strong experience in HTML, CSS, JavaScript, PHP, and WordPress development.`,
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
