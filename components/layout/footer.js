/**
 * Presentation Component: Footer
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../styles/components/_footer.scss";

export default function Footer({ footerData = {}, AEM_HOST_URI = "" }) {
  const {
    copyRightContent = "Copyright © 2022 Adobe. All rights reserved.",
    copyRightLogo = "/head-logo.svg",
    brandLogo = "/brand-logo.webp",
    footerQuickLinks = ["Privacy", "Notice", "FAQ", "Terms Of Use"],
  } = footerData;
  return (
    <React.Fragment>
      <footer>
        <div className="footer">
          <div className="footer__copyright">
            <Image
              src={`${AEM_HOST_URI.replace("author", "publish")}${
                copyRightLogo._path
              }`}
              alt={copyRightContent}
              height="20"
              width="20"
            />
            <span className="footer__text">{copyRightContent}</span>
          </div>
          <div className="footer__brand-logo">
            <Image
              src={`${AEM_HOST_URI.replace("author", "publish")}${
                brandLogo._path
              }`}
              alt={copyRightContent}
              width="200"
              height="100"
            />
          </div>
          <div className="footer__links">
            <ul className="footer__list">
              {footerQuickLinks.map((element, index) => {
                return (
                  <li className="footer__list-items" key={index}>
                    <Link href={"/"}>
                      <a className="footer__list-links">{element}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
