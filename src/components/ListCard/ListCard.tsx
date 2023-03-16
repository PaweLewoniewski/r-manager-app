import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import BgCategory from "../../assets/img/categorymenu.webp";
import { SmallSelectInput } from "../../assets/SmallSelectInput/SmallSelectInput";
import { tableQuantity } from "../../data/data";

interface ListCardProps {
  title:string;
  url:string;
  description:string;
}

type MenuCardType = {
  data: ListCardProps;
  atLocation: boolean;
  // onClick:() => void;
}

export const ListCard = ({ data, atLocation }: MenuCardType) => {
  return (
    <Card sx={{ display: "flex", maxWidth:'800px', padding:'10px', margin:'10px' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data.url}
        alt="Food Example Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
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
              justifyContent: "space-between",
            }}
          >
            <SmallSelectInput valueData={tableQuantity} name={"Quantity"} />
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "15px",
            }}
          >
            <Button variant="contained" color="success">
              Order
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
