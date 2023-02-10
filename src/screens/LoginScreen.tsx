import React ,{useEffect} from "react";
import { Container, Box, } from "@mui/system";
import { Button, Paper, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../selector";
import {loadUser }from "../actions/user"

const LoginScreen = () => {
  const navigate =useNavigate()
  const state = useAppSelector(state=>state.registerUser)
  const dispatch = useAppDispatch()
  //  console.log(state)
   useEffect(()=>{
    console.log(state)
      if(state.user){
          navigate("/")
       
  
      }
   
  
    
  
  
  
  
   },[state,dispatch,navigate])




  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loadUser(values))
      
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        
        py: 7,
      }}
    >
       <Paper variant="outlined" sx={{borderRadius:"10px"}}>
      <Box  sx={{px:5}}  width={{ lg: "380px", xs: "300px" }}>
       
          <Box  sx={{
            py:7,
            
          }}  >
        <Box

        sx={{paddingBottom:4}}
         
        >
          <Typography component="h5" variant="h5">
            Sign in with your email
          </Typography>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            sx={{
              marginBottom: "10px",
            }}

            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            disableElevation
            sx={{
              fontWeight: "bold",
              p:"15px 0px"
            }}
            size="large"
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
          <Box
            sx={{
              mt: 2,
              display: "flex",
            }}
          >
            <Typography
             color="primary.main"
              sx={{  textAlign: "start" }}
              variant="body1"
            >
              Don,t have account?
            </Typography>
            <Link
              style={{
                color: "blue",
                textDecoration: "none",
                marginLeft: "5px",
              }}
              to="/register"
            >
              <Typography
                color="primary.main"
                sx={{ fontWeight: "bold", textAlign: "start" }}
                variant="body1"
              >
                Create
              </Typography>
            </Link>
          </Box>
        </form>
        </Box>
       
      </Box>
      </Paper>
    </Box>
  );
};

export default LoginScreen;
