import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import PageTransition from "./components/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="font-body">
      <Nav />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
