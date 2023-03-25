import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Slide,
  Typography,
} from "@mui/material";
import { SmallSelectInput } from "../../assets/SmallSelectInput/SmallSelectInput";
import { tableQuantity } from "../../data/data";
import { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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

export const ListCard = ({ data, atLocation }: MenuCardType) => {
  const containerRef = useRef(null);
  const [enterGrowAnimation, setEnterGrowAnimation] = useState(true);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(data.id);

  return (
    <div ref={containerRef}>
      <Slide
        direction="up"
        in={enterGrowAnimation}
        container={containerRef.current}
        {...(enterGrowAnimation ? { timeout: 500 } : {})}
      >
        <Card
          sx={{
            display: "flex",
            maxWidth: "800px",
            padding: "10px",
            margin: "10px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151, objectFit: "cover" }}
            image={data.url}
            alt="Food Example Image"
          />
          <Box>
            <CardContent style={{ display: "flex", flexDirection: "column" }}>
              <Typography component="span" variant="h5">
                {data.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="span"
              >
                {data.description}
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
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Price:</Typography>
                <Typography>$12.50</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Wait Time:</Typography>
                <Typography>34 min</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  paddingTop: "20px",
                }}
              >
                {quantity === 0 ? (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => increaseCartQuantity(data.id)}
                  >
                    Order
                  </Button>
                ) : (
                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Box style={{ display: "flex", padding: "10px" }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => increaseCartQuantity(data.id)}
                      >
                        <AddIcon />
                      </Button>
                      <Typography style={{ padding: "10px" }}>
                        {quantity}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => decreaseCartQuantity(data.id)}
                      >
                        <RemoveIcon />
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
              {atLocation ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <SmallSelectInput valueData={tableQuantity} name={"Table"} />
                </Box>
              ) : (
                []
              )}
            </CardContent>
          </Box>
        </Card>
      </Slide>
    </div>
  );
};
