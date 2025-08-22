import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  PenTool,
  Code,
  Globe,
  Image,
  Type,
  Share2,
  Film,
  Box,
} from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const services = [
    {
      link: "/logo-design",
      icon: <PenTool className="w-8 h-8" />,
      title: "Logo Design",
      description: "Unique brand identities that make lasting impressions",
    },
    {
      link: "/web-development",
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Fast, responsive websites with cutting-edge technology",
    },
    {
      link: "/branding",
      icon: <Globe className="w-8 h-8" />,
      title: "Branding",
      description: "Complete brand systems for cohesive recognition",
    },
    {
      link: "/banner-design",
      icon: <Image className="w-8 h-8" />,
      title: "Banner Design",
      description: "Eye-catching visuals that convert viewers to customers",
    },
    {
      link: "/content-writing",
      icon: <Type className="w-8 h-8" />,
      title: "Content Writing",
      description: "Compelling copy that engages and persuades",
    },
    {
      link: "/social-media-marketing",
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Strategies that grow your audience and engagement",
    },
    {
      link: "/2d-animation",
      icon: <Film className="w-8 h-8" />,
      title: "2D Animation",
      description: "Bringing stories to life with vibrant motion graphics",
    },
    {
      link: "/3d-animation",
      icon: <Box className="w-8 h-8" />,
      title: "3D Animation",
      description: "Immersive dimensional visuals for maximum impact",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden back-black-charcoal text-white"
      id="services"
    >
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.15 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-red-900/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-red-900/15 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-medium tracking-widest">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-red-600">Creative</span> Solutions
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-12" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg"
          >
            We deliver comprehensive digital services tailored to elevate your
            brand and engage your audience across all platforms.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.07,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link to={`${service.link}`}>
                <div className="absolute -inset-0.5 bg-red-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full bg-gradient-to-b from-black/80 to-black/90 rounded-xl border border-white/10 p-8 overflow-hidden group-hover:border-red-600/30 transition-all duration-300">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center border border-red-600/20 group-hover:bg-red-600/20 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's create something
            extraordinary together.
          </p>
          <Link to="/contact-us">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(199, 0, 57, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium cursor-pointer hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
