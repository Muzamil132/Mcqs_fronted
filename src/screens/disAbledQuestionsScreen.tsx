import {  Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect} from 'react'
import { loadDisabledQuestion } from '../actions/loadQuestions'
import McqsLoader from '../components/McqsLoader'

import QuestionCard from '../components/QuestionCard'

import Layout from '../Layouts/Layout'

import { useAppDispatch ,useAppSelector} from '../selector'

const DisAbledQuestionsScreen = () => {
    
  const {questionList,error,status} = useAppSelector(state=>state.disabledQuestion)
  console.log(questionList,"error",error)
  const dispatch = useAppDispatch()
  useEffect(()=>{
   
    dispatch(loadDisabledQuestion(1))


  },[dispatch])




  return (
        
          <Layout>
           <Box sx={{
           
            p:2
               
           }} >
         
            <Typography variant="h6">
               Questions Added by Users
            </Typography>
            <Box>
            {
          status==="loading"?
            <div>
            {
 [...Array(5)].map((_,i)=>(

  <McqsLoader key={i}/>

 ))

            }
           </div>:  
           <div>
              { questionList!==undefined && questionList.map((item,index)=>(

                <QuestionCard key={index} key1={index}  questionItem={item} />

               ))    
              }


           </div>
          
}
            </Box>
           </Box>
        
        </Layout>
  )
}

export default DisAbledQuestionsScreen