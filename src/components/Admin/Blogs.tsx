import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import {
  Plus,
  Edit,
  Trash2,
  Image as ImageIcon,
  LayoutDashboard,
  Package,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { Label } from "../../components/ui/label";
import { RichTextEditor } from "../editor/RichTextEditor";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { apiUrl, imageUrl } from "../common/Http";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  created_at: string;
  updated_at: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // Fetch blogs from API
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

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCreate = () => {
    setCurrentBlog({
      id: "",
      title: "",
      slug: "",
      content: "",
      image: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    setImagePreview(null);
    setImageFile(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (blog: Blog) => {
    setCurrentBlog(blog);
    // Only set imagePreview if blog.image exists
    setImagePreview(blog.image ? `${imageUrl}/${blog.image}` : null);
    setImageFile(null);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setBlogToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!currentBlog) return;

      // Validate required fields
      if (!currentBlog.title || !currentBlog.content) {
        toast.error("Title and content are required");
        return;
      }

      // Prepare form data for file upload
      const formData = new FormData();
      formData.append("title", currentBlog.title);
      formData.append("content", currentBlog.content);
      formData.append(
        "slug",
        currentBlog.slug || generateSlug(currentBlog.title)
      );
      formData.append("meta_title", currentBlog.meta_title || "");
      formData.append("meta_description", currentBlog.meta_description || "");
      formData.append("meta_keywords", currentBlog.meta_keywords || "");

      // Handle image updates
      if (imageFile) {
        formData.append("image", imageFile);
      } else if (!imagePreview && currentBlog.image) {
        // If image was removed
        formData.append("remove_image", "true");
      }

      let url = `${apiUrl}/blogs`;
      let method = "POST";

      if (currentBlog.id) {
        url = `${apiUrl}/blogs/${currentBlog.id}`;
        method = "POST"; // Using POST with _method=PUT for Laravel
        formData.append("_method", "PUT");
      }

      const token = localStorage.getItem("token");
      const headers: Record<string, string> = {
        Accept: "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      console.log("Sending request to:", url);
      console.log("Method:", method);
      console.log("FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await fetch(url, {
        method,
        body: formData,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.message || "Failed to save blog");
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Update the image URL in the response if needed
      if (data.image_url) {
        data.image = data.image_url;
      }

      toast.success(
        currentBlog.id
          ? "Blog updated successfully"
          : "Blog created successfully"
      );

      // Reset image states
      setImageFile(null);
      setImagePreview(null);

      await fetchBlogs();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Failed to save blog", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to save blog"
      );
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      if (!blogToDelete) return;

      const response = await fetch(`${apiUrl}/blogs/${blogToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      toast.success("Blog deleted successfully");
      await fetchBlogs();
      setIsDeleteDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete blog", error);
      toast.error("Failed to delete blog");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
            <h2 className="text-xl font-semibold text-gray-800">
              Blog Management
            </h2>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Blog Posts</CardTitle>
                <Button onClick={handleCreate}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Blog
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogs.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center h-24">
                          No blogs found. Create your first blog post!
                        </TableCell>
                      </TableRow>
                    ) : (
                      blogs.map((blog) => (
                        <TableRow key={blog.id}>
                          <TableCell className="font-medium">
                            {blog.title}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {blog.slug}
                          </TableCell>
                          <TableCell>
                            {blog.image ? (
                              <img
                                src={
                                  blog.image.includes("http")
                                    ? blog.image
                                    : `${imageUrl}/${blog.image}`
                                }
                                alt={blog.title}
                                className="h-10 w-10 object-cover rounded"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).onerror = null;
                                  (e.target as HTMLImageElement).src =
                                    "/fallback-image.jpg";
                                }}
                              />
                            ) : (
                              <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                                <ImageIcon className="h-4 w-4 text-gray-400" />
                              </div>
                            )}
                          </TableCell>
                          <TableCell>{formatDate(blog.created_at)}</TableCell>
                          <TableCell>{formatDate(blog.updated_at)}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(blog)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(blog.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {currentBlog?.id ? "Edit Blog Post" : "Create New Blog Post"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            {/* Blog Content Section */}
            <div className="space-y-4">
              <h3 className="font-medium">Blog Content</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title*</Label>
                  <Input
                    id="title"
                    value={currentBlog?.title || ""}
                    onChange={(e) =>
                      setCurrentBlog({
                        ...currentBlog!,
                        title: e.target.value,
                        slug: generateSlug(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={currentBlog?.slug || ""}
                    onChange={(e) =>
                      setCurrentBlog({
                        ...currentBlog!,
                        slug: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content*</Label>
                  <RichTextEditor
                    content={currentBlog?.content || ""}
                    onChange={(content) =>
                      setCurrentBlog({
                        ...currentBlog!,
                        content,
                      })
                    }
                    placeholder="Write your blog content here..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Featured Image</Label>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer w-32 h-32 hover:bg-gray-50"
                      >
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-center p-4">
                            <ImageIcon className="mx-auto h-8 w-8 text-gray-400" />
                            <p className="text-xs text-gray-500 mt-2">
                              Upload Image
                            </p>
                          </div>
                        )}
                      </label>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setImagePreview(null);
                        setImageFile(null);
                        if (currentBlog) {
                          setCurrentBlog({
                            ...currentBlog,
                            image: "",
                          });
                        }
                      }}
                      disabled={!imagePreview && !currentBlog?.image}
                    >
                      Remove Image
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Section */}
            <div className="space-y-4">
              <h3 className="font-medium">SEO Settings</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <Input
                    id="meta_title"
                    value={currentBlog?.meta_title || ""}
                    onChange={(e) =>
                      setCurrentBlog({
                        ...currentBlog!,
                        meta_title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <Textarea
                    id="meta_description"
                    rows={3}
                    value={currentBlog?.meta_description || ""}
                    onChange={(e) =>
                      setCurrentBlog({
                        ...currentBlog!,
                        meta_description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_keywords">Meta Keywords</Label>
                  <Input
                    id="meta_keywords"
                    value={currentBlog?.meta_keywords || ""}
                    onChange={(e) =>
                      setCurrentBlog({
                        ...currentBlog!,
                        meta_keywords: e.target.value,
                      })
                    }
                    placeholder="comma, separated, keywords"
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {currentBlog?.id ? "Save Changes" : "Create Post"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this blog post?</p>
            <p className="text-sm text-gray-500 mt-2">
              This action cannot be undone.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blogs;
