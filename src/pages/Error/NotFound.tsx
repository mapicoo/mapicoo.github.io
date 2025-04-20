import React from "react";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiHome, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  return (
    <div className="not-found-container">
      <motion.div
        className="not-found-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Başlık ve İkon */}
        <motion.div className="not-found-header" variants={itemVariants}>
          <div className="error-icon-container">
            <FiAlertTriangle className="error-icon" />
            <div className="pulse-effect"></div>
          </div>
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Sayfa Bulunamadı</h2>
        </motion.div>

        {/* Açıklama Metni */}
        <motion.p className="error-description" variants={itemVariants}>
          Aradığınız sayfa taşınmış, silinmiş veya adı değiştirilmiş olabilir.
          <br />
          Lütfen aşağıdaki seçeneklerden birini deneyin.
        </motion.p>

        {/* Aksiyon Butonları */}
        <motion.div className="action-buttons" variants={itemVariants}>
          <motion.button
            className="primary-button"
            onClick={() => navigate("/")}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiHome className="button-icon" />
            Ana Sayfaya Dön
          </motion.button>

          <motion.button
            className="secondary-button"
            onClick={() => navigate(-1)}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiArrowRight className="button-icon" />
            Bir Önceki Sayfa
          </motion.button>
        </motion.div>

        {/* Ekstra Yardım */}
        <motion.div className="help-section" variants={itemVariants}>
          <p>Yardıma mı ihtiyacınız var?</p>
          <Link to="/iletisim" className="help-link">
            İletişim Sayfamız
          </Link>
        </motion.div>
      </motion.div>

      {/* Arkaplan Dekorasyonu */}
      <div className="background-elements">
        <div className="circle-decoration circle-1"></div>
        <div className="circle-decoration circle-2"></div>
        <div className="square-decoration"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
