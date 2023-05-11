import React, { useContext, useState, useEffect } from "react";
// import images
import image1 from "../img/portfolio/1.jpg";
import image2 from "../img/portfolio/2.jpg";
import image3 from "../img/portfolio/3.jpg";
import image4 from "../img/portfolio/4.jpg";
import image5 from "../img/portfolio/5.jpg";
import image6 from "../img/portfolio/6.jpg";
import image7 from "../img/portfolio/7.jpg";
import image8 from "../img/portfolio/8.jpg";
import image9 from "../img/portfolio/9.jpg";
import image10 from "../img/portfolio/10.jpg";
import image11 from "../img/portfolio/11.jpg";
import image12 from "../img/portfolio/12.jpg";
import image13 from "../img/portfolio/13.jpg";
import image14 from "../img/portfolio/14.jpg";
import image15 from "../img/portfolio/15.jpg";
import image16 from "../img/portfolio/16.jpg";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import context
import { CursorContext } from "../context/CursorContext";
//import masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  },
  {
    src: image4,
    alt: "Image 4",
  },
  {
    src: image5,
    alt: "Image 5",
  },
  {
    src: image6,
    alt: "Image 6",
  },
  {
    src: image7,
    alt: "Image 7",
  },
  {
    src: image8,
    alt: "Image 8",
  },
  {
    src: image9,
    alt: "Image 9",
  },
  {
    src: image10,
    alt: "Image 10",
  },
  {
    src: image11,
    alt: "Image 11",
  },
  {
    src: image12,
    alt: "Image 12",
  },
  {
    src: image13,
    alt: "Image 13",
  },
  {
    src: image14,
    alt: "Image 14",
  },
  {
    src: image15,
    alt: "Image 15",
  },
  {
    src: image16,
    alt: "Image 16",
  },
];

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [gridImages, setGridImages] = useState(images.slice(0, 9));

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setGridImages((prevImages) => [
        ...prevImages,
        ...images.slice(prevImages.length, prevImages.length + 9),
      ]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images]);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    >
      <div
        className="container mx-auto h-full relative"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <ResponsiveMasonry
          className="flex flex-col lg:flex-row h-full items-center justify-start pt-24 lg:pt-36 pb-8 pr-3 pl-3"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="35px">
            {gridImages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </motion.section>
  );
};

export default Portfolio;
