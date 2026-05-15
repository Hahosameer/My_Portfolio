import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaMobileAlt, FaTasks } from 'react-icons/fa'
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiReact,
  SiInstagram,
  SiWhatsapp
} from 'react-icons/si'

import site from '../data/site.json'
import './Hero.css'

const roles = [
  'Sameer Mern Stack Developer',
  'React Developer',
  'Frontend Developer',
  'Backend Learner'
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const { contact } = site

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const quickStats = [
    { icon: <SiReact />, value: '5+', label: 'React Projects' },
    { icon: <FaTasks />, value: '10+', label: 'Practice Projects' },
    { icon: <FaCalendar />, value: '1+', label: 'Years Learning' },
    { icon: <FaMobileAlt />, value: 'MERN', label: 'Stack Developer' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* TITLE */}
          <h1 className="hero-title">

            <motion.span
              className="hero-title-main"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* <span className="title-part-1">Full Stack</span> */}

              <span className="title-part-2 typing-animation">
                {roles[currentRole]}
              </span>
            </motion.span>

            <motion.span
              className="hero-title-sub"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate About Building Modern Web Applications
            </motion.span>

          </h1>

          {/* DESCRIPTION */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build responsive and modern web applications using React,
            Node.js, Express.js, and MongoDB. Passionate about learning
            new technologies and improving my development skills.
          </motion.p>

          {/* SOCIAL LINKS */}
          <motion.div
            className="hero-contacts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >

            <motion.a href={`mailto:${contact.email}`} className="contact-link-hero">
              <SiGmail />
            </motion.a>

            <motion.a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-hero">
              <SiLinkedin />
            </motion.a>

            <motion.a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link-hero">
              <SiGithub />
            </motion.a>

            {contact.instagram && (
              <motion.a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="contact-link-hero">
                <SiInstagram />
              </motion.a>
            )}

            {contact.whatsapp && (
              <motion.a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-link-hero">
                <SiWhatsapp />
              </motion.a>
            )}

          </motion.div>

          {/* QUICK STATS */}
          <motion.div
            className="quick-stats-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >

            <div className="quick-stats-horizontal">

              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="quick-stat-pill"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >

                  <span className="stat-icon-pill">
                    {stat.icon}
                  </span>

                  <div className="stat-content-pill">
                    <span className="stat-value-pill">{stat.value}</span>
                    <span className="stat-label-pill">{stat.label}</span>
                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero