import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight, Check } from "lucide-react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import Breadcrum from "../../../assets/breadcrum-second.jpg";
import Img1 from "../../../assets/2d-animation/1.jpg";
import Img2 from "../../../assets/2d-animation/2.jpg";
import Img3 from "../../../assets/2d-animation/3.jpg";
import Img4 from "../../../assets/2d-animation/4.webp";
import Img5 from "../../../assets/2d-animation/5.webp";
import Img6 from "../../../assets/2d-animation/6.webp";
import BigBanner from "../../../assets/2d-animation/2d-big.gif";
import packagesData from "../../../data/all-packages.json";
import ContactFormSection from "../sections/ContactForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Twod_Animation() {
  const service = {
    title: "2d Animation",
    description: `
             Explore the world of Quick Owl Graphics’ premium 2D animation services where creativity takes form. Unleash the full potential of the best 2D animation like no other with our talented team that breathes life into stories in a way that is seamlessly smooth and visually stunning in motion. Whether you wish to boost your brand message or develop captivating visual content, we provide the finest 2d character animation solutions designed according to your preferences. Let Quick Owl Graphics transform your thoughts into powerful images with a lasting impact.
            `,
    image: BigBanner,
    portfolioImages: [Img1, Img2, Img3, Img4, Img5, Img6],
  };
  const packages = packagesData.packages[0]["2dAnimation"];

  return (
    <>
      <Helmet>
        <title>
          2D Video Animation Services In Pakistan | Quick Owl Graphics
        </title>
        <meta
          name="description"
          content="Quick Owl Graphics provides exceptional video animation services in Pakistan, specializing in creative 2D animation for impactful storytelling."
        />
        <meta
          name="keywords"
          content="2D animation, explainer videos, motion graphics, whiteboard animation, cartoon animation, video production, Quick Owl Graphics animation"
        />
        <link
          rel="canonical"
          href="https://quickowlgraphics.com/2d-animation/"
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
                  width={800}
                  height={450}
                  className="object-fill w-full h-full"
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
                  Our versatile{" "}
                  <span className="text-red-600">2D animation</span> video
                  Process
                </h2>
                <p className="text-gray-300">
                  Tap into the power of engaging stories with Quick Owl
                  Graphics' best 2D animation services in Pakistan. They have
                  extensive experience in many fields, including education,
                  commercial, entertainment, and healthcare. Regardless of
                  whether you want to inform, entertain, or use branded content,
                  their animations are customized to match your brand and beat
                  it into the minds of your audience. Quick Owl Graphics is a
                  top 2D animation services in Pakistan. We are renowned for
                  creating environment animations that take your imagination to
                  different places– fantasy worlds or a peak in reality. Their
                  2D Character Animation Service brings emotional depth and
                  personality to your stories, truly allowing characters to come
                  alive on screen. Props are also well animated with attention
                  to detail, which adds to the realism and immersion. Their
                  process includes concept to script,  design, rough animation
                  to final production, and exceptional work. They are known for
                  being the best 2D animation company in Pakistan. They are the
                  most sought-after 2D animation studio in Pakistan, owing to
                  their ability to create impactful animations for your
                  audience. For the best Top 2D animation in Pakistan, you can
                  rely on Quick Owl Graphics' function to ensure that we take
                  your brand’s visual storytelling to exponential levels.
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
