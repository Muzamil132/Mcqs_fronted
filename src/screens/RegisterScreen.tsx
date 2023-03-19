import React,{useEffect} from 'react'
import { Box  } from '@mui/system'
import { Button, Paper, Snackbar, TextField, Typography } from '@mui/material'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import { loadUser, registerUser } from '../actions/user';

import { useAppDispatch, useAppSelector } from '../selector';
import { useNavigate } from 'react-router-dom';

const RegisterScreen= () => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const dispatch= useAppDispatch()
    const validationSchema = yup.object({
        email: yup
          .string()
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string()
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
        name:yup
        .string()
        .required('Name is required'),
        confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Must match "password" field value'),
       
       
      

      });
      const formik = useFormik({
        initialValues: {
          name:"",
          email: '',
          password: '',
          confirm_password:""
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
          dispatch(registerUser(values))
          
          
        },
      });


 const state = useAppSelector(state=>state.registerUser)
//  console.log(state)
 useEffect(()=>{
  console.log(state)
    if(state.user){
        navigate("/category/all/640cce9b0cc3d769e224f41d")
     

    }
    if(state.error){
      setOpen(true)
    }

  




 },[state,dispatch,navigate])
   

  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        py:5
        
       
    }} >
       <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={state.error?.message}
        // action={action}
      />
 <Paper variant="outlined" sx={{borderRadius:"10px"}}>
    <Box sx={{
        pt:4
    }}>
       
    </Box>
        <Box sx={{
            py:3,
            px:5
        }} width={{lg:"380px",xs:"300px"}}>
       
       <Typography  sx={{marginBottom:4}} component="h5" variant="h5" >
         Sign up with your email
        </Typography>
          
        <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{
            marginBottom:"10px"
          }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.email && formik.errors.name}
        />

        <TextField
          sx={{
            marginBottom:"10px"
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
            marginBottom:"10px"
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
         <TextField
          sx={{
            marginBottom:"10px"
          }}
          fullWidth
          
          id="password"
          name="confirm_password"
          label=" Confirm Password"
          type="password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
          helperText={formik.touched.confirm_password && formik.errors.confirm_password}
        />
      
        <Button size="large"  disableElevation sx={{
            p:"15px 0px",
            fontWeight:"bold"
        }} color="primary" variant="contained" fullWidth type="submit">
          {state.status==="loading"?"Loading ...":"SIGN UP"}
        </Button>
        <Box  sx={{
            mt:2,
            display:'flex'
        }}>
            <Typography  sx={{textAlign:"start"}} variant="body1" >
                 Already have account?
            </Typography>
            <Link  style={{
                color:"#8b5cf6",
                textDecoration:"none",
                marginLeft:"5px"
            }}   to="/login">
            <Typography sx={{fontWeight:"bold",textAlign:"start"}} variant="body1" >
                login
            </Typography>

            </Link>
           
        </Box>
      </form>
     
        </Box>
        </Paper>
    </Box>
  )
}

export default RegisterScreen
