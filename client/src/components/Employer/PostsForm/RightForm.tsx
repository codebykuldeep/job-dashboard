import { Autocomplete, FormLabel, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'
import classes from './input.module.css'
import InputField from './InputField'
import { FormStateType } from '../../../types/formTypes';

interface RightFormProps{
    formState:FormStateType;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

function RightForm({formState,onChange}:RightFormProps) {
    function handleDropdown(value:string| null,name:string){
        const obj ={
            target:{name:name,value:value ? value : ''}
        }
        onChange(obj as React.ChangeEvent<HTMLInputElement>)
    }
  return (
    <div className={classes.right}>
        <div className={classes.input}>
        <FormLabel htmlFor={'location'} error={false}>Location</FormLabel>
        <Autocomplete
        id="location"
        freeSolo
        options={location.map((option) => option.title)}
        value={formState['location'].value}
        inputValue={formState['location'].value}
        onInputChange={(event,value)=>handleDropdown(value,'location')}
        onChange={(event,value)=>handleDropdown(value,'location')}
        renderInput={(params) =>
             <TextField name='location'
              error={formState['location'].status}
              helperText={formState['location'].message}
               {...params}  
               onChange={onChange} />
        }
        />
        </div>
        <div className={classes.input}>
            <FormLabel htmlFor={'job_type'} error={false}>Job Type</FormLabel>
            <Autocomplete
            disablePortal
            id="job_type"
            options={jobType.map((option) => option.title)}
            value={formState['job_type'].value}
            inputValue={formState['job_type'].value}
            onInputChange={(event,value)=>handleDropdown(value,'job_type')}
            onChange={(event,value)=>handleDropdown(value,'job_type')}
            renderInput={(params) =>
                 <TextField name='job_type' 
                 error={formState['job_type'].status}
                 helperText={formState['job_type'].message}
                  {...params} />
                }
            />
        </div>
        <div className={classes.input}>
            <FormLabel htmlFor={'education'} error={false}>Education</FormLabel>
            <Autocomplete
            disablePortal
            id="education"
            value={formState['education'].value}
            inputValue={formState['education'].value}
            onInputChange={(event,value)=>handleDropdown(value,'education')}
            onChange={(event,value)=>handleDropdown(value,'education')}
            options={educationType.map((option) => option.title)}
            renderInput={(params) =>
                 <TextField  name='education' 
                 error={formState['education'].status}
                 helperText={formState['education'].message}
                 {...params} />
                }
            />
        </div>
        <InputField name='date' type='date' label='Last Date' formState={formState} onChange={onChange}>Last date for apply</InputField>
    </div>
  )
}

export default RightForm


const location = [
    { title: 'noida'},
    { title: 'gurugram' },
    { title: 'delhi' },
    { title: 'banglore' },
    { title: 'pune' },
    { title: "mumbai" },
    { title: 'kolkata' },
]

const jobType = [
    {id:1, title: 'internship' },
    {id:2, title: 'fulltime' },
    {id:3, title: 'temporary' },
]
const educationType = [
    {id:1, title: '10th' },
    {id:2, title: '12th' },
    {id:3, title: 'Graduate' },
]