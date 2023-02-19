import { Drawer } from '@mui/material'
import Hidden from '@mui/material/Hidden'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'
import React ,{useEffect}from 'react'

import MobDrawer from '../components/MobDrawer'
import MobNavManu from '../components/MobNavManu'
import NavBar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { useBreakPoint } from '../hooks/useBreakScreen'
import { useAppDispatch } from '../selector'

 


const Layout = ({children}:any) => {

const match =useBreakPoint()

  console.log(match,"from mediaquesry")


  return (
      <div 
      style={{position:'relative',minHeight:'100vh'}} 
      >
         <NavBar/>
          <Hidden smDown >
          <SideBar/>
        
         
          </Hidden>
          <MobDrawer/>
        <div style={{
          marginLeft:match?"290px":"0"

        }}>
         <Toolbar/>
        {children}
        </div>
       
      </div>
  )
}

export default Layout
