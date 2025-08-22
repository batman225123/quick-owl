import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const stats = [
    { number: 100, suffix: "%", title: "Quality Guaranteed" },
    { number: 100, suffix: "%", title: "Happy Customers" },
    { number: 55, suffix: "+", title: "Industries Served" },
    { number: 100, suffix: "%", title: "Satisfaction Guaranteed" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden back-black-charcoal w-full"
    >

      <div className="container mx-auto px-4 py-16 relative z-10 rounded-2xl bg-[#000] shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-red-600 mb-2">
                {isInView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="w-16 h-1 bg-red-600 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-white">
                {stat.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
