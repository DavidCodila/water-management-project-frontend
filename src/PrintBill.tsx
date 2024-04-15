import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { id } from './id.tsx';

export default function PrintBill() {
  const [waterUsed, setWaterUser] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    const userID = id[id.length - 1];
    var URL = "http://localhost:81/water-accounts/" + userID + "/bill";
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setWaterUser(JSON.stringify(data.waterUsage));
        setCost(JSON.stringify(data.cost))
      })
      .catch(error => {
        console.error(error);
        setWaterUser("Error");
        setCost("Error")
      });
      return () =>{
      }
  })
  return (
    <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom sx={{ display: 'block', textAlign: 'center' }}>
          Bill
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Typography variant="h5" gutterBottom sx={{ display: 'inline', textAlign: 'center' }}>
            Water (L)
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ display: 'block', textAlign: 'center' }}>
            Price ($)
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Typography variant="h5" gutterBottom sx={{ display: 'inline', textAlign: 'center' }}>
            {waterUsed}L
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ display: 'block', textAlign: 'center' }}>
            ${cost}
          </Typography>
        </Box>
     </Container>
  )
}
