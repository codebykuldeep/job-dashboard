import { Box, Button } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import InputField from './InputField'
import classes from './register.module.css';
import { FormStateType, ReqBody } from '../../../types/formTypes';
import { checkValidFormState, populateFormState, validation } from '../../../utils/validation';
import { UserLogin } from '../../../utils/authMethods';
import { redirectToDashboard, setToken } from '../../../utils/utilsFunctions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { userActions } from '../../../store/userSlice';
import { useNavigate } from 'react-router-dom';

interface LoginProps{
    handleFormChange:(q:string)=>void;
}

function Login({handleFormChange}:LoginProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    const [submit,setSubmit] =useState({loading:false,status:false,message:''})
    const [formState,setFormState] = useState<FormStateType>(initialformState);
      
        function handleChange(event:React.ChangeEvent<HTMLInputElement>){
          const name = event.target.name;
          const value = event.target.value;
          const [message,status] = validation(name,value);
          setFormState((prev)=>({
            ...prev,
            [name]:{
              message:message,
              status:status,
              value:value
            }
          }))  
        }
        async function handleSubmit(event: FormEvent<HTMLFormElement>) {
          event.preventDefault();
          setSubmit(prev=>({...prev,loading:true}));
          if (checkValidFormState(formState)) {
            const formData = new FormData(event.target as HTMLFormElement);
            const body = Object.fromEntries(formData.entries()) as ReqBody;
            const result = await UserLogin(body);
            if (Boolean(result.success)) {
                const {data,token} = result;
                setToken(token);
                dispatch(userActions.setUser(data));
                navigate(redirectToDashboard(data));
            } else {
                alert('Failed')
                setSubmit(prev=>({status:true,message:result.data.message,loading:false}));
            }
          } else {
            setFormState(populateFormState(formState));
          }
        }
  return (
    <>
        <Box className={classes.heading}><h1>Login Page</h1></Box>
        <Box className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <InputField label='Email' type='text' name='email' formState={formState} onChange={handleChange}/>
                <InputField label='Password' type='text' name='password' formState={formState} onChange={handleChange}/>
                {
                    submit.status && (
                        <p className={classes.error}>{submit.message}</p>
                    )
                }
                <div>
                    <Button disabled={submit.loading} type='submit' variant='contained'>Login</Button>
                </div>
            </form>
            <Box className={classes.switch}>New to our platform ! Click <button onClick={()=>handleFormChange('register')}>here</button></Box>
        </Box>
    </>
  )
}

export default Login




const initialformState={
    email:{
        value:'',
        status:false,
        message:''
    },
    password:{
        value:'',
        status:false,
        message:''
    },
}