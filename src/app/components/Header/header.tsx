import React, { useEffect, useState } from "react";
import styles from "./header.module.css";

interface Link {
  href: string;
  text: string;
  id?: string;
  dropdown?: Link[];
  className?: string;
}

interface HeaderProps {
  links: Link[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        setIsDashboard(window.location.pathname === "/dashboard");
      };

      window.addEventListener("popstate", handleRouteChange);
      handleRouteChange(); 

      return () => {
        window.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const inicioLink = document.getElementById("inicio-link");
      if (window.location.pathname === "/") {
        inicioLink?.classList.add(styles.active);
      } else {
        inicioLink?.classList.remove(styles.active);
      }
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.history.pushState({}, '', href);
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.containerText}>Data</div>
        </div>
        <nav className={`${styles.nav} ${isDashboard ? styles.dashboardNav : ""}`}>
          {links.map((link, index) => (
            (!isDashboard || link.id === "inicio-link") && (
              link.dropdown ? (
                <div key={index} className={styles.dropdown} onClick={toggleDropdown}>
                  <a href={link.href} className={styles.link} onClick={handleNavigation(link.href)}>{link.text}</a>
                  <div className={`${styles.dropdownContent} ${isDropdownOpen ? styles.show : ""}`}>
                    {link.dropdown.map((dropdownLink, idx) => (
                      <a 
                        key={idx} 
                        href={dropdownLink.href} 
                        className={styles.link} 
                        onClick={handleNavigation(dropdownLink.href)}
                      >
                        {dropdownLink.text}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={index} 
                  href={link.href} 
                  className={`${styles.link} ${link.id === "inicio-link" ? (isDashboard ? styles.dashboardLink : styles.noArrow) : ""}`} 
                  id={link.id} 
                  onClick={handleNavigation(link.href)}
                >
                  {link.text}
                </a>
              )
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
