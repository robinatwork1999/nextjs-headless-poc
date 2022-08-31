/**
 * Product Page Dynamic Routes
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import PDetails from "@/product/productdetail";
import { useRouter } from "next/router";
import React from "react";

export default function ProductDetails({ productDetail = {} }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <React.Fragment>
      <PDetails productDetails={productDetail} />
    </React.Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const productDetailsJSON = [
    {
      id: "acr",
      title: "Acrobat Reader",
      description: "View, fill, sign and comment on PDFs for free.",
      lngDescription:
        "The main function of Adobe Acrobat is creating, viewing, and editing PDF documents. It can import popular document and image formats and save them as PDF. It is also possible to import a scanner's output, a website, or the contents of the Windows clipboard.",
      imageUrl: "/acrobat.png",
      baseDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURcUPAXQFAaQJAM0yINJVRxv130EAAAAvSURBVAjXYxAEAQYgVhJkUAIBBgUlBgYmBkVmY2YGBkYwCQTMDiDSwAVEgplAAABvEgM1b3d9ugAAAABJRU5ErkJggg==",
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
      baseDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURRhFaixkkCh1qMdHkt4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAgSURBVAjXY2CAghAgdmRxYEgNDWBwBGInIF61agEMAwBuvwmNNIm65AAAAABJRU5ErkJggg==",
      bannerUrl: "/photoshop-banner.jpeg",
      rating: "5.0",
    },
    {
      id: "afe",
      title: "After Effects",
      description: "Cinematic visual effects and motion graphics.",
      lngDescription:
        "Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Systems and used in the post-production process of film making, video games and television production. Among other things, After Effects can be used for keying, tracking, compositing, and animation. It also functions as a very basic non-linear editor, audio editor, and media transcoder. In 2019, the program won an Academy Award for scientific and technical achievement.",
      imageUrl: "/aftereffect.png",
      baseDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURZeX/qSj/jNI4WFs7H194Dw7fGBdwCgrPpiI5rq6/kFBnpFryKhTe5AAAAAJcEhZcwAACxIAAAsSAdLdfvwAAABBSURBVAjXY2AQZAhXYmBcJlFqxMAYJVClxMCQJlEGFIkSKQayXUQCjBk4Z05JAMoKSqQYMzAIcmxRZmBg4NisDAAuWgpE6CSEbwAAAABJRU5ErkJggg==",
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
      baseDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURTscRYlNmloxZnFAfxQIG7duxgmAJGUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAABCSURBVAjXY1BSFWQSYmBiFDQUYmAWcGFVAJIGzMIMDgrCjMIMLkwKjEoMLgYOjMYMTAIujIEMTMLGRsEMSsyCgsEAkbUFoHazKhwAAAAASUVORK5CYII=",
      bannerUrl: "/premier-pro.webp",
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
      baseDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURRUsQ4MiDRsWG9zawqernsg0F2YhFwFQoAE9dUklK/FjRF1mcEpGSJuGeecpA943FoyOhsG8q4F3aYBKRPdDHZMvHC5TeIMWwvn6yn8AAAAJcEhZcwAACxIAAAsSAdLdfvwAAABUSURBVAjXFchJFgARDAXAjxAxdMz3P2qzq1dg5nhyTSaCT6Y+w7cBTN+oiHogmq+4cWkvNbsqXi/LEqpmr8cUcguiAYy0bR+Y5tHb6qi/1SXN0cAPztcDpX1sHEQAAAAASUVORK5CYII=",
      bannerUrl: "/illustrator-banner.jpeg",
      rating: "4.5",
    },
    {
      id: "ade",
      title: "Adobe Express",
      description:
        "Quickly and easily make standout content from thousands of beautiful templates.",
      imageUrl: "/premier.png",
      baseDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB1UExURexm+LtPtMN6+KNUrfYuTD43Pr57tfVfsNV3yI5Ym6dhu+GamdxdueNNam9ElcglJuh/mbVwp2t0dfxr09tSktJr6qBEj71v1Jx1yq9z1flw4PN65/lQiEJEW3M2bOxj6sBTWnthseRnZqWpntPI09t497t6rUboxJMAAAAJcEhZcwAACxIAAAsSAdLdfvwAAABiSURBVAjXDcZZAoMgDAXABwSSIIi7Vat20ftfsZ2vwfdhax9wGofu32OENAK1dh4BqRLiEm8APTOW2kdnjEmMt3qnbpoGhs5x29a15wEirSYmemaE4HeiUnKD0HbXJ1N5VT8DywUBZm/eMQAAAABJRU5ErkJggg==",
      lngDescription:
        "Adobe Express includes all the same great functionality and content as Adobe Spark, plus so much more. You can still quickly and easily create graphics, collages, flyers, videos, and animations with access to millions of templates, images, icons, and effects.",
      bannerUrl: "/adobe-express-banner.jpeg",
      rating: "4.0",
    },
    {
      id: "ani",
      title: "Animate",
      description: "A new age for animation. Any platform, device and style.",
      baseDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURQEBXCIifzg3lUTkZZoAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAUSURBVAjXY2BAA6qhDgxasxzQhQEiOwG/DHBpngAAAABJRU5ErkJggg==",
      lngDescription:
        "Animate is used to design vector graphics and animation for television series, online animation, websites, web applications, rich web applications, game development, commercials, and other interactive projects. The program also offers support for raster graphics, rich text, audio video embedding, and ActionScript 3.0 scripting. Animations may be published for HTML5, WebGL, Scalable Vector Graphics (SVG) animation and spritesheets, and legacy Flash Player (SWF) and Adobe AIR formats. The developed projects also extend to applications for Android, iOS, Windows Desktop and MacOS.",
      imageUrl: "/animate.png",
      bannerUrl: "/animate-banner.jpeg",
      rating: "4.2",
    },
  ];

  const _productJSON = productDetailsJSON.filter(
    (ele) => ele.id === params.productID
  );

  if (_productJSON.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productDetail: _productJSON[0],
    },
    revalidate: 10,
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { productID: "acr" } }],
    fallback: "blocking",
  };
}
