import React,{useEffect} from "react"
import { useParams } from "react-router"
import Layout from "../Layouts/Layout"
import { useGetSubCategoryQuery } from "../services/api"
import { Button, MenuItem,  TextField, Typography,Snackbar,Paper,Box,IconButton } from "@mui/material";
import { CategoryLoader } from "../components/CategoryLoader";
import { Colors } from "../Colors";
import { Link } from "react-router-dom";


const SubCategory =():any=>{
    const {id} = useParams()
    
   const  {data,isError,isSuccess,error,isFetching} =useGetSubCategoryQuery(id)

  if(isFetching){
    return(
        <Layout>
            {
                [...Array(20)].map((_,index)=>(
                    <CategoryLoader key={index}/>
                ))
            }sssss
         
        </Layout>
    )
  }


  if(data!==undefined && data.Subcategories.length<1){
    return(
        <Layout>
             <Box sx={{p:1,width:{lg:500,sm:"100%"}}}>
           
                    <Typography variant="h4">
                      We are working on this section
                    </Typography>

              </Box>

        </Layout>
    )
  }

    return(
        
         data!==undefined && 

         <Layout>
           <Box sx={{p:1,width:"100%"}}>
            {
                data!==undefined && data.Subcategories.map((item:any,index:number)=>(
                    <Link key={index} to={`/questions/${item._id}`}  style={{textDecoration:"none",color:"black"}}>
                    <Paper elevation={1} sx={{p:1,width:{lg:500,sm:"100%"},marginTop:1,borderLeft:`3px Solid ${Colors.purple} `}}>
                    <Typography variant="subtitle1" >
                      {item.title}
                    </Typography>
                   
                  </Paper>
                  </Link>

                ))
            }

           
           </Box>
          </Layout>
        
    )
  
}


export default SubCategory