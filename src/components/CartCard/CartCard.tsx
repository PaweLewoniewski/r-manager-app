import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BgCategory from "../../assets/img/categorymenu.webp";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", justifyContent:"center" }}>
        <CardContent sx={{ padding: "5px" }}>
          <Typography variant="h5">Meat Title</Typography>
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
            <Typography variant='h6'>Wait Time</Typography>
            <Typography variant='h6'>45 min </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent:"space-between",
              paddingTop: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}
            >
              <Button variant="outlined" color="primary">
                <AddIcon />
              </Button>
              <Typography style={{ padding: '10px' }}> 1 </Typography>
              <Button variant="outlined" color="primary">
                <RemoveIcon />
              </Button>
            </Box>
            <Button variant="outlined" color="error">
              <DeleteForeverIcon />
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
