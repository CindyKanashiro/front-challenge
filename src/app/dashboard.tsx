"use client";

import React from "react";
import styles from "./dashboard.module.css";
import Header from "./components/Header/header";
import Background from "./components/Background/background";
import Text from "./components/TextDash/text";

const Dashboard: React.FC = () => {
  const links = [
    { href: "/", text: "início", id: "inicio-link" }
  ];

  return (
    <div className={styles.container}>
      <Header links={links} />
      <Text />
      <Background />
    </div>
  );
};

export default Dashboard;

