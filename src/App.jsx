import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Home from "./pages/home.jsx";
import History from "./pages/history.jsx";
import Prices from "./pages/prices.jsx";
import Contact from "./pages/contact.jsx";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function NavBar({ isDarkMode, onToggleTheme }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="navbar">
      <div className="logo">Wine Company</div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">{t("nav.home")}</Link>
          </li>
          <li>
            <Link to="/history">{t("nav.history")}</Link>
          </li>
          <li>
            <Link to="/prices">{t("nav.prices")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("nav.contact")}</Link>
          </li>
        </ul>
      </nav>

      <div className="navbar-actions">
        <div className="lang-switch">
          <button onClick={() => changeLanguage("ca")}>CA</button>
          <button onClick={() => changeLanguage("es")}>ES</button>
        </div>

        <button className="theme-toggle" onClick={onToggleTheme}>
          {isDarkMode ? t("theme.light") : t("theme.dark")}
        </button>
      </div>
    </header>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#7b1fa2"
      },
      secondary: {
        main: "#c62828"
      }
    },
    typography: {
      fontFamily: `"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}
