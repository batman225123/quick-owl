import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Check,
  Award,
  Lightbulb,
  EyeIcon,
  LucideShieldQuestion,
} from "lucide-react";
import Breadcrum from "../assets/breadcrum-first.jpg";
import { Link } from "react-router-dom";
import AboutImg from "../assets/about-image.jpg";
import ContactFormSection from "../components/common/sections/ContactForm";
import { Helmet } from "react-helmet-async";
// Enhanced animation configuration
const fadeIn = (delay = 0.2, dir = "up", duration = 0.8) => ({
  initial: {
    opacity: 0,
    y: dir === "up" ? 30 : dir === "down" ? -30 : 0,
    x: dir === "left" ? 30 : dir === "right" ? -30 : 0,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  transition: {
    duration,
    delay,
    ease: [0.16, 0.77, 0.47, 0.97],
  },
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px",
  },
});

const AboutUs = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[var(--primary-red)]" />,
      title: "OUR STRATEGY",
      description:
        "Working with a company that can truly bring a fantastic business experience. Once you collaborate with us we ensure to meet the requirements and needs of your business and take all those measures which will satisfy your business goals.",
    },
    {
      icon: <EyeIcon className="w-8 h-8 text-[var(--primary-red)]" />,
      title: "OUR VISION",
      description:
        "Enhancing customer services is your main concern. By providing excellent customer service, you can establish long-lasting relationships with your customers, which is essential for any business. Coordinating with your clients and teams to create a marketing plan.",
    },
    {
      icon: <Award className="w-8 h-8 text-[var(--primary-red)]" />,
      title: "OUR GOAL",
      description:
        "Let us be your partner in helping your business grow dramatically. We know all the current market trends and bring our products accordingly. We have helped many businesses to reach their optimum target and satisfy their clientele.",
    },
    {
      icon: (
        <LucideShieldQuestion className="w-8 h-8 text-[var(--primary-red)]" />
      ),
      title: "Our Team",
      description:
        "Employing the right people to do the task helps us deliver on that pledge. we look for people who are driven to deliver work that connects with our clients, We promise more than just logo design when you use our services.",
    },
  ];

  const milestones = [
    { year: "100%", event: "Satisfaction Guaranteed" },
    { year: "55+", event: "Industries Served" },
    { year: "100%", event: "Happy Customers" },
    { year: "100%", event: "Quality Guaranteed" },
    { year: "24/7", event: "Customer Support" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Quick Owl Graphics a passionate team of designers, developers, and marketers dedicated to crafting exceptional digital experiences."
        />
        <meta
          name="keywords"
          content="digital agency about us, Quick Owl Graphics team, creative agency story, web design company, branding specialists, animation studio about"
        />
        <link rel="canonical" href="https://quickowlgraphics.com/about/" />
      </Helmet>

      <main className="bg-[var(--primary-black)] w-full min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section
          style={{
            background: `url(${Breadcrum})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative text-center py-32 px-6 md:px-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/about/hero-pattern.svg')] opacity-5" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <motion.h1
              {...fadeIn(0.1)}
              className="text-3xl md:text-5xl font-extrabold text-[var(--primary-red)] mb-6"
            >
              Our ideas and plans that work for any product or business.
            </motion.h1>
            <motion.p
              {...fadeIn(0.3)}
              className="max-w-3xl mx-auto text-[var(--silver)] text-sm md:text-xl leading-relaxed"
            >
              Either an individual, a startup, or a business operating for years
              looking for capturing the digital market Our team of professionals
              is available to help you out. Our marketing strategy and
              innovative designs will definitely grab clients' attention.
            </motion.p>
            <motion.div {...fadeIn(0.5)} className="mt-10">
              <Link to="/contact">
                <Button className="bg-[var(--primary-red)] hover:bg-[var(--accent-red)] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30">
                  Lets Go
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="grid xl:grid-cols-2 gap-16 py-28 px-6 md:px-20 items-center bg-gradient-to-b from-[var(--primary-black)] to-[var(--back-charcoal)]">
          <motion.div {...fadeIn(0.2, "left")} className="space-y-8">
            <div className="space-y-4">
              <span className="text-[var(--soft-red)] font-medium tracking-widest">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-white)]">
                Save Your <span className="text-red-600">Time & Money </span>{" "}
                With Our Agency
              </h2>
            </div>
            <p className="text-[var(--silver)] text-lg leading-relaxed">
              We understand that everyone has unique needs, and that's why we
              offer assistance across all sectors. Our team members come from
              diverse backgrounds, which allows us to provide the necessary
              support regardless of your field of interest.
            </p>

            <ul className="space-y-4">
              {[
                "100% Satisfaction Guaranteed",
                "55+ Industries Served",
                "100% Happy Customers",
                "100% Quality Guaranteed",
                "24/7 Customer Support",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  {...fadeIn(0.3 + index * 0.1, "left")}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-[var(--primary-red)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--silver)]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeIn(0.3, "right")} className="relative group">
            <div className="absolute inset-0 bg-[var(--primary-red)] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />
            <img
              src={AboutImg}
              alt="Our Mission"
              className="w-full h-full rounded-lg object-cover shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
            />
          </motion.div>
        </section>

        {/* Values Section */}
        <section className=" py-28 px-6 md:px-20 bg-[var(--back-charcoal)]">
          <motion.div {...fadeIn(0.1)} className="text-center mb-20">
            <span className="text-[var(--soft-red)] font-medium tracking-widest">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-white)] mt-4">
              What We Stand For
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeIn(0.2 + index * 0.1, "up")}
                whileHover={{ y: -10 }}
                className="bg-[var(--primary-black)] p-8 rounded-xl border border-[var(--silver)]/10 hover:border-[var(--primary-red)]/30 transition-all"
              >
                <div className="bg-[var(--primary-black)]/50 border border-[var(--primary-red)]/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary-white)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--silver)] text-xs md:text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="hidden xl:block relative py-28 px-6 md:px-20 bg-[var(--primary-black)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/about/dot-pattern.svg')] opacity-5" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div {...fadeIn(0.1)} className="text-center mb-20">
              <span className="text-[var(--soft-red)] font-medium tracking-widest">
                OUR SERVICE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-white)] mt-4">
                What We Provide
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline bar */}
              <div className="absolute left-4 md:left-1/2 h-full w-1 bg-[var(--primary-red)] transform -translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    {...fadeIn(
                      0.2 + index * 0.1,
                      index % 2 === 0 ? "left" : "right"
                    )}
                    className={`relative ${
                      index % 2 === 0
                        ? "pr-8 md:pr-0 md:pl-8 text-left md:text-right"
                        : "pl-8 md:pl-0 md:pr-8 text-left"
                    }`}
                  >
                    <div
                      className={`absolute top-0 ${
                        index % 2 === 0
                          ? "left-0 md:left-1/2"
                          : "right-0 md:right-1/2"
                      } w-4 h-4 bg-[var(--primary-red)] rounded-full transform ${
                        index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                      }`}
                    />
                    <div
                      className={`md:max-w-md ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="text-[var(--primary-red)] font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-[var(--silver)]">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <ContactFormSection />
      </main>
    </>
  );
};

export default AboutUs;
