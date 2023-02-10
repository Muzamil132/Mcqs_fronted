import React from "react";
import { Box,Typography } from "@mui/material";
import { NavLink,useNavigation,useParams } from "react-router-dom";
interface SideItem {
  title: string;
  to: string;
  subSideItem?: SubSideItem[];
}
interface SubSideItem {
  title: string;
  to: string;
}
const activeBlack="#4F4F4F"
const lightBlack="#777777"
const lightBlue ='#dbeafe'
const darkBlue="#60a5fa"

const activeStyles={
   
    fontWeight:"600",color:"white",fontSize:"14px",margin:"5px",padding:"5px 25px",borderRadius:"3.5px",backgroundColor:"black"    }
    
    

const Styles={
    fontWeight:"500",color:lightBlack,fontSize:"14px",margin:"5px",padding:"2.5px 25px",borderRadius:"3.5px"    ,'&:hover':{
        background:"#ebedf0",
        color:activeBlack
    }
    
}

export const sideItemList: SideItem[] = [
 
  {
    title: "GK",
    to: "gk",
  },
  {
    title: "Islamiate",
    to: "islamiate",
  },
  {
    title: "Pak Study",
    to: "pak_study",
  },
  {
    title: "Pakistan Current Affairs",
    to: "pak_current",
  },
  {
    title: "World Current Affairs",
    to: "word_current",
  },
];

const SIdeItems = () => {

    const params = useParams()
    console.log(params)
  return (
    <div style={{
        padding:"10px"
    }} >
     {
        sideItemList.map((item,index)=>(
            
      <NavLink style={{textDecoration:"none"}} key={index} to={`/questions/${item.to}`}>
       <Box sx={params.questionType===item.to?activeStyles:Styles}>
        <Typography  fontWeight="600" fontSize="14"  variant="inherit" >
        {item.title.toUpperCase()}
        </Typography>
       
        
        </Box>
      </NavLink>

        ))
     }


    </div>
  );
};

export default SIdeItems;
