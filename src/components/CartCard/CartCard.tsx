import React from "react";
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
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { pageHelper } from "../../queries/queryHelper";

type CartItemProps = {
  id: number;
  quantity: number;
  storeCategory: string;
};

export const CardCart = ({ id, quantity, storeCategory }: CartItemProps) => {

  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  const itemInCart = pageHelper(storeCategory).find(i => i.id === id);
  if (itemInCart === undefined) return null;
  
  return (
    <>
          <Card
            key={id}
            sx={{
              display: "flex",
              width: "100%",
              padding: "1px",
              marginBottom: '10px'
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image={itemInCart.url}
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
                  {itemInCart.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="span"
                >
                  {itemInCart.description}
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
                    <Button variant="outlined" color="primary" onClick={() => increaseCartQuantity(id, storeCategory)}>
                      <AddIcon />
                    </Button>
                    <Typography style={{ padding: "10px" }}>
                      {" "}
                      {quantity}{" "}
                    </Typography>
                    <Button variant="outlined" color="primary" onClick={() => decreaseCartQuantity(id, storeCategory)}>
                      <RemoveIcon />
                    </Button>
                  </Box>
                  <Button variant="outlined" color="error" onClick={() => removeFromCart(id, storeCategory)}>
                    <DeleteForeverIcon />
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Card>
    </>
  );
};


  // useEffect(() => {
  //   if (itemInCart !== undefined) {
  //     setCartItem([itemInCart]);
  //   }
  // }, [cartItem, itemInCart])


  // const { refetch, status, data } = useQuery({
  //   queryKey: ["MenuFoodData"],
  //   queryFn: () => getFoodMenu(storeCategory),
  //   onSuccess: (data) => {
  //     itemInCart = data.find((i: { id: number }) => i.id === id);
  //     setCartItem([itemInCart]);
  //   },
  // });

  // if (status === "loading") return <div>Loading...</div>;

  // if (status === "error") return <div>An error has occurred</div>;

// {cartItem !== undefined
//   ? cartItem.map(
//       ({
//         id,
//         attributes: {
//           title,
//           description,
//           image: {
//             data: [
//               {
//                 attributes: { url },
//               },
//             ],
//           },
//         },
//       }: CategoryData) => ()
//       )
//     : ""}