import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, ArrowLeft, Share2 } from "lucide-react";
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
  meta_keywords: string;
  created_at: string;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${apiUrl}/blogs/slug/${slug}`);

        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || "Blog not found");
        }

        setBlog(data.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        toast.error("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator
        .share({
          title: blog?.title,
          text: blog?.meta_description,
          url: window.location.href,
        })
        .catch(() => toast.info("Share canceled"));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 rounded-full border-4 border-red-600 border-t-transparent"
        />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-gray-900 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Post Not Found</h2>
          <p className="text-gray-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {blog && (
        <Helmet>
          <title>{blog.title} - Quick Owl Graphics</title>
          <meta name="description" content={blog.meta_description} />
          <meta name="keywords" content={blog.meta_keywords} />

          {/* OpenGraph */}
          <meta
            property="og:title"
            content={`${blog.title} - Quick Owl Graphics`}
          />
          <meta property="og:description" content={blog.meta_description} />
          <meta property="og:image" content={`${imageUrl}/${blog.image}`} />
          <meta
            property="og:url"
            content={`https://quickowlgraphics.com/blog/${blog.slug}`}
          />
          <meta property="og:type" content="article" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`${blog.title} - Quick Owl Graphics`}
          />
          <meta name="twitter:description" content={blog.meta_description} />
          <meta name="twitter:image" content={`${imageUrl}/${blog.image}`} />

          {/* Canonical */}
          <link
            rel="canonical"
            href={`https://quickowlgraphics.com/blog/${blog.slug}`}
          />
        </Helmet>
      )}
      <div className="min-h-screen back-black-charcoal text-white py-36">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto">
            <Link
              to="/blogs"
              className="inline-flex items-center text-gray-400 hover:text-red-600 transition-colors group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center"
              >
                <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                <span>All Articles</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Main Content */}
        <article className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 mb-12"
            >
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <CalendarDays className="h-4 w-4 mr-1.5 text-red-600" />
                <span>{formatDate(blog.created_at)}</span>
              </div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {blog.title}
              </motion.h1>
            </motion.header>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12 rounded-xl overflow-hidden"
            >
              <img
                src={
                  `${imageUrl}/${blog.image}` ||
                  "https://source.unsplash.com/random/1200x600/?tech,design"
                }
                alt={blog.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={sharePost}
                className="flex items-center px-6 py-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Share2 className="h-5 w-5 mr-2 text-red-600" />
                <span className="font-medium">Share this article</span>
              </button>
            </motion.div>
          </div>
        </article>
      </div>
    </>
  );
}
