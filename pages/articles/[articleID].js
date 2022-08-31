/**
 * Article Page Dynamic Routes
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import ADetails from "@/article/articledetail";
import { useRouter } from "next/router";
import React from "react";

export default function ArticleDetails({ articleDetail = {} }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <React.Fragment>
      <ADetails articleDetails={articleDetail} />
    </React.Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;

  const articleDetailsJSON = [
    {
      id: "cre",
      title: "Design careers find a new dimension",
      lngDescription:
        "For Extended Reality (XR) creator and designer Don Allen III, part of his career strategy designing for the rapidly evolving worlds of augmented and virtual reality (AR and VR) is to consistently, repeatedly, and without fail, put himself out of business every week.",
      imageUrl: "/creativity.webp",
      tag: "Creativity",
      publishedBy: "Lorem Podsum",
      publisherImage: "/avatar.png",
      publishedDate: "22-04-18",
      baseDataURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAUABQDAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABAUCAwcG/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAUGEQASIQcxQRMiUWEjMoH/xAAbAQACAgMBAAAAAAAAAAAAAAAFBgIDAAEEB//EACcRAAIBAwMDAwUAAAAAAAAAAAECAwAEEQUSITFBURSRoSNCYbHh/9oADAMBAAIRAxEAPwDm4nSAN0+XKZrMaO/twnLfqYxwMpHyTpe06yN1gmvUda1WLTAyxDkjvSirdKKrFqVtUBdSoyJ0xl5+Y2ltay+ltKSVNeABlWc9+ONTuI4oA+QeMd/Nas7prxrZCyguGLDae2OnzRMrpBIS8Uo2bR248aCs/PFNPpIj3o676fcIpLkilzmUTFbiyjftKikg8ffORn401LDPbgvEMAeKX9W06O+Q7xk1bMqVZFQsuSiXHlSY1OkyfxK4S4toBSSB2zlRx9DXVb6VDIoLDBbk/k9am0wSaFQB9MED2AqEq/KrEeLbxIWeSAeO+rX0e1zytdjajKhwy0tpkl2t3VBhVE+oyqO8SgEjJDK1Dt9pB/mi8w2ocUvXF5MWyDjA/daXY9l25WYltJkwC24aMHXHWXFIW6spQrco55PvI8cADxoWkjIIyD5Hx/KpuLqW2y6H7scgcDB6e1Zh1htqnW5fk+k0xchMdn9Qt0qPJPnROJtyBjWFmu0SaQnJA6HFf//Z",
    },
    {
      id: "met",
      title: "Adobe and the metaverse: the future of immersive",
      lngDescription:
        "The metaverse may sound like the working title for a new Marvel movie but make no mistake: it’s real and in many ways it’s already here. Augmented reality shopping, virtual travel in 3D, in-game live concerts, immersive company websites – all these experiences exist today and will only become more compelling as brands get better at creating hyper-realistic digital worlds. For all the headlines the metaverse is getting, it’s not out-of-reach to everyday brands and our customers. Rather, we’re at an inflection point where the right technology and a voracious appetite for immersive experiences are starting to shift our current business reality.",
      imageUrl: "/metaverse.webp",
      tag: "Metaverse",
      publishedBy: "Lorem Podsum",
      publisherImage: "/avatar.png",
      publishedDate: "22-05-28",
      baseDataURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAUIAwQGB//EACkQAAEDAwMDAgcAAAAAAAAAAAECAwQABREGEiEHE2FRkSIxMkFxcqH/xAAWAQEBAQAAAAAAAAAAAAAAAAAFBgT/xAAeEQABBAIDAQAAAAAAAAAAAAABAAIDBBEhEhORQf/aAAwDAQACEQMRAD8A5PovpxF1vDAlLKMhaUuK+nJxgKP2Hmpu66MYRqa5XKMW3mWHUtrCeSlZUAFfqdqufHmojpVrGG/aw6ZDMLalbfbJwn4uSMZyRkD8YFaOrNTKt2onpsO6vLbLZQ5204G0gHHJ5GCPek57tmeyeJ18TNapWgrglWcjaTTJt0J+JKjsNrjpUULRznnNK8f031dt8qzsrl3DtuJBRt2KOAD6ilSb6l1zid+lItIAwHDwKtXTt5aIEkpxuCOCRkjKgM+1Qk+4TZdxcckyXHVnCSpR5IHA/gpSqqPT48KckJ6FgYmvx2+22oBPz59aUpW1pwNLJkr/2Q==",
    },
    {
      id: "news",
      title: "Make the digital economy personal",
      lngDescription:
        "The shift to digital over the past two years has been unprecedented — driven by necessity in the heart of the pandemic and with no going back. I’ve seen this first-hand with our own digital business, and heard it again and again in conversations with the largest brands across industries and around the world. As commerce, communication, entertainment, and our own day-to-day personal interactions have gone digital-first, a distinct economy has emerged. According to the Adobe Digital Economy Index, based on analysis through Adobe Analytics of one trillion visits to U.S. retail sites and more than 100 million SKUs in 18 product categories, this Digital Economy is expected to surpass $1 trillion this year in the U.S. alone. Indeed, that is enough to make any CEO sit up and take notice.",
      imageUrl: "/news.webp",
      tag: "News",
      publishedBy: "Lorem Podsum",
      publisherImage: "/avatar.png",
      publishedDate: "22-08-03",
      baseDataURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAQACAwAAAAAAAAAAAAAAAAYCAwQHCP/EACgQAAIBAwMDBAIDAAAAAAAAAAECAwAEEQUGIQcSQRQiMVEVYROBkf/EABcBAAMBAAAAAAAAAAAAAAAAAAQFBgf/xAAmEQACAQMCBAcAAAAAAAAAAAABAhEAAwQhQQUxYXEGFDNSobHR/9oADAMBAAIRAxEAPwDq7prtq3n23daxc2Qu7ieZoLZGj7sKvDED7JIGfGP3VtbaJcXmgQ6S9vfSIHDRlY27gGwAM+cMCv7+PmuN0v1nb1h0ytYr7UlF6nqDBiKQlcsrkMR7Pc6lQRyOc8Yq83V1L2W2l/idKu5bfUVhR1liik4CMZDzjglskUokG5cIfU8ukdKt+F2snGxkRrJZWOpgwVYCNY2g/PevKm4PW6Drt9pzWskbLOxaN07WQ5wQR4ORSqTekNu26tTklu45f5LqWRXIb3KzsVPx5BB5+6U2HKou4pRypEEbVlvS4f8AKanbKqRwjUmIRF7R7oo3PH13Mx/ut2xWNzfWolPdlzGT57c4x/lKUpywBake79q78GXXbiJBJ9L6Iiqe+tLa5u5JJoI3bOMlAePqlKUIbjDetQ8pYbVkBPYV/9k=",
    },
  ];

  const _articleJSON = articleDetailsJSON.filter(
    (ele) => ele.id === params.articleID
  );

  if (_articleJSON.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleDetail: _articleJSON[0],
    },
    revalidate: 10,
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { articleID: "cre" } },
      { params: { articleID: "met" } },
      { params: { articleID: "news" } },
    ],
    fallback: "blocking",
  };
}
