import { Toolbar, Typography,Hidden } from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect} from 'react'
import { loadDisabledQuestion } from '../actions/loadQuestions'
import McqsLoader from '../components/McqsLoader'
import NavBar from '../components/Navbar'
import QuestionCard from '../components/QuestionCard'
import SideBar from '../components/SideBar'
import Layout from '../Layouts/Layout'
import SideBarLayout from '../Layouts/SideBarLayout'
import { useAppDispatch ,useAppSelector} from '../selector'

const DisAbledQuestionsScreen = () => {
    
  const {questionList,error,status} = useAppSelector(state=>state.disabledQuestion)
  console.log(questionList)
  const dispatch = useAppDispatch()
  useEffect(()=>{
   
    dispatch(loadDisabledQuestion(1))


  },[dispatch])




  return (
        <div>
           <NavBar/>
           <Hidden smDown >
           <SideBarLayout>
            ggg
           </SideBarLayout>
           </Hidden>
           <Box sx={{
            marginLeft:{
              lg:"280px",
               sm:"0"
            },
            p:2
               
           }} >
            <Toolbar/>
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
        </div>
  )
}

export default DisAbledQuestionsScreen