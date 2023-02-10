import React, { useEffect } from 'react'
import Layout from '../Layouts/Layout'
import { useParams } from 'react-router'
import Toolbar from '@mui/material/Toolbar'
import { useAppDispatch, useAppSelector } from '../selector'
import { loadQuestionByCategory } from '../actions/loadQuestions'
import CloseIcon from '@mui/icons-material/Close';
import {Colors} from "../Colors"
import { Checkbox, FormControlLabel, FormGroup, Pagination, TextField } from '@mui/material'
import Box from '@mui/material/Box/Box'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { checkAnswer } from '../Reducers/LoadQuestionReducer'
import DoneIcon from '@mui/icons-material/Done';
import { QuestType } from '../actions/addQuestion'
import LensIcon from '@mui/icons-material/Lens';
import McqsLoader from '../components/McqsLoader'
const QuestionsScreen = () => {

  const {questionType} =useParams()
   const dispatch = useAppDispatch()
  const {status,error,questionList,count} = useAppSelector(state=>state.questionByCategory)
 
 
  const [page,setPage]=React.useState(1)

  //  console.log(error)
  useEffect(()=>{
     console.log("welcome")
    dispatch(loadQuestionByCategory({questionType,page}))
 


  },[dispatch,questionType,page])
  console.log(questionList)

  useEffect(()=>{
    if(error){
      setPage(page-1)
    }
     
  },[error,page])

 function targetAnswer(id:string,givenAnswer:string){

   dispatch(checkAnswer({id,givenAnswer}))
 }

  return (
    <div style={{backgroundColor:Colors.bgmain}} >
        <Layout>
         {/* <Toolbar/> */}
         
            {
          status==="loading"?
            <div>
            {
 [...Array(10)].map((_,i)=>(

  <McqsLoader key={i}/>

 ))

            }
           
           
            </div>
          :<div>
               <Box sx={{p:1}}>
               {
                 questionList.map((quest:QuestType,index)=>(
                  <div>
                    <Paper variant="outlined" sx={{
                      padding:"10px",
                      marginTop:"5px",
                      borderRadius:"10px"
                    }} >
                    
                  <Typography sx={{fontSize:"14px",fontWeight:"600"}}  key={index}>{quest.question}</Typography>

                   { 
                    quest.options.map((option,i)=>(
                      <div onClick={()=>targetAnswer(quest.id,option.optionvalue)} style={{display:"flex",justifyItems:"center",marginTop:"10px",opacity:option.optionSelected?option.correct?1:0.4:1}}  >
                       {
                         !option.optionSelected? <PanoramaFishEyeIcon  sx={{fontSize:"16px"}}  />:<LensIcon sx={{fontSize:"16px"}}/>
                       } 
                      <Typography   key={i}  sx={{cursor:"pointer",color:Colors.lightText,fontSize:"14px",marginLeft:"5px"}} >
                        {option.optionvalue}
                      

                      </Typography>
                      
                        {  option.optionSelected?option.correct? <DoneIcon sx={{color:"green",marginLeft:"10px",fontSize:"20px"}}  /> :<CloseIcon sx={{color:"red",marginLeft:"10px",fontSize:"20px"}} />:""}
                      
                      </div>

                    ))
                     
                   }
                     </Paper>
                    </div>
                 ))
                
               }
                 
               </Box>
             
            
            <Pagination onChange={(e,value)=>setPage(value)} page={page} count={count}/>
          </div>
         }
        </Layout>
    </div>
  )
}


export default QuestionsScreen
