import type { NavigateOptions } from "react-router";
import Login from "./routes/auth/login";
import Home from "./routes/home";
import { useNavigate, useHref, Route, Routes } from "react-router";
import { NextUIProvider } from "@nextui-org/react";
import { Sidebar } from "../components/sidebar/sidebar";
import { items } from "../components/sidebar/sidebar-items";
import AnalyticsHome from "./routes/analytics/analytics-home";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <Sidebar items={items} isCompact={true} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/analytics/" element={<AnalyticsHome />} />
      </Routes>
    </NextUIProvider>
  );
}
