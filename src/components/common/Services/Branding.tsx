import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight, Check } from "lucide-react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import Breadcrum from "../../../assets/breadcrum-second.jpg";
import Img1 from "../../../assets/Branding/1.jpg";
import Img2 from "../../../assets/Branding/2.jpg";
import Img3 from "../../../assets/Branding/3.jpg";
import Img4 from "../../../assets/Branding/4.jpg";
import Img5 from "../../../assets/Branding/5.jpg";
import Img6 from "../../../assets/Branding/6.jpg";
import Img7 from "../../../assets/Branding/7.jpg";
import Img8 from "../../../assets/Branding/8.jpg";
import Img9 from "../../../assets/Branding/9.jpg";
import Img10 from "../../../assets/Branding/10.jpg";
import Img11 from "../../../assets/Branding/11.jpg";
import Img12 from "../../../assets/Branding/12.webp";
import Img13 from "../../../assets/Branding/13.jpg";
import Img14 from "../../../assets/Branding/14.jpg";
import Img15 from "../../../assets/Branding/15.jpg";

import BigBanner from "../../../assets/Branding/branding-big.jpg";
import packagesData from "../../../data/all-packages.json";
import ContactFormSection from "../sections/ContactForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Branding() {
  const service = {
    title: "Branding",
    description: `
             
In the competitive world, branding is more important than ever. Companies can create strong brand recognition and produce loyal customers when they utilize strategic brand identity through solid branding services. Keeping abreast of the market and knowing what the audience prefers are essential to a good branding service. If done correctly and executed effectively, Professional branding services can take your product and turn it into a trusted, recognizable top seller for your identified customer.
            `,
    image: BigBanner,
    portfolioImages: [
      Img1,
      Img2,
      Img3,
      Img4,
      Img5,
      Img6,
      Img7,
      Img8,
      Img9,
      Img10,
      Img11,
      Img12,
      Img13,
      Img14,
      Img15,
    ],
  };
  const packages = packagesData.packages[0].branding;

  return (
    <>
      <Helmet>
        <title>Best Branding Services In Pakistan | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Quick Owl Graphics provides the best branding services in Pakistan, compelling brand identities to elevate businesses & drive success."
        />
        <meta
          name="keywords"
          content="branding agency, visual identity, corporate branding, brand guidelines, business branding, brand strategy, logo and branding, Quick Owl Graphics branding"
        />
        <link rel="canonical" href="https://quickowlgraphics.com/branding/" />
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
                  Start your <span className="text-red-600">business</span> by
                  converting it to A <span className="text-red-600">brand</span>
                </h2>
                <p className="text-gray-300">
                  You have to have a clear identity of what you are in the
                  crowded marketplace. Customers often associate that with a
                  recognizable brand, and that’s where expert branding services
                  will help. We offer some of the affordable branding services
                  designed to unleash your product’s potential and make it
                  connect with your audience. How your brand is portrayed can be
                  key to its success, so why keep our branding firm packages as
                  cheap as possible, all while staying high in quality? Being
                  one of the best branding services companies in Pakistan, our
                  team offers strategic, innovative solutions to enhance your
                  brand. With help from our top branding services, you can
                  become a profitable, enduring presence in your industry by
                  creating a brand that never stops growing.
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
                Creating engaging digital properties and unique brand identities
                can help a business stand out from the competition and attract
                more customers. It's great to see a focus on creativity and
                exclusivity in this approach.
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
