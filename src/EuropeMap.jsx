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

    const countryIsoCode = event.target.id.substring(0, 2);
    console.log(countryIsoCode);

    fetchCountryData(countryIsoCode);

    setCurrentCountryElement(event.target);
  }

  return (
    <>
      <div>hallo</div>
      <div>
        <EuropeSvg onClick={handleClick} />
      </div>
    </>
  );
}

async function fetchCountryData(countryIsoCode) {
  const response = await fetch(
    "https://restcountries.com/v3.1/alpha/" + countryIsoCode
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export default EuropeMap;
