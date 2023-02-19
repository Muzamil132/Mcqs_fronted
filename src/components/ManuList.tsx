import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from '../selector';
import { logoutUser } from '../Reducers/registerState';
import { Colors } from '../Colors';
import { useNavigate } from 'react-router';



interface IProps{
    name:string
}

export default function AccountMenu({name}:IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch= useAppDispatch()
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const {user} = useAppSelector(state=>state.registerUser)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };
 const   logoutCurrentUser=()=>{
   
    dispatch(logoutUser())
    handleClose()

 }

 const navigateToAdmin=()=>{
  navigate("/questions/disabledQuestions")
  handleClose()
 }

 const navigateToProfile=()=>{
  navigate(`/profile/${user?.id}`)
  handleClose()
 }




  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{name[0].toUpperCase()}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
         
        <Divider />
        {
          user?.isAdmin? <MenuItem sx={{m:1,borderRadius:"5px"}} onClick={navigateToAdmin}>
          <ListItemIcon>
            <PersonAdd sx={{"&:hover":{
              color:"white"
            }}} fontSize="small" />
          </ListItemIcon>
          Admin
        </MenuItem>:<MenuItem sx={{m:1,borderRadius:"5px"}} onClick={navigateToProfile}>
          <ListItemIcon>
            <PersonAdd sx={{"&:hover":{
              color:"white"
            }}} fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        }
        
        <MenuItem sx={{m:1,borderRadius:"5px"}} onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem sx={{m:1,borderRadius:"5px"}} onClick={logoutCurrentUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}