import React from "react";
import "../styles/components/_text.scss";

export default function Text({ text = {} }) {
  return (
    <React.Fragment>
      <div className={`text ${text.variation}`}>
        <span className="text__description">{text.description}</span>
      </div>
    </React.Fragment>
  );
}
