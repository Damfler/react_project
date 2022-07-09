import React from "react";
import logoImage from "../../assets/img/logo.svg";
import { menu } from "./menu";
import { Link, useHistory } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt="" height="35" />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button
            className={styles["login-button"]}
            onClick={() => history.push("/about")}
          >
            Login
          </button>
          <button className={styles["sign-up-button"]}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;