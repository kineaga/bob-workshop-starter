import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <>
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Kort oppsummert
      </Typography>
      <Typography>
      Austevollsbunaden er en vakker og tradisjonsrik drakt som stammer fra øykommunen Austevoll på Vestlandet i Norge. En viktig del av denne bunadens uttrykk er bringeduk, også kjent som bringeskjorte. Bringeduken til Austevollsbunaden er en nøye utformet og håndbrodert skjorte som bæres under livet og vesten. Denne skjorten er et mesterverk av bunadshåndverk og prydes ofte med vakre broderier som symboliserer regionens rike kulturarv. Bringeduken er med på å fullføre bunadens autentiske uttrykk, og den er en stolt bærer av Austevolls kulturarv og tradisjoner.
      </Typography>
    </Box>
    <Box py={5} bgcolor="#FFFACD" borderRadius={3} boxShadow={3} mt={4} px={3}>
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

export default Description;
