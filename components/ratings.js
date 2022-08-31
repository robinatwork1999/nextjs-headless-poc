/**
 * Presentation Component: Ratings
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import React from "react";
import "../styles/components/_ratings.scss";

export default function Ratings({ rating = "" }) {
  return (
    <React.Fragment>
      {rating && (
        <div className="rating" style={{ "--rating": rating }}>
          ({rating})
        </div>
      )}
    </React.Fragment>
  );
}
