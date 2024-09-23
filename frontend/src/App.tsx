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
import { RootLayout } from "./layouts/root-layout";

export default function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <HomePage />
            </RootLayout>
          }
        />
        <Route
          path="/login"
          element={
            <RootLayout>
              <LoginPage />
            </RootLayout>
          }
        />
        <Route
          path="/register"
          element={
            <RootLayout>
              <RegisterPage />
            </RootLayout>
          }
        />

        {isLoggedIn && (
          <Route
            path="secret"
            element={
              <RootLayout>
                <SecretPage />
              </RootLayout>
            }
          />
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
