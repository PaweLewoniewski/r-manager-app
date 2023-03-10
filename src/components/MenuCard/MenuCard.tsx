import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BgCategory from "../../assets/img/categorymenu.webp";

export const MenuCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={BgCategory}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dinners
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dinner usually refers to what is in many Western cultures the
            largest and most formal meal of the day. Historically, the largest
            meal used to be eaten around midday, and called dinner
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
