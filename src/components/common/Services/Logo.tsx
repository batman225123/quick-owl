import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight, Check } from "lucide-react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import Breadcrum from "../../../assets/breadcrum-second.jpg";
import Logo1 from "../../../assets/Logo/logo-1.jpg";
import Logo2 from "../../../assets/Logo/logo-2.jpg";
import Logo3 from "../../../assets/Logo/logo-3.jpg";
import Logo4 from "../../../assets/Logo/logo-4.jpg";
import Logo5 from "../../../assets/Logo/logo-5.jpg";
import Logo6 from "../../../assets/Logo/logo-6.jpg";
import Logo7 from "../../../assets/Logo/logo-7.jpg";
import Logo8 from "../../../assets/Logo/logo-8.jpg";
import BigLogo from "../../../assets/Logo/Big-Logo.png";
import packagesData from "../../../data/all-packages.json";
import ContactFormSection from "../sections/ContactForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Logo() {
  const service = {
    title: "Creative Logo Design",
    description: `Want to improve your brand's identity with a unique and outstanding logo? Quick Owl Graphics' professional logo design services not only deliver visually appealing logos, but their designs also convey your message and mission. We are the best logo designs and create the most excellent and unique logos for your business. Logo Design Inspiration Our logo design services enable enterprises to achieve a brand image built on professionalism and innovation with high-quality logos across digital and print media, as well as physical results in the form of signage and clothing. Count on Quick Owl Graphics to create the logo that gets noticed and sets you apart.`,
    image: BigLogo,
    portfolioImages: [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8],
  };
  const packages = packagesData.packages[0].logo;

  return (
    <>
      <Helmet>
        <title>Logo Design Company In Pakistan | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Quick Owl Graphics is a premier logo design company in Pakistan, delivering unique, memorable, and professional brand identities."
        />
        <meta
          name="keywords"
          content="logo design, custom logo, brand identity, business logo, logo creation, professional logo design, affordable logos, Quick Owl Graphics logo"
        />
        <link
          rel="canonical"
          href="https://quickowlgraphics.com/logo-design/"
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
                  Affordable <span className="text-red-600">Logo Design</span>{" "}
                  Services
                </h2>
                <p className="text-gray-300">
                  Quick Owl Graphics provides budget-friendly logo design
                  solutions to bring the branding needs of startups and
                  established businesses to life. We have a team of logo
                  designers focusing on creating an impressive Best Logo Design
                  Service for you through various custom logo design services to
                  help your brand or business get ahead with a clean and
                  memorable logo. We realize that a logo is more than a symbol;
                  it’s your brand’s public identity, so our process revolves
                  around originality, relevancy, and marketability. From
                  emblems, mascots, wordmarks, letterforms, and a combination of
                  our special initiatives to help communicate your brand, we are
                  ready to lend a hand no matter the design. We delight in
                  providing the leading logo design in Pakistan, combining
                  creativity with strategy to ensure that each concept is
                  tailored specifically to your business aims. Quick Owl
                  Graphics offers a range of templates and a complete bespoke
                  logo design service for a logo that doesn't just look good,
                  but says what you need it to say. Trust us to deliver a Top
                  Logo designs that visualizes your business so you stand out in
                  a sea of competition. Quick Owl Graphics, we are good at logo
                  designing. We provide cheap and affordable logo design
                  services to businesses from all segments. Whether you are a
                  startup or a Fortune company, our logo design services in
                  Pakistan are designed to make lasting impressions and provide
                  real value. Emphasizing creativity, strategy, and
                  individuality, we ensure no two logos are identical and
                  express your brand identity. Get the best logo design in
                  Pakistan with Quick Owl Logo Design company, were quality
                  meets affordability.
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
