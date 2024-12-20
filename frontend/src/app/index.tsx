import React, { Suspense, lazy } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "../components/sidebar/sidebar";
import { items } from "../components/sidebar/sidebar-items";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";

// Lazy-loaded routes
const Login = lazy(() => import("./routes/auth/login"));
const Home = lazy(() => import("./routes/home"));
const AnalyticsHome = lazy(() => import("./routes/analytics/analytics-home"));

export default function App() {
  const location = useLocation();

  return (
    <NextUIProvider>
      <Sidebar items={items} isCompact={true} />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/analytics" element={<AnalyticsHome />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </NextUIProvider>
  );
}
