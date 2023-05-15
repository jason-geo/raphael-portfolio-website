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
  const { mouseEnterImageHandler, mouseLeaveHandler } =
    useContext(CursorContext);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(
          `https://insidethebox.dev/wp-json/wp/v2/media?_fields=source_url,alt_text&page=${page}`
        );
        const data = await response.json();
        setImages((prevImages) => [
          ...prevImages,
          ...data.map((m) => {
            return {
              src: m.source_url,
              alt: m.alt_text,
            };
          }),
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedia();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
        console.log('newpage',page);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        onMouseEnter={mouseEnterImageHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <ResponsiveMasonry
          className="flex flex-col lg:flex-row items-center justify-start pt-24 lg:pt-36 pb-8 pr-3 pl-3"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="35px">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </motion.section>
  );
};

export default Portfolio;
