import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </AuthProvider>
);
