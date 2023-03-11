import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface MenuCardProps {
  title:string;
  url:string;
}

type MenuCardType = {
  data: MenuCardProps;
}

export const MenuCard = ({data}:MenuCardType) => {

  return (
    <Card sx={{ maxWidth: 345, margin: "10px", minWidth: "300px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.url}
          alt="food image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
