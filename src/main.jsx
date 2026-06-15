import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContextProvider.jsx";
import { TasksContextProvider } from "./context/TasksContextProvider.jsx";
import { ThemeContextProvider } from "./context/ThemeContextProvider.jsx";
import { AuthProvider } from "./context/authProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          <TasksContextProvider>
            <App />
          </TasksContextProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </AuthProvider>
  </StrictMode>,
);
