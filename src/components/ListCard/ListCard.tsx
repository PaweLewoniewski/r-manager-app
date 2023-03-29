import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useLocation } from "react-router-dom";
import { formatCurrency } from '../../utilities/formatCurrency';
import { CardProps } from '../../data/dataTypes';
import { SmallSelectInput } from '../../assets/SmallSelectInput/SmallSelectInput';
import { tableQuantity } from '../../data/data';

type MenuCardType = {
  data: CardProps;
};

export const ListCard = ({ data }: MenuCardType) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, atLocation } =
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
        padding: "5px",
      }}
    >
      <CardMedia sx={{ minHeight: 140 }} image={data.url} title="food" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Wait Time</Typography>
          <Typography>45 min </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Price</Typography>
          <Typography>{formatCurrency(data.price)}</Typography>
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'flex-end', height: '100%', width: '100%' }}>
        {atLocation ?
          <SmallSelectInput valueData={tableQuantity} name={'Table'} /> : ''
        }
        <Box>
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
            <Box style={{ display: "flex" }}>
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
        </Box>
      </Box>
    </Card>
  );
};
