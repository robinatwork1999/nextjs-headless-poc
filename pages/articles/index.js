/**
 * Article Listing Page
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import ArticleListing from "@/article/articlelisting";
import Seo from "components/seo";
import Teaser from "components/teaser";
import React from "react";
import "../../styles/components/_article-layout.scss";

export default function Article({
  teaserData = {},
  articleListing = {},
  pageTitle = "",
  articleData = {},
}) {
  return (
    <React.Fragment>
      <Seo pageTitle={pageTitle} />
      <Teaser teaserData={teaserData} />
      <div className="section-article">
        <div className="section-article__content">
          <h3 className="section-article__title">{articleData.title}</h3>
          <p className="section-article__description">
            {articleData.description}
          </p>
        </div>
        <ArticleListing articleListingData={articleListing} />
      </div>
    </React.Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "Articles",
      teaserData: {
        title: "Adventure inspires creativity.",
        description:
          "From the darkest depths of the Misty Mountains to the majestic forests of the elf-capital of Lindon and to the breathtaking island kingdom of Númenor",
        imageURL: "/article-banner.webp",
        newsTag: "2022-04-21",
        baseDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURfT3++fq8Nfb57W4x2JYVkIzL+DRyUtdd4N4eJqbotixm20bro4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAA1SURBVAjXY2AAAgkgFkgSBZFpYDIxlYFBUKgxlYFRUTg4lUFQSblyCoisamEwNtKsAJPlLgDO1QmB5oLiTQAAAABJRU5ErkJggg==",
        variation: "teaser--variation-3",
        articleType: "News",
      },

      articleData: {
        title: "Get versed in the Metaverse",
        description:
          "The latest stories on the newest era of digital experiences.",
      },

      headerData: {
        logoURL: "/head-logo.svg",
        imageAlt: "alt",
        logoFallBackURL: "",
        navItems: ["Home", "Products", "Articles"],
      },

      footerData: {
        copyRightContent: "Copyright © 2022 Adobe. All rights reserved.",
        copyRightLogo: "/head-logo.svg",
        brandLogo: "/brand-logo.webp",
        footerQuickLinks: ["Privacy", "Notice", "FAQ", "Terms Of Use"],
      },

      articleListing: [
        {
          id: "cre",
          title: "Design careers find a new dimension",
          imageUrl: "/creativity.webp",
          tag: "Creativity",
        },
        {
          id: "met",
          title: "Adobe and the metaverse: the future of immersive",
          imageUrl: "/metaverse.webp",
          tag: "Metaverse",
        },
        {
          id: "news",
          title: "Make the digital economy personal",
          imageUrl: "/news.webp",
          tag: "News",
        },
      ],
    },
  };
}
