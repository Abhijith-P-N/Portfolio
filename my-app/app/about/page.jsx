"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="ection" id="about">
      <motion.div
        className={`${styles.aboutMe} ${styles.lightBg}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.header className={styles.aboutHeader} variants={itemVariants}>
          <h1 className={styles.neonText}>About Me</h1>
          <motion.p
            className={`${styles.subtitle} ${styles.glowyText}`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          >
            /whoami
          </motion.p>
        </motion.header>

        <motion.main className={styles.aboutContent} variants={containerVariants}>
          <motion.section className={styles.intro} variants={itemVariants}>
            <h2 className={styles.holographicHeading}>Who I Am</h2>
            <p className={styles.typewriterText}>
              Hi! I'm <span className={styles.highlightText}>Abhijtih PN</span>, a{" "}
              <span className={styles.glitchText}>Student</span> crafting digital
              experiences at the intersection of design and technology.
            </p>
          </motion.section>

          <motion.section className={styles.skills} variants={itemVariants}>
            <h2 className={styles.holographicHeading}>My Stack</h2>
            <ul className={styles.techGrid}>
              {["React", "Node.js", "Three.js", "WebGL", "GSAP"].map((tech) => (
                <motion.li
                  key={tech}
                  className={styles.techItem}
                  whileHover={{ scale: 1.1, color: "#0055ff" }}
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.section>

         <motion.section className={styles.hobbies} variants={itemVariants}>
  <h2 className={styles.holographicHeading}>Beyond Code</h2>
  <div className={styles.particlesContainer}>
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className={styles.particle}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
    <div className={styles.activityGrid}>
      <motion.div 
        className={styles.activityCard}
        whileHover={{ y: -5 }}
      >
        <div className={styles.activityIcon}>⚽</div>
        <h3 className={styles.activityTitle}>Football</h3>
        <p className={styles.activityDesc}>Weekend defender & midfield maestro</p>
      </motion.div>
      
      <motion.div 
        className={styles.activityCard}
        whileHover={{ y: -5 }}
      >
        <div className={styles.activityIcon}>⛰️</div>
        <h3 className={styles.activityTitle}>Trekking</h3>
        <p className={styles.activityDesc}>Conquering peaks one trail at a time</p>
      </motion.div>
      
      <motion.div 
        className={styles.activityCard}
        whileHover={{ y: -5 }}
      >
        <div className={styles.activityIcon}>✈️</div>
        <h3 className={styles.activityTitle}>Exploring</h3>
        <p className={styles.activityDesc}>Discovering hidden gems worldwide</p>
      </motion.div>
    </div>
  </div>
</motion.section>
        </motion.main>
      </motion.div>
    </section>
  );
}
