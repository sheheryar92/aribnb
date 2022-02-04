import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import React from "react";
import './Styles/Home.css'

const CardComp = ({ title, url }) => {
  return (
    <div className="Card_class">
      <Card sx={{ minWidth: 275 }} >
        <CardMedia component="img" src={url} />
      </Card>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </div>
  );
};

export default CardComp;
