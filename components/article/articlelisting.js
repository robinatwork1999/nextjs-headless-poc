/**
 * Presentation Component: AL
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../styles/components/_articlelisting.scss";

export default function ArticleListing({
  articleListingData = [],
  AEM_HOST_URI = "",
}) {
  return (
    <React.Fragment>
      <div className="article-list">
        <ul className="article-list__card">
          {articleListingData.map((element, index) => {
            return (
              <React.Fragment key={index}>
                <li className="article-list__card-items">
                  <div className="article-list__image">
                    <Link href={"/articles/" + element.id}>
                      <a>
                        <Image
                          src={`${AEM_HOST_URI.replace("author", "publish")}${
                            element.imageUrl._path
                          }`}
                          alt={element.title}
                          layout="fill"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="article-list__content">
                    <span className="article-list__tag">{element.tag}</span>
                    <Link href={"/articles/" + element.id}>
                      <a>
                        <h4 className="article-list__title">{element.title}</h4>
                      </a>
                    </Link>
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
