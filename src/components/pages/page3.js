import * as React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const Page3 = ({ match }) => (
  <div className="innerpage container">
    <motion.div
      className="single focuspage"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <motion.div className="back" variants={backVariants}>
        <NavLink to="/" className="back">
          ← Back
        </NavLink>
      </motion.div>
      <h1 className="focusheader">Brake service</h1>
      <div className="justify-content-md-center row">
        <motion.img
          variants={imageVariants}
          src={"../images/brakenice.jpg"}
          alt="image"
          className="focusimage img-fluid"
        />
      </div>{" "}
      <div className="justify-content-md-center row">
        <div className="focustext">
        We also service brakes all makes and models.
          <NavLink to="/contact" className="focuscontactus"><div className="focuscontactus">Contact us today!</div></NavLink>
        </div>
      </div>
    </motion.div>
  </div>
);
