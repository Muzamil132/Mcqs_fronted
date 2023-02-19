
import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box/Box';
import { useAppDispatch, useAppSelector } from '../selector';
import { IconButton } from '@mui/material';
import SIdeItems from './SIdeItems';
import { toggleDrawer } from '../Reducers/count';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
const MobDrawer = () => {

  const {open} = useAppSelector(state=>state.drawerState)
  const dispatch = useAppDispatch()

  return (
    <div>
        <SwipeableDrawer 
        onClose={()=>{}}
        onOpen={()=>{}}

        open={open}

        >
            <Box sx={{
                width:"280px",
                p:2,
            

            }}>
              <Box sx={{display:"flex",justifyContent:"end",marginBottom:"10px"}} >
                       <IconButton onClick={()=>dispatch(toggleDrawer())}  >
                       <CloseIcon/>
                       </IconButton>
              </Box>
              <Link to="/" style={{textDecoration:"none"}}  >
              <Typography sx={{
                px:2,
                color:"white",
                backgroundColor:"#374151",
                py:"3px",
                borderRadius:"5px"
                

              }} variant="h6">
                       Examica
              </Typography>
              </Link>
            <SIdeItems/>
            </Box>

        </SwipeableDrawer>
    </div>
  )
}

export default MobDrawer