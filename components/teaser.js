/**
 * Presentation Component: Teaser
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Image from "next/image";
import React from "react";
import "../styles/components/_teaser.scss";
import "../styles/components/_button.scss";

export default function Teaser({ teaserData = {} }) {
  const {
    title = "",
    description = "",
    imageURL = "",
    buttonText = null,
    buttonVariation = "",
    variation = null,
    baseDataURL = "",
    newsTag = null,
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
              {newsTag && <p className="cmp-teaser__news-tag">{newsTag}</p>}
            </div>
          )}
          <div className="cmp-teaser__image">
            {imageURL && (
              <Image
                src={imageURL}
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
