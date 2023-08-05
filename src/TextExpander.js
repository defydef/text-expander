import { useState } from "react";
import PropTypes from "prop-types";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expanded = false,
  className = "",
  expandButtonText = "Show more",
  buttonColor = "blue",
  collapseButtonText = "Show less",
}) {
  const paragraph = children.split(" ");
  const buttonStyle = {
    color: buttonColor,
    cursor: "pointer",
  };
  TextExpander.propTypes = {
    collapsedNumWords: PropTypes.number,
  };
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className={className}>
      {isExpanded
        ? paragraph.map((word, index) =>
            index === paragraph.length - 1 ? `${word}` : `${word} `
          )
        : paragraph.map((word, index) =>
            index < collapsedNumWords
              ? index === collapsedNumWords - 1 //last word displayed from the paragraph
                ? `${word}`
                : `${word} `
              : ""
          )}
      {!isExpanded ? `... ` : " "}
      {
        <span style={buttonStyle} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? collapseButtonText : expandButtonText}
        </span>
      }
    </div>
  );
}
