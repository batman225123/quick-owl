import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";
import packagesData from "../../../data/all-packages.json"; // Import your JSON data

type Package = {
  name: string;
  price: string;
  features: string[];
};

type PackagesData = {
  [key: string]: Package[];
};

// Extract services from your JSON data
const services = Object.keys(packagesData.packages[0]) as Array<
  | "logo"
  | "banner"
  | "branding"
  | "2dAnimation"
  | "3dAnimation"
  | "development"
  | "marketing"
>;

// Map your data to match the component's expected structure
const packages: PackagesData = {
  logo: packagesData.packages[0].logo.map((pkg) => ({
    name: pkg.name,
    price: pkg.price,
    features: pkg.features,
  })),
  banner: packagesData.packages[0].banner.map((pkg) => ({
    name: pkg.name,
    price: pkg.price,
    features: pkg.features,
  })),
  branding: packagesData.packages[0].branding.map((pkg) => ({
    name: pkg.name,
    price: pkg.price,
    features: pkg.features,
  })),
  development: packagesData.packages[0].development.map((pkg) => ({
    name: pkg.name,
    price: pkg.price,
    features: pkg.features,
  })),
  marketing: packagesData.packages[0].marketing.map((pkg) => ({
    name: pkg.name,
    price: pkg.price,
    features: pkg.features,
  })),
  "2dAnimation": packagesData.packages[0]["2dAnimation"].map((pkg) => ({
    name: pkg.name,
    price: pkg.price,
    features: pkg.features,
  })),
  "3dAnimation": packagesData.packages[0]["3dAnimation"].map((pkg) => ({
    name: pkg.name,
    price: pkg.price,
    features: pkg.features,
  })),
};

// Service display names mapping
const serviceDisplayNames: Record<string, string> = {
  logo: "Logo Design",
  banner: "Banner Design",
  branding: "Branding",
  "2dAnimation": "2D Animation",
  "3dAnimation": "3D Animation",
  development: "Web Development",
  writing: "Content Writing",
  marketing: "Social Media Marketing",
};

export function PackagesSection() {
  const [activeService, setActiveService] = useState<string>(services[0]);

  return (
    <section className="py-20 back-black-charcoal text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-medium tracking-widest">
            OUR PACKAGES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tailored <span className="text-red-600">Solutions</span>
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </motion.div>

        {/* Service Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium whitespace-nowrap",
                  activeService === service
                    ? "bg-red-600 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {serviceDisplayNames[service] || service}
              </button>
            ))}
          </div>
        </div>

        {/* Packages */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages[activeService]?.map((pkg, index) => (
              <motion.div
                key={`${activeService}-${pkg.name}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
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
                      <button className="w-full py-3 cursor-pointer bg-red-600/10 border border-red-600/30 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600/20 transition-colors">
                        Buy Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
