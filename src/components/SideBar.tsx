import { Drawer, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Colors } from '../Colors'
import SIdeItems from './SIdeItems'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import SideBarLayout from '../Layouts/SideBarLayout'
const SideBar = () => {
  
  return (
    <SideBarLayout>
      <SIdeItems/>
    </SideBarLayout>
       
  )
}

export default SideBar