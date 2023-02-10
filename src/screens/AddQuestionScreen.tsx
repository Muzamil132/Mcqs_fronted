import React ,{useEffect} from "react";
import { Container, Box, } from "@mui/system";
import { Button, MenuItem, Paper, TextField, Typography,Snackbar } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

import { useAppDispatch, useAppSelector } from "../selector";

import { sideItemList } from "../components/SIdeItems";
import { addQuestion } from "../actions/addQuestion";
import CustomSnackBar from "../components/CustomSnackBar";
import { useNavigate } from "react-router";
import { reset } from "../Reducers/QuestionReducer";

const LoginScreen = () => {
  const [category,setCategory]=React.useState('')
  const navigate =useNavigate()

  const {success,error} = useAppSelector(state=>state.addquest)

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
      question: "",
      option_1: "",
      option_2:"",
      option_3:"",
      option_4:"",
      answer:"",
    },
   

    validationSchema: validationSchema,
    onSubmit: (values,{resetForm}) => {

      const questionData ={
        category,
        question:values.question,
        options:[values.option_1,values.option_2,values.option_3,values.option_4],
        answer:values.answer
      }

      if(category){
       dispatch(addQuestion(questionData))
      //  resetForm()
       

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
    // action={action}
  />
           <Typography fontSize="18px" component="h5" variant="h5">
            SELECT CATEGORY
          </Typography>
          <TextField
           sx={{
            margin: "10px 0",
          }}
            size="small"
          id="outlined-select-currency"
          fullWidth
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          select
          label="Select"
          defaultValue="GK"
         
        >
          {sideItemList.map((option,index) => (
            <MenuItem key={index} value={option.title}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
          <Typography fontSize="18px" component="h5" variant="h5">
            CREATE QUESTION
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
            disabled={category.trim()===""}
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

export default LoginScreen;
