
import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box/Box';
import { useAppSelector } from '../selector';
const MobDrawer = () => {

  const {open} = useAppSelector(state=>state.drawerState)

  return (
    <div>
        <SwipeableDrawer 
        onClose={()=>{}}
        onOpen={()=>{}}

        open={open}

        >
            <Box sx={{
                width:"280px",
            

            }}>
                Muzamul

            </Box>

        </SwipeableDrawer>
    </div>
  )
}

export default MobDrawer