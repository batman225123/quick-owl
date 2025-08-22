import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import { Navbar } from "./components/common/small/Navbar";
import Footer from "./components/common/Footer";
import Contact from "./pages/Contact";
import AllPackages from "./pages/AllPackages";
import Logo from "./components/common/Services/Logo";
import Banner from "./components/common/Services/Banner";
import Branding from "./components/common/Services/Branding";
import Twod_Animation from "./components/common/Services/2d-Animation";
import Threed_Animation from "./components/common/Services/3d-Animation";
import Development from "./components/common/Services/Development";
import ContentWriting from "./components/common/Services/ContentWriting";
import SocialMediaMarketing from "./components/common/Services/Seo";
import { useEffect } from "react";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import AdminLogin from "./components/Admin/Login";
import Blogs from "./components/Admin/Blogs";
import { Toaster } from "sonner";
import AllBlogs from "./pages/AllBlogs";
import BlogDetail from "./pages/BlogDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster richColors position="bottom-right" />
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* for admin */}

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/admin/login" replace />} />
          {/* end */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/all-packages" element={<AllPackages />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          {/* For Services */}
          <Route path="/logo-design" element={<Logo />} />
          <Route path="/banner-design" element={<Banner />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/2d-animation" element={<Twod_Animation />} />
          <Route path="/3d-animation" element={<Threed_Animation />} />
          <Route path="/web-development" element={<Development />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route
            path="/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
