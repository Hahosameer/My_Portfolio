
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
} from 'react-icons/si'

import './About.css'

const About = () => {

  const techIcons = [
    {
      icon: <SiReact />,
      position: { top: '10%', left: '30%' },
      delay: 0
    },
    {
      icon: <SiNodedotjs />,
      position: { bottom: '30%', left: '15%' },
      delay: 0.5
    }
  ]

  return (
    <section id="about" className="about">

      {/* Floating Tech Icons */}
      <div className="floating-icons">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              delay: item.delay,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>

        <div className="about-wrapper">
          <div className="about-content">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I am a passionate MERN Stack Developer focused on building modern and responsive web applications using React, Node.js, Express.js, and MongoDB.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I enjoy creating clean user interfaces, developing REST APIs, and learning modern web technologies to improve my development skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Currently, I am improving my frontend and backend development expertise by working on personal and practice projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My goal is to build professional full-stack applications and grow as a software developer in the tech industry.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About