import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Award, Palette, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-red-600" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technology designed to push boundaries",
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Award Winning",
      description: "Recognized industry leader for excellence",
    },
    {
      icon: <Palette className="w-8 h-8 text-red-600" />,
      title: "Beautiful Design",
      description: "Aesthetic meets functionality in every detail",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-red-600" />,
      title: "Client Focused",
      description: "Your success is our top priority",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-14 overflow-hidden back-black-charcoal text-white"
      id="about"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900/20 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Crafting <span className="text-red-600">Digital</span> Excellence
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-red-600/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative rounded-xl overflow-hidden border border-red-600/20">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our team"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why <span className="text-red-600">Quick Owl Graphics Is </span>
              the Smart Choice for a Digital Agency
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Quick Owl Graphics ranks among the top companies when selecting
              the best digital marketing agency Pakistan. They are a team of
              experienced professionals who specialize in providing digital
              marketing services that work with and match your brand’s
              objectives.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Quick Owl Graphics, An Innovative Digital Marketing Expert in
              Pakistan, is a mix of new-age creativity and strategy, unlike
              conventional marketing firms in Pakistan. The one reason behind
              their success is that they offer and deliver all-in-one solutions.
              They are among the authentic digital agencies in Pakistan covering
              SEO, branding, design, and social media all in one go.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-black/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-red-600/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-black rounded-lg border border-white/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <Link
                to={`/about`}
                className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
