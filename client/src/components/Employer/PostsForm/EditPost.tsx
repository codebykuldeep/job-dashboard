import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../utils/custom-hooks/useFetch';
import Loading from '../../Common/Loading';
import classes from './edit-post.module.css'
import { initialformState } from './AddPost';
import { FormStateType } from '../../../types/formTypes';
import { IPost, IUser } from '../../../types/dataTypes';
import EditingForm from './EditingForm';
import { Button } from '@mui/material';

function EditPost() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data,loading,error] = useFetch<IPost>(`posts/${id}`);

   
    if(loading || !data){
        return <Loading/>
      }
      if(error){
        return <p>Failed to load page</p>
      }
      const formState = dataToFormState(data,{...initialformState});


  return (
    <div className={classes.container}>
        <Button variant='contained' className={classes.back_btn} onClick={()=>navigate(-1)}>{'< Back'}</Button>
        <EditingForm formStateFromData={formState} post={data}/>
    </div>
  )
}

export default EditPost


function dataToFormState(data:IPost,formState:FormStateType){
    for(let key in formState){
        formState[key]={
            value:data[key as keyof IPost],
            status:false,
            message:'',
        }
    }
    return formState;
}