import React from "react";
import { Box,Typography } from "@mui/material";
import { NavLink,useNavigation,useParams } from "react-router-dom";
import { Colors } from "../Colors";
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
  {
    title: "Mathematics",
    to: "maths",
  },
  {
    title: "Physics",
    to: "physics",
  },
  {
    title: "Everyday Science",
    to: "science",
  },
];

const SIdeItems = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

    const params = useParams()
    console.log(params)
  return (
    <div style={{
       
    
        width:"100%",
        height:"100vh"
    }} >
     {
        sideItemList.map((item,index)=>(

          <NavLink style={{textDecoration:"none"}} to={`/questions/${item.to}`} >
          <ListItemButton sx={params.questionType===item.to?activeStyles:Styles}  >
         
          <ListItemText  sx={{
            fontSize:"16px",fontWeight:"600"
          }} primary={item.title} />
          <ListItemIcon>
            <TurnedInNotIcon sx={{color:params.questionType===item.to?"white":activeBlack,marginLeft:"5px",fontSize:"16px"}} />
          </ListItemIcon>
        </ListItemButton>
        </NavLink>
            
      // <NavLink style={{textDecoration:"none"}} key={index} to={`/questions/${item.to}`}>
      //   <Box sx={params.questionType===item.to?activeStyles:Styles}>
        
      //   <Typography  fontWeight="600" fontSize="14"  variant="inherit" >
      //   {item.title.toUpperCase()}
      //   </Typography>
      //   <TurnedInNotIcon sx={{color:params.questionType===item.to?"white":activeBlack,marginLeft:"5px",fontSize:"16px"}}   />
       
        
      //   </Box>
      // </NavLink>

        ))
     }


    </div>
  );
};

export default SIdeItems;
