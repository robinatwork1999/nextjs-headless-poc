import ProductListing from "@/product/productlisting";
import Seo from "components/seo";
import Teaser from "components/teaser";
import Text from "components/text";
import React from "react";

export default function Home({
  teaserData = {},
  bannerTextData = {},
  productTextData = {},
  productListing = [],
  pageTitle = "",
}) {
  return (
    <React.Fragment>
      <Seo pageTitle={pageTitle} />
      <Text text={bannerTextData} />
      <Teaser teaserData={teaserData} />
      <Text text={productTextData}></Text>
      <ProductListing productListingData={productListing} />
    </React.Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "Home",
      teaserData: {
        title: "Teaser Title",
        description: "Teaser Descripton For Hero Banner",
        imageURL: "/home-hero-banner.jpeg",
        buttonText: "CTA Label",
        baseDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURfT3++fq8Nfb57W4x2JYVkIzL+DRyUtdd4N4eJqbotixm20bro4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAA1SURBVAjXY2AAAgkgFkgSBZFpYDIxlYFBUKgxlYFRUTg4lUFQSblyCoisamEwNtKsAJPlLgDO1QmB5oLiTQAAAABJRU5ErkJggg==",
        variation: "teaser-variation-1",
      },

      bannerTextData: {
        variation: "text--variation1",
        description: "Welcome to AEM - Headless POC Using NextJS",
      },

      headerData: {
        logoURL: "/head-logo.svg",
        imageAlt: "alt",
        baseDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURfT3++fq8Nfb57W4x2JYVkIzL+DRyUtdd4N4eJqbotixm20bro4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAA1SURBVAjXY2AAAgkgFkgSBZFpYDIxlYFBUKgxlYFRUTg4lUFQSblyCoisamEwNtKsAJPlLgDO1QmB5oLiTQAAAABJRU5ErkJggg==",
        navItems: ["Home", "Product", "Articles", "3D Tour"],
      },

      footerData: {
        copyRightContent: "Copyright © 2022 Adobe. All rights reserved.",
        copyRightLogo: "/head-logo.svg",
        brandLogo: "/brand-logo.webp",
        footerQuickLinks: ["Privacy", "Notice", "FAQ", "Terms Of Use"],
      },

      productTextData: {
        variation: "text--variation1",
        description: "Trending Products",
      },

      productListing: [
        {
          id: "acr",
          title: "Acrobat Reader",
          description: "View, fill, sign and comment on PDFs for free.",
          lngDescription:
            "The main function of Adobe Acrobat is creating, viewing, and editing PDF documents. It can import popular document and image formats and save them as PDF. It is also possible to import a scanner's output, a website, or the contents of the Windows clipboard.",
          imageUrl: "/acrobat.png",
          rating: "4.8",
        },
        {
          id: "pht",
          title: "Photoshop",
          description:
            "Edit, composite and create beautiful images, graphics and art on desktop and iPad.",
          imageUrl: "/photoshop.png",
        },
        {
          id: "afe",
          title: "After Effects",
          description: "Cinematic visual effects and motion graphics.",
          imageUrl: "/aftereffect.png",
        },
      ],
    },
  };
}
