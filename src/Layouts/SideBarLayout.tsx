import { Drawer, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Colors } from '../Colors'

import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
const SideBarLayout = ({children}:any) => {
    const drawerWidth="280px"
  return (
    <div>
        <Drawer  variant="permanent"
          anchor="left"  sx={{
           
           
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              
              px:2,
              py:1
             
            },
          
          }}  >
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
         
          
            {children}
           
          

        </Drawer>
    </div>
  )
}

export default SideBarLayout