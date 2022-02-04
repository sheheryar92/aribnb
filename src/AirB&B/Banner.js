import { Button } from "@material-ui/core";
import Search from '../AirB&B/Search'
import React,{useState} from "react";
import "../AirB&B/Styles/Banner.css";
const Banner = () => {
  const [searchDate, setSearchDate] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        <Button variant="outlined" className="banner_searchButton" onClick={() => {setSearchDate(!searchDate)}}>
          Search Dates
        </Button>

{searchDate && <Search />}
      </div>

   
      <div className="banner_info">
        <h1>
          Get out and strech <br /> your imaginatio
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
          reprehenderit delectus. Iusto, provident. Sed non praesentium
          doloribus, exercitationem debitis deleniti molestiae quae temporibus
          voluptas cupiditate, perferendis fugiat inventore labore.
        </p>
        <Button variant="outlined" color="secondary">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
