/**
 * Presentation Component: Teaser
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Image from "next/image";
import React from "react";
import "../styles/components/_teaser.scss";
import "../styles/components/_button.scss";

export default function Teaser({ teaserData = {}, AEM_HOST_URI = "" }) {
  const {
    title = "",
    description = "",
    imageURL = {},
    buttonText = null,
    buttonVariation = "",
    variation = null,
    baseDataURL = "",
    PublishedData = null,
    articleType = null,
  } = teaserData;
  return (
    <React.Fragment>
      <div className={`teaser ${variation}`}>
        <div className="cmp-teaser">
          {variation && (
            <div className="cmp-teaser__content">
              {articleType && (
                <p className="cmp-teaser__article-type">{articleType}</p>
              )}
              <h2 className="cmp-teaser__title"> {title} </h2>
              <p className="cmp-teaser__description">{description}</p>
              {buttonText && (
                <button className={`button ${buttonVariation}`}>
                  {buttonText}
                </button>
              )}
              {PublishedData && (
                <p className="cmp-teaser__news-tag">{PublishedData}</p>
              )}
            </div>
          )}
          <div className="cmp-teaser__image">
            {imageURL && (
              <Image
                src={`${AEM_HOST_URI.replace("author", "publish")}${
                  imageURL._path
                }`}
                layout="fill"
                alt={title}
                placeholder="blur"
                blurDataURL={baseDataURL}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
