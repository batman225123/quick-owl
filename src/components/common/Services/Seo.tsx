import { motion } from "framer-motion";

import { ArrowRight, Check } from "lucide-react";
import Breadcrum from "../../../assets/breadcrum-second.jpg";
import BigBanner from "../../../assets/Seo/digital 2 img.jpg";
import packagesData from "../../../data/all-packages.json";
import ContactFormSection from "../sections/ContactForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function SocialMediaMarketing() {
  const service = {
    title: "Social Media Marketing",
    description: `
             Social Media Marketing will change how you do business and help you reach a larger base of people than ever before. Thus, building a strong brand identity that positions you as a thought-leading authority in your niche can attract attention, increase engagement, and get visitors to your properties regularly. We see it as our job to make your brand more visible, relatable, and trustworthy (which is super important when it comes to having followers that convert into customers). Here at Quick Owl Graphics, we provide affordable social media marketing solutions for your business. Our team of social media marketing experts concentrates on expanding your reach, enhancing engagement, and driving conversions. If you're a start-up or a growing business, we provide the best social media marketing services all around that have been built to scale your business and get you ahead of the competition. Get real as it gets results with our results-driven social media marketing that is built for the long run!
            
            `,
    image: BigBanner,
  };
  const packages = packagesData.packages[0].marketing;

  return (
    <>
      <Helmet>
        <title>
          Best Social Media Marketing Company In Pakistan | Quick Owl Graphics
        </title>
        <meta
          name="description"
          content="Quick Owl Graphics best social media marketing company in Pakistan, delivering innovative strategies to boost online presence."
        />
        <meta
          name="keywords"
          content="social media marketing, SMM agency, Instagram marketing, Facebook ads, LinkedIn growth, TikTok strategy, social media management, Quick Owl Graphics SMM"
        />
        <link
          rel="canonical"
          href="https://quickowlgraphics.com/social-media-marketing/"
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
                  Cost Effective{" "}
                  <span className="text-red-600">Social Media Marketing</span>{" "}
                  for Small Businesses
                </h2>
                <p className="text-gray-300">
                  Social media marketing has become a core part of promoting
                  businesses' exposure and reaching their constituents. We
                  provide cheap social media marketing services for your own
                  business. Our affordable social media marketing services
                  experts know how to create engaging and impactful campaigns
                  that extend beyond Facebook and Instagram, reaching all other
                  platforms, including Twitter adverts and many others. From
                  crafting compelling content to engaging with your audience, we
                  offer full-fledged expert social media marketing solutions to
                  increase brand loyalty and deliver tangible results as a top
                  social media marketing agency in Pakistan. Our approach is
                  simple: we believe all that matters is delivering measurable
                  growth to your business, so that would be the basic foundation
                  upon which we build your social media management services and
                  strategy. Whether you are a new company or a historic brand,
                  our social media agency Pakistan can assist you in designing
                  and executing a plan that aligns with your goals and
                  objectives. Rely on the name of one of the leading social
                  media marketing agencies in Pakistan. Select Quick Owl
                  Graphics, Pakistan's best social media agency, for the best
                  SMM services and facilities to help you grow.
                </p>
              </motion.div>
            </div>
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
