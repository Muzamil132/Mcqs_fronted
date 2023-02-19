import React, {useState, useEffect} from 'react';
import {Paper,Box,Typography} from "@mui/material"
import { Colors } from './Colors';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
const NoInternetConnection = (props:any) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])

    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if(isOnline){
    return(
        props.children
    )
    } else {
        return(
            <Box sx={{
                p:2
            }}>
            <Paper
            sx={{
                border:"2px solid red",
                p:2
            }}
              >
             <Typography sx={{color:Colors.textColor1}} variant="h4">No Internet Connection. Please try again later.</Typography>
             <SignalWifiStatusbarConnectedNoInternet4Icon sx={{fontSize:"70px",color:Colors.textColor1}}/>
           </Paper>
           </Box>
        
        )
    }
}

export default NoInternetConnection;