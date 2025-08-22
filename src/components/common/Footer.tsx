import { motion } from "framer-motion";
import {
  Mail,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Clock,
  Send,
  Loader2,
  LucideBadgeSwissFranc,
} from "lucide-react";
import { useForm } from "react-hook-form";
import SmoothMarquee from "./small/InteractiveMarquee";
import { Link } from "react-router-dom";
import Logo from "../../assets/new-logo.png";
import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

type FormData = {
  email: string;
};

type FooterLink = {
  title: string;
  links: string[];
};

type ContactInfo = {
  icon: React.ReactNode;
  text: string;
  link?: string;
};

type SocialIcon = {
  icon: React.ReactNode;
  name: string;
  link: string;
};

export default function Footer() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const emailjsConfig = {
    serviceId: "service_o4xovtf",
    templateId: "template_ptub6ef",
    publicKey: "tVOYTthBAbaROXrk6",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      if (!formRef.current) {
        throw new Error("Form reference not found");
      }
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      toast.success("Thank You For Subscribing!");
      console.log("Thank You", data);
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const footerLinks: FooterLink[] = [
    {
      title: "Company",
      links: ["About Us", "All Packages", "Contact Us", "Blogs"],
    },
    {
      title: "Services",
      links: [
        "Web Development",
        "Logo Design",
        "Branding",
        "Banner Design",
        "Content Writing",
        "Social Media Marketing",
        "2D Animation",
        "3D Animation",
      ],
    },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="w-5 h-5 text-red-600" />,
      text: "nazimabad no 2 enquiry office, Karachi, Pakistan",
    },
    {
      icon: <Phone className="w-5 h-5 text-red-600" />,
      text: "(+92) 3453167239",
      link: "tel:+923453167239",
    },
    {
      icon: <Mail className="w-5 h-5 text-red-600" />,
      text: "info@quickowlgraphics.com",
      link: "mailto:info@quickowlgraphics.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-red-600" />,
      text: "Mon-Fri: 9AM - 6PM",
    },
  ];

  const socialIcons: SocialIcon[] = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      link: "https://www.facebook.com/quickowlgraphics",
    },
    {
      icon: <LucideBadgeSwissFranc className="w-5 h-5" />,
      name: "Twitter",
      link: "https://www.pinterest.com/quickowlgraphics/_created",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      link: "https://www.instagram.com/quickowlgraphics/",
    },
  ];

  return (
    <>
      <SmoothMarquee />
      <footer className="bg-black text-white border-t border-white/10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Link to="/">
                  {" "}
                  <img src={Logo} alt="Logo" />
                </Link>
                <p className="text-gray-400 mt-4">
                  Crafting digital excellence with passion and precision.
                </p>
              </div>

              <motion.div
                className="flex gap-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition-colors"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    {item.icon}
                    {item.link ? (
                      <a
                        href={item.link}
                        className="hover:text-red-500 transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            {footerLinks.map((column, colIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        {link}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest updates and offers.
              </p>

              <motion.form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                whileHover={{
                  boxShadow: "0 5px 15px rgba(239, 68, 68, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      name="email"
                      placeholder="Your email address"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:border-red-600 focus:ring-red-600 transition-all"
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      className="text-red-600 text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 cursor-pointer bg-red-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(239, 68, 68, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-white/10 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Copyright Quick Owl Graphics</p>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
