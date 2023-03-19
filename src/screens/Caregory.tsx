import React,{useEffect} from "react"
import { useParams } from "react-router"
import Layout from "../Layouts/Layout"
import { useGetSubCategoryQuery , useGetCategoriesQuery} from "../services/api"
import { Button, MenuItem,  TextField, Typography,Snackbar,Paper,Box,IconButton } from "@mui/material";
import { CategoryLoader } from "../components/CategoryLoader";
import { Colors } from "../Colors";
import { Link } from "react-router-dom";


const Category =():any=>{
    
    
   const  {data,isError,isSuccess,error,isFetching} =useGetCategoriesQuery("m")

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


  if(data!==undefined && data.categories.length<1){
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
            <Box sx={{py:1,px:1}}>
            <Typography variant="h5" >
                      Select category you want to add question
                    </Typography>
            </Box>
           <Box sx={{p:1,width:"100%"}}>
            {
                data!==undefined && data.categories.map((item:any,index:number)=>(
                    <Link key={index} to={`/add/cate/${item._id}`}  style={{textDecoration:"none",color:"black"}}>
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


export default Category