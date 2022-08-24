import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../styles/components/_header.scss";

export default function Header({ headerData = {} }) {
  const {
    logoURL = "/head-logo.svg",
    imageAlt = "alt",
    logoFallBackURL = "",
    navItems = ["Home", "Product", "Articles", "3D Tour"],
  } = headerData;
  return (
    <React.Fragment>
      <header>
        <div className="header">
          <Link href={"/"}>
            <a className="header__logo">
              <Image
                className="header__image"
                src={logoURL}
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
