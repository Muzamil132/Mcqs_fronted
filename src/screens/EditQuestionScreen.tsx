import React ,{useEffect} from "react";
import { Box, } from "@mui/system";
import { Button, MenuItem,  TextField, Typography,Snackbar } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

import { useAppDispatch, useAppSelector } from "../selector";

import { sideItemList } from "../components/SIdeItems";
import { addQuestion } from "../actions/addQuestion";

import { useNavigate, useParams } from "react-router";
import { reset } from "../Reducers/QuestionReducer";
import axios from "axios";

const EditQuestionScreen = () => {

  const navigate =useNavigate()
  const {id}= useParams()
  console.log(id)
  const {success,error} = useAppSelector(state=>state.addquest)
 
  const url =process.env.REACT_APP_BACKEND_URL
  const localurl='http://localhost:4000'
  const {questionList} =useAppSelector(state=>state.myQuestion)
  const EditQuestion = questionList.find((item)=>item.id===id)
  console.log(EditQuestion)
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  console.log(error ,success ,"..................")
  const validationSchema = yup.object({
    question: yup
      .string()
      .min(20,"Minimum 40 characters")
      .required("Question is required"),
    option_1: yup
      .string()
      
      .required("option 1 is required"),
      option_2: yup
      .string()
      
      .required("option 2 is required"),
      option_3: yup
      .string()
      
      .required("option 3 is required"),
      answer: yup
      .string()
      
      .required("Answer is required"),
      option_4: yup
      .string()
      
      .required("Answer is required"),
  });

  const formik = useFormik({
    initialValues: {
      question: EditQuestion?.question,
      option_1: EditQuestion?.options[0].optionvalue,
      option_2:EditQuestion?.options[1].optionvalue,
      option_3:EditQuestion?.options[2].optionvalue,

      option_4:EditQuestion?.options[3].optionvalue,
      answer:EditQuestion?.answer,
    },
   

    validationSchema: validationSchema,
    onSubmit:async (values,{resetForm}) => {
      
      const questionData ={
      
        question:values.question,
        options:[values.option_1,values.option_2,values.option_3,values.option_4],
        answer:values.answer,
       
      }

      if(questionData){

        try
         {
            const response = await axios.post(`${url}/questions/edit/${EditQuestion?.id}`,questionData,{
        headers:{

            "Content-Type": "application/json",
        }
    })
       
    if(response.data.success){
        navigate(`/questions/edit/${EditQuestion?.question}`)
    }




        }catch(error:any){
           console.log(error.toString());
           

        }
      }


     

      
      
    },
  });
  useEffect(()=>{
    
    if(success){
     setOpen(true)
     formik.resetForm()
    }

   return ()=>{
     dispatch(reset())
   }
     
  

 },[dispatch,success,error,navigate,formik])
  return (
    
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width:"100%",
        py: 7,
      }}
    >
   
      <Box  sx={{
            py:7,
            px:5
          }}  width={{ lg: "450px", xs: "300px", }}>
       
        
        <Box
   
        sx={{paddingBottom:2}}
         
        >
            <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    message="Question Successfully added"
   
  />
          
       
          <Typography fontSize="18px" component="h6" variant="h6">
            EDIT QUESTION
          </Typography>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            size="small"
            multiline
            fullWidth
            id="question"
            name="question"
            label="Question"
            value={formik.values.question}
            onChange={formik.handleChange}
            error={formik.touched.question && Boolean(formik.errors.question)}
            helperText={formik.touched.question && formik.errors.question}
          />

          <TextField
            sx={{
              marginBottom: "10px",
            }}

            size="small"
            multiline
            fullWidth
            id="option"
            name="option_1"
            label="Option 1"
            type="text"
            value={formik.values.option_1}
            onChange={formik.handleChange}
            error={formik.touched.option_1 && Boolean(formik.errors.option_1)}
            helperText={formik.touched.option_1 && formik.errors.option_1}
          />
           <TextField
            sx={{
              marginBottom: "10px",
            }}

            size="small"
            multiline
            fullWidth
            id="option"
            name="option_2"
            label="Option 2"
            type="text"
            value={formik.values.option_2}
            onChange={formik.handleChange}
            error={formik.touched.option_2 && Boolean(formik.errors.option_2)}
            helperText={formik.touched.option_2 && formik.errors.option_2}
          />
          <TextField
            sx={{
              marginBottom: "10px",
            }}

            size="small"
            fullWidth
            id="option"
            name="option_3"
            multiline
            label="Option 3"
            type="text"
            value={formik.values.option_3}
            onChange={formik.handleChange}
            error={formik.touched.option_3 && Boolean(formik.errors.option_3)}
            helperText={formik.touched.option_3 && formik.errors.option_3}
          />
          <TextField
            sx={{
              marginBottom: "10px",
            }}

            size="small"
            fullWidth
            id="option_4"
            name="option_4"
            multiline
            label="Option 4"
            type="text"
            value={formik.values.option_4}
            onChange={formik.handleChange}
            error={formik.touched.option_4 && Boolean(formik.errors.option_4)}
            helperText={formik.touched.option_4 && formik.errors.option_4}
          />
           <TextField
            sx={{
              marginBottom: "10px",
            }}

            size="small"
            fullWidth
            id="answer"
            name="answer"
            label="Answer"
            multiline
            type="text"
            value={formik.values.answer}
            onChange={formik.handleChange}
            error={formik.touched.answer && Boolean(formik.errors.answer)}
            helperText={formik.touched.answer && formik.errors.answer}
          />


          <Button
            disableElevation
            
            sx={{
              fontWeight: "bold",
            }}
            size="large"
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
         
        </form>
      
        </Box>
        
    
    </Box>
    
  );
};

export default EditQuestionScreen;
