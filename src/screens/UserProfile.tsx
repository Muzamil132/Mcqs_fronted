import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React,{useEffect} from 'react'
import { useParams } from 'react-router'
import { transFormQuestion } from '../actions/loadQuestions'
import McQCard from '../components/McqCard'
import McqsLoader from '../components/McqsLoader'
import QuestionCard from '../components/QuestionCard'
import Layout from '../Layouts/Layout'
import { myQuestion, setLoading, stopLoading } from '../Reducers/MyQuestionReducer'
import { useAppDispatch, useAppSelector } from '../selector'

const UserProfile = () => {
   const {user}= useAppSelector(state=>state.registerUser)
    const dispatch = useAppDispatch()
     const {error,questionList,status}=useAppSelector(state=>state.myQuestion)
     console.log(questionList,"list of my questions")
    const {userId} = useParams()
   
   const loadMyQuestion =async()=>{
    try{
    dispatch(setLoading())
    const  response = await axios.get(`http://localhost:4000/questions/me/${userId}`)

     const data =response.data
     console.log(data)
     if(data.success){
      dispatch(stopLoading())
      dispatch(myQuestion({questions:transFormQuestion(data.questions)}))
     }
     
    

    }catch(error){

        
      dispatch(stopLoading())


    }


   }


   useEffect(()=>{
    loadMyQuestion()
   },[])
  return (
    <Layout>
      <Box sx={{
        p:2
      }}>
        <Typography variant="h5">
              {user?.name.toLocaleUpperCase()}
        </Typography>
        <Typography variant="h5">
              Question added by you
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

                <McQCard  key={index} key1={index}  questionItem={item} />

               ))    
              }


           </div>
          
}
            </Box>

      </Box>
    </Layout>
  )
}

export default UserProfile