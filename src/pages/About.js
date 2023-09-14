import React, { useContext } from "react";
// import images
import RaphaelImg from "../img/about/Raphael.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterTextHandler, mouseEnterImageHandler, mouseLeaveHandler } =
    useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div
            onMouseEnter={mouseEnterImageHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
          >
            <img src={RaphaelImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
            onMouseEnter={mouseEnterTextHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm px-10">
              Raphael Koutoulogenis is a photographer specializing in portrait,
              fashion, and real estate photography. With a keen eye for
              capturing the essence of his subjects and an impeccable attention
              to detail, Raphael's work reflects his passion for visual
              storytelling. <br />
              <br />
              Residing in the picturesque island of Zakynthos, Greece, Raphael
              draws inspiration from the breathtaking natural surroundings that
              serve as his backdrop. His portfolio showcases a diverse range of
              captivating images that transport viewers to extraordinary moments
              and evoke a sense of wonder. Explore Raphael's exceptional work
              and let his photography tell your unique story.
            </p>
            <Link to={"/"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
