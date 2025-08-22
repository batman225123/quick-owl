import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactFormSection() {
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

      toast.success("Message sent successfully!");
      console.log("Thank You", data);
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-red-600" />,
      title: "Address",
      content: "nazimabad no 2 enquiry office, Karachi, Pakistan",
    },
    {
      icon: <Phone className="w-5 h-5 text-red-600" />,
      title: "Phone",
      content: "(+92) 3453167239",
      link: "tel:+923453167239",
    },
    {
      icon: <Mail className="w-5 h-5 text-red-600" />,
      title: "Email",
      content: "info@quickowlgraphics.com",
      link: "mailto:info@quickowlgraphics.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-red-600" />,
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 6PM",
    },
  ];

  return (
    <section className="py-20 back-black-charcoal text-white">
      <div className="container mx-auto px-4 bg-black/80 rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-medium tracking-widest">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              Let's talk about your project
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              Have questions or want to discuss a potential project? Reach out
              to us through the form or directly via our contact details below.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-black/30 border border-white/10 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 whitespace-pre-line">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gradient-to-br from-black/80 to-black/60 border border-white/10 rounded-xl p-8 md:p-10 space-y-6 shadow-lg"
              whileHover={{
                boxShadow: "0 10px 30px -10px rgba(239, 68, 68, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name
                  </label>
                  <motion.input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-red-600 focus:ring-red-600 transition-all"
                    placeholder="Your full name here"
                    name="name"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 2px rgba(239, 68, 68, 0.5)",
                    }}
                  />
                  {errors.name && (
                    <motion.span
                      className="text-red-600 text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.name.message}
                    </motion.span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <motion.input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-red-600 focus:ring-red-600 transition-all"
                    placeholder="Your email address here"
                    name="email"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 2px rgba(239, 68, 68, 0.5)",
                    }}
                  />
                  {errors.email && (
                    <motion.span
                      className="text-red-600 text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.email.message}
                    </motion.span>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone
                </label>
                <motion.input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-red-600 focus:ring-red-600 transition-all"
                  placeholder="Your number here"
                  name="phone"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(239, 68, 68, 0.5)",
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-red-600 focus:ring-red-600 transition-all"
                  placeholder="Your message here..."
                  name="message"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(239, 68, 68, 0.5)",
                  }}
                />
                {errors.message && (
                  <motion.span
                    className="text-red-600 text-sm mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.message.message}
                  </motion.span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(239, 68, 68, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-3 bg-red-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-all cursor-pointer disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
