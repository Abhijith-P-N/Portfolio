'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Agronomy - Agriculture Website",
      description: "A comprehensive agricultural platform connecting farmers with modern farming techniques, market prices, and community support.",
      technologies: ["React", "Node.js", "MongoDB", "GIS Mapping"],
      icon: "🌱",
      color: "linear-gradient(135deg, rgba(245,247,250,0.9) 0%, rgba(228,232,235,0.9) 100%)"
    },
    {
      id: 2,
      title: "Secure Django Login System",
      description: "Advanced authentication system with multi-factor authentication, brute force protection, and activity monitoring.",
      technologies: ["Django", "PostgreSQL", "Redis", "JWT"],
      icon: "🔒",
      color: "linear-gradient(135deg, rgba(243,244,246,0.9) 0%, rgba(229,231,235,0.9) 100%)"
    },
    {
      id: 3,
      title: "Human Detection Server",
      description: "Real-time human detection system using computer vision to analyze video feeds and detect human presence.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
      icon: "👁️",
      color: "linear-gradient(135deg, rgba(249,250,251,0.9) 0%, rgba(243,244,246,0.9) 100%)"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className={styles.projectsSection} ref={ref}>
      <div className={styles.heroHeading}>
        <motion.h1
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={titleVariants}
          className={styles.mainTitle}
        >
          My Projects
        </motion.h1>
        <motion.div 
          className={styles.titleUnderline}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <motion.div 
        className={styles.container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={container}
      >
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={item}
              whileHover="hover"
              style={{ background: project.color }}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>{project.icon}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className={styles.techPill}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className={styles.projectGlow} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;