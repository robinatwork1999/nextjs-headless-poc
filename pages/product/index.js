import ProductListing from "@/product/productlisting";
import Seo from "components/seo";
import Teaser from "components/teaser";
import Text from "components/text";
import React from "react";

export default function Product({
  teaserData = {},
  bannerTextData = {},
  productListing = {},
  pageTitle = "",
}) {
  return (
    <React.Fragment>
      <Seo pageTitle={pageTitle} />
      <Teaser teaserData={teaserData} />
      <Text text={bannerTextData} />
      <ProductListing productListingData={productListing} />
    </React.Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "Products",

      teaserData: {
        imageURL: "/products.jpeg",
      },

      bannerTextData: {
        variation: "text--variation1",
        description: "All Products",
      },

      headerData: {
        logoURL: "/head-logo.svg",
        imageAlt: "alt",
        logoFallBackURL: "",
        navItems: ["Home", "Product", "Articles", "3D Tour"],
      },

      footerData: {
        copyRightContent: "Copyright © 2022 Adobe. All rights reserved.",
        copyRightLogo: "/head-logo.svg",
        brandLogo: "/brand-logo.webp",
        footerQuickLinks: ["Privacy", "Notice", "FAQ", "Terms Of Use"],
      },

      productListing: [
        {
          id: "acr",
          title: "Acrobat Reader",
          description: "View, fill, sign and comment on PDFs for free.",
          lngDescription:
            "The main function of Adobe Acrobat is creating, viewing, and editing PDF documents. It can import popular document and image formats and save them as PDF. It is also possible to import a scanner's output, a website, or the contents of the Windows clipboard.",
          imageUrl: "/acrobat.png",
          bannerUrl: "/acrobat-banner.png",
          rating: "4.8",
        },
        {
          id: "pht",
          title: "Photoshop",
          description:
            "Edit, composite and create beautiful images, graphics and art on desktop and iPad.",
          lngDescription:
            "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.",

          imageUrl: "/photoshop.png",
          bannerUrl: "/photoshop-banner.png",
          rating: "5.0",
        },
        {
          id: "afe",
          title: "After Effects",
          description: "Cinematic visual effects and motion graphics.",
          lngDescription:
            "Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Systems and used in the post-production process of film making, video games and television production. Among other things, After Effects can be used for keying, tracking, compositing, and animation. It also functions as a very basic non-linear editor, audio editor, and media transcoder. In 2019, the program won an Academy Award for scientific and technical achievement.",
          imageUrl: "/aftereffect.png",
          bannerUrl: "/after-effects-banner.jpeg",
          rating: "4.7",
        },
        {
          id: "prp",
          title: "Premiere Pro",
          description: "Industry-standard pro video and film editing.",
          lngDescription:
            "Adobe Premiere Pro is a timeline-based and non-linear video editing software application (NLE) developed by Adobe Inc. and published as part of the Adobe Creative Cloud licensing program. First launched in 2003, Adobe Premiere Pro is a successor of Adobe Premiere (first launched in 1991). It is geared towards professional video editing, while its sibling, Adobe Premiere Elements, targets the consumer market.",
          imageUrl: "/premier.png",
          bannerUrl: "/premier-pro.png",
          rating: "4.7",
        },
        {
          id: "ill",
          title: "Illustrator",
          description:
            "Create beautiful vector art and illustrations on desktop and iPad.",
          lngDescription:
            "Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985. Along with Creative Cloud (Adobe's shift to monthly or annual subscription service delivered over the Internet), Illustrator CC was released. The latest version, Illustrator 2022, was released on October 26, 2021, and is the 25th generation in the product line. Adobe Illustrator was reviewed as the best vector graphics editing program in 2018",
          imageUrl: "/illustrator.jpeg",
          bannerUrl: "/illustrator.jpeg",
          rating: "4.5",
        },
        {
          id: "ade",
          title: "Adobe Express",
          description:
            "Quickly and easily make standout content from thousands of beautiful templates.",
          imageUrl: "/premier.png",
          lngDescription:
            "Adobe Express includes all the same great functionality and content as Adobe Spark, plus so much more. You can still quickly and easily create graphics, collages, flyers, videos, and animations with access to millions of templates, images, icons, and effects.",
          bannerUrl: "/adobe-express-banner.jpeg",
          rating: "4.0",
        },
        {
          id: "ani",
          title: "Animate",
          description:
            "A new age for animation. Any platform, device and style.",
          lngDescription:
            "Animate is used to design vector graphics and animation for television series, online animation, websites, web applications, rich web applications, game development, commercials, and other interactive projects. The program also offers support for raster graphics, rich text, audio video embedding, and ActionScript 3.0 scripting. Animations may be published for HTML5, WebGL, Scalable Vector Graphics (SVG) animation and spritesheets, and legacy Flash Player (SWF) and Adobe AIR formats. The developed projects also extend to applications for Android, iOS, Windows Desktop and MacOS.",
          imageUrl: "/animate.png",
          bannerUrl: "animate-banner.jpeg",
          rating: "4.2",
        },
      ],
    },
  };
}
