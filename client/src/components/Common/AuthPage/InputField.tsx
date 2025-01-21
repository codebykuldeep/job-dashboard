import { TextField,FormLabel, Box } from '@mui/material'
import React from 'react'
import classes from './register.module.css'
import { FormStateType } from '../../../types/formTypes';

interface InputFieldProps{
    name:string;
    label:string;
    type:string;
    formState:FormStateType,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

function InputField({label,type,name,formState,onChange}:InputFieldProps) {
  return (
    <Box className={classes.input}>
      <FormLabel htmlFor={name} error={formState[name].status}>{label}</FormLabel>
      <TextField
          fullWidth
          placeholder='Enter your email'
          id={name}
          name={name}
          type={type}
          defaultValue={formState[name].value}
          error={formState[name].status}
          helperText={formState[name].message}
          onChange={onChange}
        />
    </Box>
  )
}

export default InputField