import React from "react";
import { Box,Typography } from "@mui/material";
import { NavLink,useNavigation,useParams } from "react-router-dom";
import { Colors } from "../Colors";

import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useGetCategoriesQuery } from "../services/api";
import Skeleton from '@mui/material/Skeleton';
import { useAppDispatch, } from '../selector';
import { toggleDrawer } from "../Reducers/count";

interface SubSideItem {
  title: string;
  to: string;
}
const activeBlack="#4F4F4F"
const lightBlack="#777777"
const lightBlue ='#dbeafe'
const darkBlue="#60a5fa"

const activeStyles={ 
    display:"flex",
    alignItems:"center",
    fontWeight:"600",color:"white",fontSize:"14px",marginTop:"5px",padding:"5px 25px",borderRadius:"3.5px",backgroundColor:Colors.purple  
    ,"&:hover":{
      background:Colors.purple
    }
  
  }
    
    

const Styles={
  display:"flex",
  alignItems:"center",
    fontWeight:"500",color:Colors.textColor1,fontSize:"14px",marginTop:"5px",padding:"5px 25px",borderRadius:"3.5px"    ,'&:hover':{
        background:"#ebedf0",
        color:activeBlack
    }
    
}



const SIdeItems = ():any => {
 

  const dispatch = useAppDispatch()
  const  {data,isSuccess,isFetching,isError,error}= useGetCategoriesQuery("ty")
 
  console.log(data)



    const params = useParams()
  
  if(isFetching){
    return(
      
        [...Array(20)].map((_,index)=>(
          <Box sx={{marginTop:"5px",p:"5px"}}>
          <Skeleton   width="100%" height={50} />
          </Box>
        ))
    

    )
  }

  const navigateTo =()=>{
   

    dispatch(toggleDrawer())


  }



   
  return (
    <div style={{
       
    
        width:"100%",
        height:"100vh"
    }} >
     {
      data !==undefined &&
        data.categories.map((item:any,index:any)=>(

          <NavLink onClick={()=>navigateTo()} state={{data:{title:item.title}}}  key={index} style={{textDecoration:"none"}} to={`/category/all/${item._id}`} >
          <ListItemButton sx={params.id===item._id?activeStyles:Styles}  >
         
          <ListItemText  sx={{
            fontSize:"16px",fontWeight:"600"
          }} primary={item.title} />
          <ListItemIcon>
            <TurnedInNotIcon sx={{color:params.id===item._id?"white":activeBlack,marginLeft:"5px",fontSize:"16px"}} />
          </ListItemIcon>
        </ListItemButton>
        </NavLink>
            
     
        ))
     }


    </div>
  );
};

export default SIdeItems;
