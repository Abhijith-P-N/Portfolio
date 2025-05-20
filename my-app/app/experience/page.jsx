"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./experience.module.css";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience">
      <motion.div
        className={styles.experienceSection}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1 className={styles.title} variants={item}>
          Experience
        </motion.h1>

        <motion.p className={styles.message} variants={item}>
          🚀 I’m currently a student exploring the digital universe.
        </motion.p>

        <motion.p className={styles.subtext} variants={item}>
          While I don’t have formal work experience yet, I'm actively building
          projects, learning cutting-edge tech, and pushing the boundaries of
          what I can create. This is just the beginning.
        </motion.p>
      </motion.div>
    </section>
  );
}
