// src/pages/AdminDashboard.tsx
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { LayoutDashboard, LogOut, Package } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  const sidebarItems = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: <Package className="h-5 w-5" />,
      label: "Blogs",
      path: "/admin/blogs",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 py-24">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white shadow-md flex flex-col"
      >
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-indigo-600">Admin Panel</h1>
        </div>

        <div className="flex flex-col p-4 space-y-1 flex-grow">
          {sidebarItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "hover:bg-gray-100 text-gray-600"
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <Button
            onClick={logout}
            variant="ghost"
            className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-indigo-100 text-indigo-600">
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-800">{user?.name}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <h1 className="text-center text-5xl uppercase font-extrabold text-red-600">Welcome To Our Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
