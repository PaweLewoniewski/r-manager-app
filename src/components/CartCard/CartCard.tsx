import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import BgCategory from "../../assets/img/categorymenu.webp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useQuery } from "@tanstack/react-query";
import { getFoodMenu } from "../../queries/queries";
import { CategoryData } from "../../views/FoodMenu/FoodMenu";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CardCart = ({ id, quantity }: CartItemProps) => {
  let itemInCart:CategoryData;
  const [cartItem, setCartItem] = useState<CategoryData[]>();
  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  
  const { refetch, status, data } = useQuery({
    queryKey: ["MenuFoodData"],
    queryFn: () => getFoodMenu("dinner"),
    onSuccess: (data) => {
      itemInCart = data.find((i: { id: number }) => i.id === id);
      setCartItem([itemInCart]);
      console.log(cartItem);
    },
  });

  if (status === "loading") return <div>Loading...</div>;

  if (status === "error") return <div>An error has occurred</div>;

  return (
    <>
      {cartItem !== undefined
        ? cartItem.map(
            ({
              id,
              attributes: {
                title,
                description,
                image: {
                  data: [
                    {
                      attributes: { url },
                    },
                  ],
                },
              },
            }: CategoryData) => (
              <Card
                key={id}
                sx={{
                  display: "flex",
                  width: "100%",
                  padding: "1px",
                  marginBottom:'10px'
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image={url}
                  alt="Food Example Image"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <CardContent
                    style={{
                      padding: "5px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography component={"span"} variant="h5">
                      {title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="span"
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderLeft: "1px solid black",
                    width: "100%",
                  }}
                >
                  <CardContent sx={{ padding: "10px" }}>
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
                      <Typography>Price:</Typography>
                      <Typography>$12.20</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Button variant="outlined" color="primary" onClick={() => increaseCartQuantity(id)}>
                          <AddIcon />
                        </Button>
                        <Typography style={{ padding: "10px" }}>
                          {" "}
                          {quantity}{" "}
                        </Typography>
                        <Button variant="outlined" color="primary" onClick={() => decreaseCartQuantity(id)}>
                          <RemoveIcon />
                        </Button>
                      </Box>
                      <Button variant="outlined" color="error" onClick={() => removeFromCart(id)}>
                        <DeleteForeverIcon />
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            )
          )
        : ""}
    </>
  );
};
