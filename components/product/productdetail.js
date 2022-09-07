/**
 * Presentation Component: PD
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import Ratings from "components/ratings";
import Seo from "components/seo";
import Teaser from "components/teaser";
import Text from "components/text";
import React from "react";

export default function PDetails({ productDetails = {}, AEM_HOST_URI }) {
  const {
    bannerUrl = "",
    title = "",
    lngDescription = "",
    rating = "",
    baseDataURL = "",
  } = productDetails;

  const teaserData = {
    imageURL: bannerUrl,
    baseDataURL: baseDataURL,
  };

  const textHeaderData = {
    description: title,
    variation: "text--variation1",
  };

  const textDescriptionData = {
    description: lngDescription,
    variation: "text--variation2",
  };

  return (
    <React.Fragment>
      <Seo pageTitle={title} />
      <Teaser teaserData={teaserData} AEM_HOST_URI={AEM_HOST_URI} />
      <Text text={textHeaderData} />
      <Text text={textDescriptionData} />
      <Ratings rating={rating} />
    </React.Fragment>
  );
}
