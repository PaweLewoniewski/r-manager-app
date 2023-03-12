import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import BgCategory from "../../assets/img/categorymenu.webp";

export const ListCard = () => {
  
    return (
        <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`${BgCategory}`}
          alt="Food Example Image"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Typography>
              actions
            </Typography>
          </Box>
        </Box>
      </Card>
    )
}