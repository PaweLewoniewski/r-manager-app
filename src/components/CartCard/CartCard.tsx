import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BgCategory from "../../assets/img/categorymenu.webp";
import { SmallSelectInput } from "../../assets/SmallSelectInput/SmallSelectInput";
import { tableQuantity } from "../../data/data";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const CardCart = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        padding: "1px",
        margin: "10px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={BgCategory}
        alt="Food Example Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ padding: "5px" }}>
          <Typography variant="h6">Meat Title</Typography>
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
            <Box />
            <SmallSelectInput valueData={tableQuantity} name={"Quantity"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "15px",
            }}
          >
            <Button variant="contained" color="warning">
              <DeleteForeverIcon />
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
