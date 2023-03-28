import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useLocation } from "react-router-dom";

interface ListCardProps {
  id: number;
  title: string;
  url: string;
  description: string;
}

type MenuCardType = {
  data: ListCardProps;
  atLocation: boolean;
};

export const ListCard = ({ data }: MenuCardType) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const { state } = useLocation();
  const { titlePage } = state;

  const quantity = getItemQuantity(data.id);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "5px",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: "2px",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={data.url} title="food" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        {quantity === 0 ? (
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => increaseCartQuantity(data.id, titlePage)}
          >
            Order
          </Button>
        ) : (
          <Box style={{ display: "flex", padding: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => increaseCartQuantity(data.id, titlePage)}
            >
              <AddIcon />
            </Button>
            <Typography style={{ padding: "10px" }}>{quantity}</Typography>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => decreaseCartQuantity(data.id, titlePage)}
            >
              <RemoveIcon />
            </Button>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};
