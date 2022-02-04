import React,{useState} from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../AirB&B/Styles/Search.css";

import { DateRangePicker } from "react-date-range";



const Search = () => {

          const [startDate, setStartDate] = useState(new Date());
          const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
          startDate:startDate ,
          endDate: endDate,
    key: "selection",
  };


  function handleSelect(ranges) {
          setStartDate(ranges.selection.startDate)
          setEndDate(ranges.selection.endDate)
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
};

export default Search;
