import React, { useState, useEffect } from 'react';

const Details = () => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
      const data = await response.json();
      setCountry(data);
    };

    fetchCountry();
  }, [country]);

  return (
    <div>
      <h2 className="Country">{country}</h2>
      <ul className="country-data">
        <li className="deep">
          <li>Population</li>
          <li>{country.population}</li>
        </li>
        <li className="light">
          <li>Continent</li>
          <li>{country.continent}</li>
        </li>
        <li className="deep">
          <li>Recovered</li>
          <li>{country.recovered}</li>
        </li>
        <li className="light">
          <li>Deaths:</li>
          <li>{country.deaths}</li>
        </li>
        <li className="deep">
          <li>Tests</li>
          <li>{country.tests}</li>
        </li>
        <li className="light">
          <li>Active</li>
          <li>{country.active}</li>
        </li>
        <li className="deep">
          <li>Critical</li>
          <li>{country.critical}</li>
        </li>
      </ul>
    </div>
  );
};

export default Details;
