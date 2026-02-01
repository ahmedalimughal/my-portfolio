import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Welcome to My Blog: A Journey in Full-Stack Web Development",
      commentor: "Ahmed Ali Mughal",
      date: "21 April 2023",
      tag: "wordpress, full-stack, web development, CMS",
      description1:
        "Hello everyone! My name is Ahmed Ali Mughal, and I am a Full-Stack Web Developer with over 5 years of experience. I specialize in WordPress, Shopify, Wix, Squarespace, and Plugin Development. Currently, I work as a Senior Web Developer at Ossols Pvt Ltd, and I am also available for freelance projects on platforms like Upwork and GitHub.",
      description2:
        "My passion for web development started back in 2018, when I first encountered the power of the internet. The idea of creating something that people all around the world could interact with fascinated me. I started learning HTML and CSS, and soon I was hooked. Over the years, I have expanded my skills to include JavaScript, PHP, and various CMS platforms.",
      description3:
        "WordPress is a fantastic platform for both developers and users. Its flexibility and extensive library of plugins and themes make it possible to create anything from a simple blog to a complex e-commerce site. Here are a few reasons why I enjoy working with WordPress: Ease of Use: WordPress is user-friendly, making it accessible even for those with little technical knowledge. Customizability: With thousands of themes and plugins available, the customization options are virtually endless. Community Support: The WordPress community is vast and supportive, offering solutions and ideas through forums, tutorials, and meetups.",
      description4:
        "At Ossols Pvt Ltd, I have had the opportunity to work on a variety of projects, ranging from small business websites to large-scale e-commerce platforms. Here are some areas I specialize in: CMS Platforms: WordPress, Shopify, Wix, Squarespace. Plugin Development: Creating custom plugins to extend the functionality of WordPress sites. Web Development: Full-stack development, including front-end and back-end technologies. E-Commerce: Developing and optimizing online stores for maximum performance and sales.",
      description5:
        "I am always excited to take on new challenges and collaborate with clients to bring their visions to life. Whether you need a new website, a custom plugin, or an e-commerce solution, I am here to help. Feel free to check out my profiles on [Upwork](https://www.upwork.com/freelancers/~018882df2742b860b9) and [GitHub](https://github.com/ahmedalimughal), or contact me directly through my website. Thank you for visiting my blog. Stay tuned for more posts about web development tips, tutorials, and industry insights! Best regards, Ahmed Ali Mughal."
    }
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
