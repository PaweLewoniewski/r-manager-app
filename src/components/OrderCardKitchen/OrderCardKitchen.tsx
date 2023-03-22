import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BgCategory from "../../assets/img/categorymenu.webp";

export const OrderCardKitchen = () => {
  return (
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
        image={BgCategory}
        alt="Food Example Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width:'85%' }}>
        <CardContent sx={{padding:'5px'}}>
          <Typography variant="h6">
            Meat Title
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderLeft: "1px solid black",
          width:'100%',
        }}
      >
        <CardContent sx={{padding:'10px'}}>
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
              justifyContent: "flex-end",
              paddingTop: "15px",
            }}
          >
            <Button variant="contained" color="warning">
              Ready
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
