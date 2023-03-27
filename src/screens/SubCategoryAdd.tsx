import React,{useEffect} from "react"
import { useParams } from "react-router"
import Layout from "../Layouts/Layout"
import { useGetSubCategoryQuery , useGetCategoriesQuery} from "../services/api"
import { Button, MenuItem,  TextField, Typography,Snackbar,Paper,Box,IconButton } from "@mui/material";
import { CategoryLoader } from "../components/CategoryLoader";
import { Colors } from "../Colors";
import { Link } from "react-router-dom";


const SubCategoryAdd =():any=>{
    
    const {id}=useParams()
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
             <Box sx={{width:{lg:500,sm:"100%"}}}>
           
                    <Typography sx={{px:2,py:2}} variant="h5">
                      We are working on this section
                    </Typography>

              </Box>

        </Layout>
    )
  }

    return(
        
         data!==undefined && 

         <Layout>
           
           <Box sx={{mx:2,width:{lg:"450px",sm:"90%"}}}>
           <Typography sx={{py:1}}  variant="h5" >
                      Select subcategory you want to add question
             </Typography>
            {
                data!==undefined && data.Subcategories.map((item:any,index:number)=>(
                    <Link  state={{category:id,subcategory:item._id,title:item.title}} key={index} to={`/questions/add`}  style={{textDecoration:"none",color:"black"}}>
                    <Paper elevation={1} sx={{p:1,width:{lg:500,sm:"100%"},marginTop:1,borderLeft:`3px Solid ${Colors.cyan} `}}>
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


export default SubCategoryAdd