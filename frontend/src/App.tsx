import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import { useAppContext } from "./context/app-context";
import SecretPage from "./pages/secret";

export default function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {isLoggedIn && <Route path="secret" element={<SecretPage />} />}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
