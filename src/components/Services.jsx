import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
  SiGraphql,
} from 'react-icons/si'

import { FaMobileAlt, FaServer } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <SiReact />,
      title: 'Frontend Development',
      description:
        'Building responsive and interactive user interfaces using React, HTML, CSS, and modern JavaScript.',
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description:
        'Creating REST APIs using Node.js and Express.js with secure and efficient server-side logic.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Web Apps',
      description:
        'Developing mobile-friendly and responsive web applications for all screen sizes.',
    },
    {
      icon: <SiGraphql />,
      title: 'API Integration',
      description:
        'Connecting frontend with backend using REST APIs for smooth data flow between systems.',
    },
    {
      icon: <SiNodedotjs />,
      title: 'Full Stack Projects',
      description:
        'Developing complete MERN stack applications from frontend to backend with database integration.',
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I focus on building clean, responsive, and functional web applications using modern web technologies.
        </motion.p>

        <div className="services-grid">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-professional"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon-professional">
                {service.icon}
              </div>

              <h3 className="service-title-professional">
                {service.title}
              </h3>

              <p className="service-description-professional">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services