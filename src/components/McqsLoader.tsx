import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Paper } from '@mui/material';

export default function McqsLoader() {
  return (
    <Box sx={{ width: "100%",marginTop:"10px",marginHorizontal:"10px" }}>
  
    <Skeleton  width="100%" height={50} />
        <Box sx={{marginTop:0.5,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={15} height={15} />
        <Skeleton sx={{marginLeft:"10px"}} width={200} />
        </Box>
        <Box sx={{marginTop:1,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={15} height={15} />
        <Skeleton sx={{marginLeft:"10px"}} width={200} />
        </Box>
        <Box sx={{marginTop:1,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={15} height={15} />
        <Skeleton sx={{marginLeft:"10px"}} width={200} />
        </Box>
        <Box sx={{marginTop:1,display:"flex"}} >
        <Skeleton animation="wave" variant="circular" width={15} height={15} />
        <Skeleton sx={{marginLeft:"10px"}} width={100} />
        </Box>
  
     
    </Box>
  );
}
