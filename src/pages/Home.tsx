import { Helmet } from "react-helmet-async";
import { AboutSection } from "../components/common/sections/AboutSection";
import ContactFormSection from "../components/common/sections/ContactForm";
import { Hero } from "../components/common/sections/Hero";
import { PackagesSection } from "../components/common/sections/PackagesSection";
import { ServicesSection } from "../components/common/sections/ServuceSection";
import SmoothMarquee from "../components/common/small/InteractiveMarquee";
import StatsSection from "../components/common/small/StatsSection";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Quick Owl Graphics: Digital Marketing & Design Agency In Pakistan
        </title>
        <meta
          name="description"
          content="Quick Owl Graphics is a leading digital marketing agency in Pakistan, specializing in creative design and impactful marketing strategies."
        />
        <meta
          name="keywords"
          content="digital agency, branding agency, web design, web development, branding, banner design, content writing, 2d animation, 3d animation, graphic design, logo design, Quick Owl Graphics, creative agency, UI/UX design, social media marketing"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickowlgraphics.com/" />
        <meta
          property="og:title"
          content="Quick Owl Graphics: Digital Marketing & Design Agency In Pakistan"
        />
        <meta
          property="og:description"
          content="Quick Owl Graphics is a leading digital marketing agency in Pakistan, specializing in creative design and impactful marketing strategies."
        />
        <meta
          property="og:image"
          content="https://quickowlgraphics.com/new-logo.png"
        />
        <meta property="og:url" content="https://quickowlgraphics.com/" />
        <meta property="og:site_name" content="Quick Owl Graphics" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quick Owl Graphics: Digital Marketing & Design Agency In Pakistan"
        />
        <link rel="canonical" href="https://quickowlgraphics.com/" />

        <meta
          name="twitter:description"
          content="Quick Owl Graphics is a leading digital marketing agency in Pakistan, specializing in creative design and impactful marketing strategies."
        />
        <meta
          name="twitter:image"
          content="https://quickowlgraphics.com/new-logo.png"
        />
      </Helmet>

      <main className="back-primary-black w-full min-h-screen overflow-x-hidden">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <SmoothMarquee />
        <PackagesSection />
        <ContactFormSection />
      </main>
    </>
  );
};

export default Home;
