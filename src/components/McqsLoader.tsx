import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Paper } from '@mui/material';

export default function McqsLoader() {
  return (
    <Box sx={{ width: "98%",marginTop:"10px",paddingHorizontal:"10px" }}>
  
    <Skeleton  width="100%" height={100} />
        <Box sx={{marginTop:1,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={20} height={20} />
        <Skeleton sx={{marginLeft:"10px"}} width={200} />
        </Box>
        <Box sx={{marginTop:1,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={20} height={20} />
        <Skeleton sx={{marginLeft:"10px"}} width={200} />
        </Box>
        <Box sx={{marginTop:1,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={20} height={20} />
        <Skeleton sx={{marginLeft:"10px"}} width={200} />
        </Box>
        <Box sx={{marginTop:1,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={20} height={20} />
        <Skeleton sx={{marginLeft:"10px"}} width={200} />
        </Box>
  
     
    </Box>
  );
}
