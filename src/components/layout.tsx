import "../styles/layout.css";
import React from "react";
import type { LayoutProps } from "../types";

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="layoutContainer">
    <header className="layoutHeader">
      <h1>Mi SPA</h1>
    </header>
    <main className="layoutMain">{children}</main>
    <footer className="layoutFooter">
      &#169; 2025 Mi SPA
    </footer>
  </div>
);

export default Layout;
