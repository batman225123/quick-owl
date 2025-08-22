import { motion } from "framer-motion";

import Breadcrum from "../../../assets/breadcrum-second.jpg";
import BigBanner from "../../../assets/content-writing/content-writing.png";
import ContactFormSection from "../sections/ContactForm";
import { Helmet } from "react-helmet-async";
export default function ContentWriting() {
  const service = {
    title: "Content Writing",
    description: `
         Grow your brand with the force of authoritative content writing services in Pakistan. A powerful online presence increases exposure and establishes your brand as an industry expert, which pulls in a larger audience and leads to quality leads. At our firm, we offer superior content writing service, with a focus on ensuring you stand out online. Our writing team comprises experienced business writers who produce compelling, optimized copy matching your brand. We are an all-around professional content writing company, so we write each piece in a way that helps improve your search engine visibility and engages visitors. Whether you’re searching for the best content writer for your niche who provides quality content, or if you need an affordable content writing service that doesn’t compromise quality, we’ve got you covered. Feel the power of the best content writing services and bring your business to new heights.
            `,
    image: BigBanner,
  };

  return (
    <>
      <Helmet>
        <title>Content Writing Services In Pakistan | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Quick Owl Graphics offers top-tier content writing services in Pakistan, delivering engaging and SEO-optimized content for businesses."
        />
        <meta
          name="keywords"
          content="content writing, SEO content, blog writing, website copy, marketing copy, professional writing services, Quick Owl Graphics content"
        />
        <link
          rel="canonical"
          href="https://quickowlgraphics.com/content-writing/"
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
                  Professional{" "}
                  <span className="text-red-600">Content Writing</span> Services
                </h2>
                <p className="text-gray-300">
                  Get in touch with top content writing services to grow your
                  business successfully with the help of digital marketing.
                  These offerings span strategies that support business needs
                  and growth. At Quick Owl Graphics, our professional content
                  writing services specialize in delivering quality, powerful
                  content for your online visibility. With the help of a
                  professional content writer, your brand can easily develop
                  customized messages that speak to your audience. In delivering
                  the best content writing services, we make it a point to
                  ensure everything we produce is consistent with your
                  business’s goals and what search engines seek in high-quality
                  content. Our affordable content writing services are perfect
                  for companies looking to make the most of their money without
                  sacrificing quality. Whether you want to hire article writers,
                  increase engagement through high-quality content, or need help
                  with any blog or company information, we can get the best
                  strategic focus here. Through our best content writing for
                  websites, blogs, and social media, we ensure your brand’s
                  online success for years to come with increased search
                  rankings. You can count on Quick Owl Graphics for content that
                  converts, connects, and captivates.
                </p>
              </motion.div>
            </div>
          </section>

          <ContactFormSection />
        </div>
      </main>
    </>
  );
}
