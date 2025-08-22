import { Helmet } from "react-helmet-async";
import { PackagesSection } from "../components/common/sections/PackagesSection";

export default function AllPackages() {
  return (
    <>
      <Helmet>
        <title>Packages & Pricing | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Transparent pricing for all services: Choose from Basic, Standard, and Premium packages for web development, banner design, logo design, content writing, social media marketing, branding, and animation projects."
        />
        <meta
          name="keywords"
          content="web design packages, logo design pricing, branding agency rates, animation service costs, affordable digital packages, Quick Owl Graphics pricing"
        />
        <link
          rel="canonical"
          href="https://quickowlgraphics.com/all-packages/"
        />
      </Helmet>
      <section className="py-32 back-black-charcoal text-white">
        <PackagesSection />
      </section>
    </>
  );
}
