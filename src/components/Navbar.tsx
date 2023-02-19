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
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountMenu from './ManuList';
import { Link } from 'react-router-dom';
import { Hidden } from '@mui/material';
import { toggleDrawer } from '../Reducers/count';
import AddIcon from '@mui/icons-material/Add';
export default function NavBar() {
    const {user,status,error}= useAppSelector((state)=>state.registerUser)
    const {open}= useAppSelector((state)=>state.drawerState)
  
   
   const dispatch = useAppDispatch()

   function openDrawer(){
    dispatch(toggleDrawer())
   }



     

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar variant="outlined" sx={{backgroundColor:"white"}} elevation={0} position="fixed">
        <Toolbar>
          {/* <Hidden smUp> */}
           <IconButton onClick={openDrawer} sx={{color:"white"}}  >
            <MenuIcon sx={{color:"black"}} />
           </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          </Typography>
          <Link to="/questions/add" style={{
            textDecoration:"none"
          }}  >
         
          <Button disableElevation sx={{marginRight:"5px",background:"#374151"}} variant="contained" endIcon={<AddIcon />}>
             Add
          </Button>
          
          </Link>
          <Link to="/questions/fav" style={{
            textDecoration:"none"
          }}  >
         
          <Button disableElevation sx={{marginRight:"5px",background:"#374151"}} variant="contained" endIcon={<FavoriteIcon />}>
             Saved
          </Button>
          
          </Link>
          {
            user? <div>
                <AccountMenu name={user.name}   />
        
           
            </div>:<Link style={{textDecoration:"none"}} to="/login" color="inherit">
              <Button sx={{backgroundColor:"primary.main",color:"white","&:hover":{
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