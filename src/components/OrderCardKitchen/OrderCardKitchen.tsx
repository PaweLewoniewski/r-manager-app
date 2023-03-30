import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Slide,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { pageHelper } from "../../queries/queryHelper";

type KitchenCartProps = {
  id: number;
  quantity: number;
  storeCategory: string;
};

export const OrderCardKitchen = ({
  id,
  quantity,
  storeCategory,
}: KitchenCartProps) => {
  const [removeConfirm, setRemoveConfirm] = useState<boolean>(false);
  const { removeFromCart } = useShoppingCart();
  const [animation, setAnimation] = useState(true);

  const itemInCart = pageHelper(storeCategory).find((i) => i.id === id);
  if (itemInCart === undefined) return null;

  return (

      <Slide
        direction="down"
        in={animation}
        mountOnEnter unmountOnExit
        style={{ transformOrigin: '0 0 0' }}
        {...(animation ? { timeout: 800 } : {})}
      >
        <Card
          sx={{
            display: "flex",
            maxWidth: "800px",
            padding: "1px",
            margin: "10px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 75 }}
            image={itemInCart.url}
            alt="Food Example Image"
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "85%" }}>
            <CardContent sx={{ padding: "5px" }}>
              <Typography component={"span"} variant="h6">
                {itemInCart.title}
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
                <Typography>Ordered Time</Typography>
                <Typography>34 min ago</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Quantity</Typography>
                <Typography>{quantity}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "15px",
                }}
              >
                {removeConfirm ? (
                  <>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ marginRight: "10px" }}
                      onClick={() => removeFromCart(id, storeCategory)}
                    >
                      Yes
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => setRemoveConfirm(false)}
                    >
                      No
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => setRemoveConfirm(true)}
                  >
                    Ready
                  </Button>
                )}
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Slide>

  );
};
