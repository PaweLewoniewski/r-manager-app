import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BgCategory from "../../assets/img/categorymenu.webp";
import { CategoryData, ImgUrl } from "../../views/CategoryMenu/CategoryMenu";

type MenuCardProp = CategoryData & ImgUrl;

interface MenuCardProps {
  title:string;
  url:string;
}

export const MenuCard = ({title,url}:MenuCardProps) => {

  return (
    <Card sx={{ maxWidth: 345, margin: "10px", minWidth: "300px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url? url : BgCategory}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
