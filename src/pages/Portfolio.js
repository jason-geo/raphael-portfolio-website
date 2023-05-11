import React, { useContext, useState, useEffect } from "react";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import context
import { CursorContext } from "../context/CursorContext";
//import masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [gridImages, setGridImages] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(
          "https://insidethebox.dev/wp-json/wp/v2/media"
        );
        const data = await response.json();
        setImages(
          data.map((m) => {
            return {
              src: m.source_url,
              alt: m.alt_text,
            };
          })
        );
        setGridImages(images.slice(0, 9));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedia();
  }, [images]);

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
