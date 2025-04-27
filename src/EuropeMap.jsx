import React, { useState, useEffect } from "react";
import EuropeSvg from "./EuropeSvg";

function EuropeMap() {
  // State to store current conuntry element
  const [currentCountryElement, setCurrentCountryElement] = useState(null);
  const [currentCountryData, setCurrentCountryData] = useState({
    commonName: "Click on a country",
  });

  // useEffect
  useEffect(() => {
    if (currentCountryElement == null) {
      return;
    }

    currentCountryElement.style.fill = "red";
  }, [currentCountryElement]); // Empty dependency array means this runs once on mount

  async function handleClick() {
    const eventTarget = event.target;

    if (
      eventTarget.id === "ocean" ||
      eventTarget.id === "Large masses of water" ||
      (currentCountryElement !== null &&
        eventTarget.id === currentCountryElement.id)
    ) {
      return;
    }

    if (currentCountryElement !== null) {
      currentCountryElement.style.fill = "silver";
    }

    setCurrentCountryElement(eventTarget);

    const isoCode = eventTarget.id.substring(0, 2);
    const countryData = await fetchCountryData(isoCode);
    setCurrentCountryData(countryData);
  }

  return (
    <div width="100%">
      <div>
        <h1>
          {currentCountryData.commonName + " "}
          <img height={25} src={currentCountryData.flagUrl}></img>
        </h1>
        <p>Country code: {currentCountryData.countryCode}</p>
        <p>Official name: {currentCountryData.officialName}</p>
        <p>Population: {currentCountryData.population}</p>
        <p>Capital: {currentCountryData.capital}</p>
      </div>
      <div width="100%">
        <EuropeSvg onClick={handleClick} />
      </div>
    </div>
  );
}

async function fetchCountryData(isoCode) {
  const response = await fetch(
    "https://restcountries.com/v3.1/alpha/" + isoCode
  );
  const data = await response.json();
  const countryData = {
    commonName: data[0].name.common,
    officialName: data[0].name.official,
    countryCode: data[0].cca2,
    capital: data[0].capital[0],
    flagUrl: data[0].flags.png,
    population: data[0].population,
  };

  console.log(countryData);
  return countryData;
}

export default EuropeMap;
