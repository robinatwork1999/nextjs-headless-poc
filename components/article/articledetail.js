/**
 * Presentation Component: AD
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Seo from "components/seo";
import Teaser from "components/teaser";
import Text from "components/text";
import Image from "next/image";
import React from "react";
import "../../styles/components/_articledetails.scss";

export default function ADetails({ articleDetails = {} }) {
  const {
    imageUrl = "",
    title = "",
    lngDescription = "",
    baseDataURL = "",
    publishedBy = "",
    publisherImage = "",
    publishedDate = "",
    tag = "",
  } = articleDetails;

  const teaserData = {
    imageURL: imageUrl,
    baseDataURL: baseDataURL,
  };

  const textDescriptionData = {
    description: lngDescription,
    variation: "text--variation2",
  };

  return (
    <React.Fragment>
      <Seo pageTitle={title} />
      <div className="article-detail">
        <div className="article-detail__info">
          <p className="article-detail__tag">{tag}</p>
          <h2 className="article-detail__title">{title}</h2>
          <div className="article-detail__publisher-details">
            <div className="article-detail__publisher-image">
              <Image
                className="article-detail__publisher-raw"
                src={publisherImage}
                layout="fill"
              />
            </div>
            <div className="article-detail__publisher-profile">
              <h3 className="article-detail__publisher-name">{publishedBy}</h3>
              <p className="article-detail__publisher-date">{publishedDate}</p>
            </div>
          </div>
        </div>
        <div className="article-detail__content">
          <Teaser teaserData={teaserData} />
          <Text text={textDescriptionData} />
        </div>
      </div>
    </React.Fragment>
  );
}
