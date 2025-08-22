import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../../assets/new-logo.png";
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn(
        "fixed w-full z-50 bg-black border-b transition-all duration-300",
        isScrolled
          ? "border-red-600/40 bg-black/90 backdrop-blur-sm"
          : "border-red-600/20"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/`} className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white"
            >
              <img src={Logo} alt="Logo" />
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-red-600/10 text-white hover:text-red-500 data-[state=open]:text-red-500">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-black border border-red-600/30 p-2 rounded-lg">
                      <ul className="grid gap-1 p-2 w-[200px]">
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem.href}
                            href={subItem.href}
                            title={subItem.title}
                            className="hover:bg-red-600/10 hover:text-red-500"
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link to={item.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-red-600/10 text-white hover:text-red-500"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden  text-white focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </motion.button>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block"
        >
          <Link to={`/contact`}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(199, 0, 57, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0.1 }}
              className="fixed inset-0 bg-black/90 h-[100vh] backdrop-blur-lg md:hidden z-40 pt-24 pb-6 px-6 overflow-y-auto"
            >
              <motion.div
                className="flex flex-col space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    {item.subItems ? (
                      <div className="space-y-2">
                        <p className="text-white/70 font-medium px-4 py-2">
                          {item.title}
                        </p>
                        <div className="space-y-1 pl-6">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block px-4 py-2 text-white/80 hover:text-red-500 hover:bg-red-600/10 rounded-md transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-white hover:text-red-500 hover:bg-red-600/10 rounded-md transition-colors text-lg font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="pt-4"
                >
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

const ListItem = ({
  className,
  title,
  href,
}: {
  className?: string;
  title: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-600/10 hover:text-red-500 focus:bg-red-600/10",
            className
          )}
        >
          <div className="text-sm font-medium leading-none text-white group-hover:text-red-500">
            {title}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Services",
    href: "/",
    subItems: [
      {
        title: "Logo Design",
        href: "/logo-design",
      },
      {
        title: "Web Development",
        href: "/web-development",
      },
      {
        title: "Smm",
        href: "/social-media-marketing",
      },
      {
        title: "Banner Design",
        href: "/banner-design",
      },
      {
        title: "Branding",
        href: "/branding",
      },
      {
        title: "Content Writing",
        href: "/content-writing",
      },
      {
        title: "2D Animation",
        href: "/2d-animation",
      },
      {
        title: "3D Animation",
        href: "/3d-animation",
      },
    ],
  },
  {
    title: "Packages",
    href: "/all-packages",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact",
    href: "/contact-us",
  },
];
