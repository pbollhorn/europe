import React, { useState, useEffect } from "react";
import EuropeSvg from "./EuropeSvg";

function EuropeMap() {
  // State to store current conuntry element
  const [currentCountryElement, setCurrentCountryElement] = useState(null);

  // useEffect
  useEffect(() => {
    if (currentCountryElement == null) {
      return;
    }

    currentCountryElement.style.fill = "red";
  }, [currentCountryElement]); // Empty dependency array means this runs once on mount

  function handleClick() {
    if (currentCountryElement != null) {
      currentCountryElement.style.fill = "silver";
    }

    setCurrentCountryElement(event.target);
  }

  return <EuropeSvg onClick={handleClick} />;
}

export default EuropeMap;
