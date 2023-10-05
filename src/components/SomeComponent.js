import React from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

function SomeComponent() {
  return (
    <>  
    <Box py={5} bgcolor="#facdff" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Vent litt
      </Typography>
      <CircularProgress color="secondary" />
    </Box>
    <Box py={5} bgcolor="#fffacd" borderRadius={3} boxShadow={3} mt={4} px={3}>
    <Typography variant="h6" gutterBottom color="#3f51b5">
        Kort oppsummert om noe helt annet
      </Typography>
      <Typography> 
        Her er det noe annen tekst.   
      </Typography>
    </Box>
    </>
  );
}

export default SomeComponent;
