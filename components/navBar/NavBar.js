import React from "react";
import classes from "./navbar.module.css";
import { navLinkData } from "../../app/constants";
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={classes.contain_logo}>
      <div >
        <img
          className={classes.logo}
          src="./assets/images/logo.jpg"
          alt="logo"
          width="100"
          height="200"
        />
      </div>
      <div>
        <ul className={classes.list_link}>
          {navLinkData.map(({ _id, title, link }) => (
            <li className={classes.li} key={_id}>
              <Link
                href={link}
                activeclassname={classes.active}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
