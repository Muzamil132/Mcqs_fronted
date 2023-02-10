import { Drawer, Toolbar } from '@mui/material'
import React from 'react'
import SIdeItems from './SIdeItems'

const SideBar = () => {
    const drawerWidth="280px"
  return (
    <div>
        <Drawer  variant="permanent"
        anchor="left"  sx={{
            position:"fixed",
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            zIndex:1
          }}  >
            <Toolbar/>
            <SIdeItems/>

        </Drawer>
    </div>
  )
}

export default SideBar