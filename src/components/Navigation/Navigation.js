import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

import routes from "../../routes";

const Navigation = () => {
  return (
    <ul className={styles.navigationList}>
      <li>
        <NavLink
          className={styles.Link}
          activeClassName={styles.activeLink}
          to={routes.HOME}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={styles.Link}
          activeClassName={styles.activeLink}
          to={routes.MOVIES_PAGE}
        >
          MOVIES
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
