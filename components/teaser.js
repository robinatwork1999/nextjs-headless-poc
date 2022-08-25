import Image from "next/image";
import React from "react";
import "../styles/components/_teaser.scss";
import "../styles/components/_button.scss";

export default function Teaser({ teaserData = {} }) {
  const {
    title = "",
    description = "",
    imageURL = "",
    buttonText = "",
    variation = null,
    baseDataURL = ""
  } = teaserData;

  return (
    <React.Fragment>
      <div className={`teaser ${variation}`}>
        <div className="cmp-teaser">
          {variation && (
            <div className="cmp-teaser__content">
              <h2 className="cmp-teaser__title"> {title} </h2>
              <div className="cmp-teaser__description">{description}</div>
              <button className="button">{buttonText}</button>
            </div>
          )}
          <div className="cmp-teaser__image">
            {imageURL && (
              <Image src={imageURL} layout="fill" alt={title} placeholder='blur' blurDataURL={baseDataURL} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
