

import Snackbar from '@mui/material/Snackbar'
import React from 'react'
interface IProps{
 open:boolean,
 handleClose:(event: React.SyntheticEvent | Event, reason?: string)=> void,
 message:string | undefined

}
const CustomSnackBar = ({open,handleClose,message}:IProps) => {

  return (
    <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    message={message}
    // action={action}
  />

  )
}

export default CustomSnackBar
