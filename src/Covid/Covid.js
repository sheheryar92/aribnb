import { Avatar, Card, FormControl, MenuItem, Select, Tab } from "@material-ui/core";

import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Covid/Covid.css";
import InfoBox from "./InfoBox";
import TableData from "./TableData";
const Covid = () => {
  const [country, setCountry] = useState([]);
  const [worldWide, setWorldWide] = useState("worldwide");
  const [oneCountry, setOneCountry] = useState({});

  useEffect(() => {
    // const  countriesApi =  await  axios.get('https://disease.sh/v3/covid-19/countries') . then((response) =>  (response.data )    ).catch( (e) => console.log(e) )

    // const countryData = countriesApi.map(c => c.country)

    // setCountry(countryData)

    async function countryFunction(params) {
      const countriesApi = await axios
        .get("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.data)
        .catch((e) => console.log(e));

      console.log(countriesApi, "this is document");

      const countryData = countriesApi.map((singleCountyList) => ({
        countryName: singleCountyList.country,
        countryIos: singleCountyList.countryInfo.iso2,
        cases : singleCountyList.cases
      }));

      setCountry(countryData);
    }

    countryFunction();
  }, []);

console.log(country, 'this is country')

  const onCountryCHange = async (event) => {
    let countryCode = event.target.value;
    setWorldWide(countryCode);

    console.log("this is country code================>>>", countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    const selectedCountry = await axios.get(url).then((ress) => ress.data);
    setOneCountry(selectedCountry);
    console.log("this is url =======================>>>", url);
  };

  return (
    <>
      <div className="main_container">
        <div className="left_side">
          <div className="covid_header">
            <h1>This is covid tracker App..........!!!</h1>

            <FormControl>
              <Select
                variant="outlined"
                value={worldWide}
                onChange={onCountryCHange}
              >
                <MenuItem value="worldwide">world wide</MenuItem>

                {country.map((countryList, index) => (
                  <MenuItem key={index} value={countryList.countryIos}>
                    {countryList.countryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="card_container">
            <InfoBox
              title="Corona Virus Caces"
              cases={oneCountry.cases}
              todayCases={oneCountry.todayCases}
            />
            <InfoBox
              title="Recoverd"
              cases={oneCountry.recovered}
              todayCases={oneCountry.todayRecovered}
            />
            <InfoBox
              title="Deaths"
              cases={oneCountry.deaths}
              todayCases={oneCountry.todayDeaths}
            />
          </div>

          <div>
            {" "}
            <h1>Map</h1>{" "}
          </div>
        </div>

        <Card >
          <h1>Live Cases By Country</h1>
<TableData   countryTable={country}  />
<h1>World Wide New Cases</h1>

        </Card>
      </div>
    </>
  );
};

export default Covid;
