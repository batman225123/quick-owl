import { motion } from "framer-motion";

export default function SmoothMarquee() {
  const marqueeItems = [
    "Web Dev",
    "Logo",
    "Branding",
    "Banner",
    "Content Writing",
    "Marketing",
    "2D & 3D Animation",
  ];

  // Double the array for seamless looping
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative py-0 overflow-x-hidden bg-black">
      {/* Gradient fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          x: {
            duration: 20, // Increase to slow down, decrease to speed up
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center mx-8 px-4">
            <span className="text-4xl md:text-6xl font-bold text-white mr-4 pb-4">
              •
            </span>
            <span
              className="text-4xl md:text-7xl font-bold pb-4"
              style={{
                background: "linear-gradient(90deg, #fff, red)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
