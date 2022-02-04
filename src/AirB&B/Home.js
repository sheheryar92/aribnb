import { Grid } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import CardComp from "./CardComp";

import "./Styles/Home.css";

function Home() {
  return (
    <div>
      <Banner />
      <div className="home_serction">
        <Grid container spacing={3}>
          <Grid item md={4}  xs={12}>
            <CardComp title={"officia porro iure quia iusto qui ipsa ut modi"} url={"https://www.brooklynpaper.com/wp-content/uploads/2019/04/dtg-slum-lord-airbnb-suit-2019-04-19-bk01_z.jpg"} />
          </Grid>
          <Grid item md={4} xs={12}>
            <CardComp title={"officia porro iure quia iusto qui ipsa ut modi"} url={"https://static01.nyt.com/images/2016/07/24/travel/24Getaway-Hotels-vs-Airbnb/24Getaway-Hotels-vs-Airbnb-jumbo.jpg"} />
          </Grid>
          <Grid item md={4} xs={12}>
            <CardComp title={"officia porro iure quia iusto qui ipsa ut modi"} url={"https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/Screen%20Shot%202020-03-26%20at%202.57.55%20PM.png"} />
          </Grid>
        </Grid>
      </div>
      <div className="home_serction">
        <Grid container spacing={3}>
          <Grid item md={4}  xs={12}>
            <CardComp title={"officia porro iure quia iusto qui ipsa ut modi"} url={"https://www.brooklynpaper.com/wp-content/uploads/2019/04/dtg-slum-lord-airbnb-suit-2019-04-19-bk01_z.jpg"} />
          </Grid>
          <Grid item md={4} xs={12}>
            <CardComp title={"officia porro iure quia iusto qui ipsa ut modi"} url={"https://static01.nyt.com/images/2016/07/24/travel/24Getaway-Hotels-vs-Airbnb/24Getaway-Hotels-vs-Airbnb-jumbo.jpg"} />
          </Grid>
          <Grid item md={4} xs={12}>
            <CardComp title={"officia porro iure quia iusto qui ipsa ut modi"} url={"https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/Screen%20Shot%202020-03-26%20at%202.57.55%20PM.png"} />
          </Grid>
        </Grid>
      </div>

<Footer />

    </div>
  );
}

export default Home;
