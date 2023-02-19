import React, { useEffect } from 'react'
import Layout from '../Layouts/Layout'
import { useParams } from 'react-router'

import { useAppDispatch, useAppSelector } from '../selector'
import { loadQuestionByCategory } from '../actions/loadQuestions'
import CloseIcon from '@mui/icons-material/Close';
import {Colors} from "../Colors"
import {  Pagination, Button} from '@mui/material'
import Box from '@mui/material/Box/Box'

import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { checkAnswer } from '../Reducers/LoadQuestionReducer'
import DoneIcon from '@mui/icons-material/Done';
import { QuestType } from '../actions/addQuestion'

import McqsLoader from '../components/McqsLoader'

import { closeDrawer } from '../Reducers/count'
const QuestionsScreen = () => {

  const {questionType} =useParams()
   const dispatch = useAppDispatch()
  const {status,error,questionList,count} = useAppSelector(state=>state.questionByCategory)
 
 
  const [page,setPage]=React.useState(1)

  //  console.log(error)
  useEffect(()=>{
     console.log("welcome")
    dispatch(loadQuestionByCategory({questionType,page}))
   

    return ()=>{
      dispatch(closeDrawer())
    }
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
    <div>
        <Layout>
        
          {
             questionList?.length<1 && <Typography sx={{color:Colors.textColor1,m:2}}  variant="h3">Comming soon</Typography>
          }
         
            {
          status==="loading"?
            <div>
            {
 [...Array(5)].map((_,i)=>(

  <McqsLoader key={i}/>

 ))

            }
           
           
            </div>
          :<div>
               <Box sx={{p:2}}>
               {
                questionList!==undefined &&
                 questionList.map((quest:QuestType,index)=>(
                  <div>
                    <Paper sx={{
                      p:2,
                      marginTop:"10px",
                     
                      display:"flex",
                      flexDirection:"column",
                      borderRadius:"10px",
                      alignContent:"start"

                    }} >
                     <Typography className="grad" fontWeight="600" sx={{marginRight:"5px",color:"white",borderRadius:"5px",width:"90px",px:"5px",py:"2px",textAlign:"center",fontSize:"15px",marginBottom:"5px"}}   variant="body1" >
                       Question-{(page-1)*10 +index+1}
                      </Typography> 
                     
                    <div>

                   
                  <Typography sx={{fontSize:"16px",fontWeight:"600",color:Colors.textColor1}} variant="subtitle1"  key={index}>{quest.question}</Typography>

                   { 
                    quest.options.map((option,i)=>(
                      <div key={i} className="option_box" onClick={()=>targetAnswer(quest.id,option.optionvalue)}  >
                       <div className="option">
                            {i===0 && <span>A</span>}
                            {i===1 && <span>B</span>}
                            {i===2 && <span>C</span>}
                            {i===3 && <span>D</span>}
                        </div>
                       <Box
                       sx={{
                        background:"white",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        px:1,
                        py:0.5,
                       
                        marginLeft:"5px",
                        maxWidth:"280px",
                        width:"90%",
                        borderRadius:"10px"
                       }}
                       >
                      <Typography   key={i}  sx={{cursor:"pointer",color:Colors.textColor1,fontSize:"15px",marginLeft:"5px",fontWeight:"500"}} >
                        {option.optionvalue}
                      

                      </Typography>
                      {  option.optionSelected?option.correct? <DoneIcon sx={{color:"green",marginLeft:"10px",fontSize:"20px"}}  /> :<CloseIcon sx={{color:"red",marginLeft:"10px",fontSize:"20px"}} />:""}
                      </Box>
                        
                       
                      
                      </div>
                    
                    ))
                     
                   }
                       
                      <Button  sx={{
                        borderRadius:"10px",
                        marginTop:"10px",
                        
                        background:Colors.purple,
                        color:"white","&:hover":{
                          background:Colors.purple,
                          color:"white"
                        }
                      }}>
                        SAVE
                       </Button>
                      </div>
                     </Paper>
                    </div>
                 ))
                
               }
                 
               </Box>
             
            
               {
                 count*10>10 && <Pagination sx={{my:2}} onChange={(e,value)=>setPage(value)} page={page} count={count}/>
               } 
          </div>
         }
        </Layout>
    </div>
  )
}


export default QuestionsScreen
