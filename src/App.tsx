import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import TeamPage from "./pages/Team/TeamPage";
import DocumentationPage from "./pages/Documentation/DocumentationPage";
import ContactPage from "./pages/Contact/ContactPages";
import NotFoundPage from "./pages/Error/NotFound";
import "./App.css";

const App: React.FC = () => {
  const location = useLocation();
  const is404Page = location.pathname === "*";

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
