"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Background from "./components/Background/background";
import Header from "./components/Header/header";
import Dashboard from "./dashboard";
import MainContent from "./components/MainContent/mainContent";
import Login from "./components/Login/login";
import Footer from "./components/Footer/footer";

const Home: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const links = [
    { href: "/", text: "início", id: "inicio-link" },
    { href: "/relacionamento", text: "relacionamento" },
    { href: "/engajamento", text: "engajamento" },
    {
      href: "#",
      text: "canais",
      dropdown: [
        { href: "/buscas", text: "buscas" },
        { href: "/vida-financeira", text: "vida financeira (pfm)" },
        { href: "/home", text: "home" },
        { href: "/omnichannel", text: "omnichannel" },
      ],
    },
    { href: "/satisfacao", text: "satisfação" },
    { href: "/seguranca", text: "segurança" },
  ];

  const renderPage = () => {
    switch (currentPath) {
      case "/dashboard":
        return <Dashboard />;
      default:
        return (
          <>
            <Background />
            <Header links={links} />
            <Login />
            <div className={styles.content}>
              <MainContent navigateTo={navigateTo} />
            </div>
            <Footer />
          </>
        );
    }
  };

  return <div className={styles.container}>{renderPage()}</div>;
};

export default Home;
