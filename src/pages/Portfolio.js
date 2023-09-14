import React, { useContext, useState, useEffect } from "react";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import context
import { CursorContext } from "../context/CursorContext";
//import axios
import axios from "axios";
//import infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
//import loading gif
import loadingIcon from "../img/Loading_icon.gif";

const Portfolio = () => {
  const { mouseEnterImageHandler, mouseLeaveHandler } =
    useContext(CursorContext);
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1); //Math.floor(Math.random() * 10) + 1

  const fetchImages = () => {
    axios
      .get(
        `https://blogspot.raphaelkoutoulogenis.com/wp-json/wp/v2/media?_fields=source_url,alt_text&page=${page}`
      )
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        console.log(res.data);
        setImages([...images, ...res.data]);
        setIsLoaded(true);
        setPage(page + 1);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
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
      <div className="container mx-auto h-full relative">
        <InfiniteScroll
          onMouseEnter={mouseEnterImageHandler}
          onMouseLeave={mouseLeaveHandler}
          dataLength={images}
          next={() => fetchImages()}
          hasMore={true}
          loader={<img src={loadingIcon} alt="Loading..." />}
        >
          <div
            className="flex-col lg:image-grid"
            style={{ marginTop: "100px" }}
          >
            {loaded
              ? images.map((image, index) => (
                  <div className="image-item">
                    <img
                      key={index}
                      src={image.source_url}
                      alt={image.alt_text}
                      className="w-full h-full object-cover mb-5"
                    />
                  </div>
                ))
              : ""}
          </div>
        </InfiniteScroll>
      </div>
    </motion.section>
  );
};

export default Portfolio;
