import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import { apiUrl, imageUrl } from "../components/common/Http";
interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  meta_description: string;
  created_at: string;
}

export default function AllBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/blogs`);

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
        toast.error("Failed to load blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  function stripHtml(html: string) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  return (
    <>
      <Helmet>
        <title>Blogs | Quick Owl Graphics</title>
        <meta
          name="description"
          content="Our blog covers expert tips, trends, and strategies to grow your business online. Stay ahead with our creative expertise!"
        />
        <meta
          name="keywords"
          content="Quick Owl Graphics, design blog, branding tips, digital marketing strategies, graphic design trends, business growth, creative agency blog, web design insights, marketing tips, branding advice"
        />

        <link rel="canonical" href="https://quickowlgraphics.com/blogs/" />
      </Helmet>
      <div className="min-h-screen back-black-charcoal text-white py-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              className="text-red-600 font-medium tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              LATEST ARTICLES
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our <span className="text-red-600">Blog</span>
            </motion.h1>

            <div className="w-20 h-1 bg-red-600 mx-auto" />
            <motion.p
              className="text-lg text-gray-200 max-w-2xl mx-auto my-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Discover insights, stories, and expert knowledge
            </motion.p>
          </motion.div>

          {/* Blog Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-12 w-12 rounded-full border-4 border-red-600 border-t-transparent"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {blogs.length === 0 ? (
                  <motion.div
                    className="col-span-full text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-gray-400 text-lg">
                      No blog posts available yet.
                    </p>
                  </motion.div>
                ) : (
                  blogs.map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="absolute inset-0 z-10"
                        />
                        <motion.img
                          src={
                            `${imageUrl}/${blog.image}` ||
                            "https://source.unsplash.com/random/600x400/?tech,design"
                          }
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative"
                          initial={{ scale: 1 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <CalendarDays className="h-4 w-4 mr-1.5 text-red-600" />
                          <span>{formatDate(blog.created_at)}</span>
                          <span className="mx-2 text-gray-600">•</span>
                          <Clock className="h-4 w-4 mr-1.5 text-red-600" />
                          <span>5 min read</span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-grey mb-4 line-clamp-2">
                          {blog.meta_description
                            ? blog.meta_description
                            : blog.content
                            ? stripHtml(blog.content).substring(0, 120) + "..."
                            : "No description available"}
                        </p>

                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center font-medium text-red-600 hover:text-red-500 transition-colors group/readmore"
                        >
                          <span className="mr-2">Read more</span>
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex items-center"
                          >
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/readmore:translate-x-1" />
                          </motion.span>
                        </Link>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
