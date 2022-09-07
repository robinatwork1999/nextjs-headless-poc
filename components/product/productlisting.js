/**
 * Presentation Component: PL
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../styles/components/_productlisting.scss";

export default function ProductListing({
  productListingData = [],
  AEM_HOST_URI = "",
}) {
  return (
    <React.Fragment>
      <div className="product-list">
        <ul className="product-list__card">
          {productListingData.map((element, index) => {
            return (
              <React.Fragment key={index}>
                <li className="product-list__card-items">
                  <div className="product-list__image">
                    <Link href={"/products/" + element.id}>
                      <a>
                        <Image
                          src={`${AEM_HOST_URI.replace("author", "publish")}${
                            element.imageUrl._path
                          }`}
                          alt={element.title}
                          width="200"
                          height="200"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="product-list__content">
                    <Link href={"/products/" + element.id} passHref>
                      <h3 className="product-list__title">{element.title}</h3>
                    </Link>
                    <span className="product-list__description">
                      {element.description}
                    </span>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
