import { motion } from "framer-motion";
import ContactFormSection from "../components/common/sections/ContactForm";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Get in touch with our digital agency for logo design, web development, and branding projects. We respond within 24 hours!"
        />
        <meta
          name="keywords"
          content="contact digital agency, web design quote, logo design inquiry, Quick Owl Graphics contact, animation studio contact, branding consultation"
        />

        <link rel="canonical" href="https://quickowlgraphics.com/contact/" />

      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="container mx-auto px-4 py-32 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Get In <span className="text-red-600">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              We'd love to hear from you. Reach out to discuss your project or
              ask any questions.
            </motion.p>
          </div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />
        </motion.section>

        {/* Contact Form Section */}
        <ContactFormSection />
      </div>
    </>
  );
}
