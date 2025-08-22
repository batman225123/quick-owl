import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight, Check } from "lucide-react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import Breadcrum from "../../../assets/breadcrum-second.jpg";
import Img1 from "../../../assets/3d-animation/3D-big.gif";
import Img2 from "../../../assets/3d-animation/2.gif";
import Img3 from "../../../assets/3d-animation/3.gif";
import Img4 from "../../../assets/3d-animation/4.gif";
import Img5 from "../../../assets/3d-animation/5.gif";
import Img6 from "../../../assets/3d-animation/6.gif";
import Img7 from "../../../assets/3d-animation/7.gif";
import Img8 from "../../../assets/3d-animation/8.gif";
import Img9 from "../../../assets/3d-animation/9.gif";

import BigBanner from "../../../assets/3d-animation/3d-1.gif";
import packagesData from "../../../data/all-packages.json";
import ContactFormSection from "../sections/ContactForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Threed_Animation() {
  const service = {
    title: "3D Animation Video",
    description: `
             Quick Owl Graphics is the best source where you can have the most stunning 3D animation video services at prices that are within your means! Focusing on 3D animation, we bring concepts to life with amazing visuals and fluid movement. We are known to be one of the top 3D animation companies in the area, and we have a good mix of creativity and technical skills, the best 3D Animation Services in Pakistan. We’re a reliable 3D animation company in Pakistan. We ensure each project syncs with your brand and appeals to your audience. Our affordable 3D animation services in Pakistan provide brands with professional-quality animations at an affordable price.
            `,
    image: BigBanner,
    portfolioImages: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9],
  };
  const packages = packagesData.packages[0]["3dAnimation"];

  return (
    <>
      <Helmet>
        <title>3D Animation Services In Pakistan | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Quick Owl Graphics offers professional 3D animation services in Pakistan, creating captivating visuals for impactful storytelling & branding."
        />
        <meta
          name="keywords"
          content="3D animation, product animation, architectural visualization, 3D modeling, CGI videos, animation studio, Quick Owl Graphics 3D"
        />
        <link
          rel="canonical"
          href="https://quickowlgraphics.com/3d-animation/"
        />
      </Helmet>

      <main className="back-primary-black w-full min-h-screen overflow-x-hidden">
        <div className="back-black-charcoal text-white">
          {/* Hero Section */}
          <motion.section
            style={{
              background: `url(${Breadcrum})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative min-h-[100%] flex items-center justify-center text-center text-white py-52 aspect-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4 "
            >
              <h1 className="text-3xl md:text-6xl font-bold mb-6">
                {service.title} <span className="text-red-600">Services</span>
              </h1>
              <p className="text-xs md:text-xl text-gray-300 max-w-3xl text-center mx-auto">
                {service.description}
              </p>
            </motion.div>
          </motion.section>

          {/* Image + Content Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-fill w-full h-full border-red-600/20 shadow-lg transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl uppercase font-extrabold">
                  Quick Owl Graphics{" "}
                  <span className="text-red-600">3D Animation</span> Video
                  Services
                </h2>
                <p className="text-gray-300">
                  Quick Owl Graphics specializes in providing high-quality 3D
                  animation services that combine technical excellence with
                  creative prowess to give you visually stunning and emotionally
                  compelling content. They are experts in 3D animation services,
                  ranging from dynamic 3D product animation services for
                  presenting products with a high level of detail and realism,
                  to 3D character animation services that primarily cater
                  towards making lifelike characters come alive. For games,
                  learning materials, or branding, their 3D animations are
                  designed to engage end users in a way that resonates with
                  them. Quick Owl Graphics is also best known for offering the
                  finest 3D animation services in Pakistan, thus making
                  themselves a reliable partner in innovation and quality. They
                  are known to be one of the best 3D animation content creators,
                  and their work shows a nice mix between creativity and
                  technicality.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Portfolio Carousel */}
          <section className=" px-4 pt-26 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 container mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Our <span className="text-red-600">Outstanding </span> Portfolio
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto" />
              <p className="text-sm md:text-base font-bold text-center mb-6 mt-4">
                Our commitment to excellence is something that we take great
                pride in, and is evident in every aspect of our workflow. We
                strive to deliver exceptional results with every project we
                undertake, and we believe that our impressive portfolio is a
                testament to the impact that.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="!pb-12"
              >
                {service.portfolioImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative overflow-hidden  aspect-square"
                    >
                      <img
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="object-cover w-full h-96"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </section>

          {/* Packages Section */}
          <section className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-red-600 font-medium tracking-widest">
                OUR PACKAGES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Choose Your <span className="text-red-600">Plan</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto" />
              <p className="text-sm md:text-base font-bold mt-4 mb-6">
                Ready to get started? Experience the industry’s best design
                deals structured according to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-black/80 to-black/60 border border-white/10 rounded-xl overflow-hidden hover:border-red-600/30 transition-all"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                      <span className="text-3xl font-bold text-red-600">
                        {pkg.price}
                      </span>
                    </div>

                    <div className="h-px bg-white/10 my-6" />

                    <div className="h-64 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                      <ul className="space-y-4">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <Check className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Link to="/contact-us">
                        <button className="w-full py-3 bg-red-600/10 border cursor-pointer border-red-600/30 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600/20 transition-colors">
                          Buy Now <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <ContactFormSection />
        </div>
      </main>
    </>
  );
}
