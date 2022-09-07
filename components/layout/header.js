/**
 * Presentation Component: Header
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../styles/components/_header.scss";

export default function Header({ headerData = {}, AEM_HOST_URI = "" }) {
  const {
    logoURL = "./home",
    imageAlt = "alt",
    navItems = ["Home", "Product", "Articles"],
  } = headerData;
  return (
    <React.Fragment>
      <header>
        <div className="header">
          <Link href={"/"}>
            <a className="header__logo">
              <Image
                className="header__image"
                src={`${AEM_HOST_URI.replace("author", "publish")}${
                  logoURL._path
                }`}
                layout="fill"
                alt={imageAlt}
              />
            </a>
          </Link>
          {navItems && (
            <nav className="header__nav">
              <ul className="header__list">
                {navItems.map((element, index) => {
                  return (
                    <li className="header__list-items" key={index}>
                      <Link
                        href={`${
                          element === "Home" ? "/" : `/${element.toLowerCase()}`
                        }`}
                      >
                        <a className="header__links">{element}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </React.Fragment>
  );
}
