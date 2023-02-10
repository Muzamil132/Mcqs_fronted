import React ,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../selector';
import { UserState } from '../Reducers/user';
import AccountMenu from './ManuList';
import { Link } from 'react-router-dom';
import { Hidden } from '@mui/material';
import { toggleDrawer } from '../Reducers/count';

export default function NavBar() {
    const {user,status,error}= useAppSelector((state)=>state.registerUser)
    const {open}= useAppSelector((state)=>state.drawerState)
  
   
   const dispatch = useAppDispatch()

   function openDrawer(){
    dispatch(toggleDrawer())
   }



     

  return (
    <Box sx={{ flexGrow: 1,backgroundColor:"red",zIndex:10 }}>
      <AppBar variant="outlined" sx={{backgroundColor:"white"}} elevation={0} position="fixed">
        <Toolbar>
          {/* <Hidden smUp> */}
           <IconButton onClick={openDrawer} sx={{color:"white"}}  >
            <MenuIcon sx={{color:"black"}} />
           </IconButton>
           {/* </Hidden> */}
           <Typography sx={{color:"black"}} variant="h4" component="h4" >
            MCQs.com
          </Typography>

          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {
            user? <div>
                <AccountMenu name={user.name}   />
        
           
            </div>:<Link style={{textDecoration:"none"}} to="/register" color="inherit">
              <Button sx={{backgroundColor:"black",color:"white","&:hover":{
                color:"black",border:"solid 1px black"
              }}}>
                Sign in
              </Button>
              </Link>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}