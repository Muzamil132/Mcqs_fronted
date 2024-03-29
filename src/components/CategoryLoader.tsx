import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Paper } from '@mui/material';

export  function CategoryLoader() {
  return (
    <Box sx={{maxWidth:"450px",width:"95%",marginTop:"5px" }}>
  
     
     <Box sx={{display:"flex",alignItems:"center",px:2}} >
     
     <Skeleton   width="100%" height={60} />
    
     
     </Box>

  
    </Box>
  );
}



export  function ItemLoader() {
    return (
      <Box sx={{maxWidth:"450px",width:"100%",marginTop:"10px" }}>
      <Paper sx={{p:2,borderRadius:"10px"}}  >
     
          <Box sx={{marginTop:1,display:"flex"}} >
          <Skeleton   width="100%" height={100} />
          <Skeleton animation="wave" variant="circular" width={100} height={100} />
          
          </Box>
    
        </Paper>
      </Box>
    );
  }
