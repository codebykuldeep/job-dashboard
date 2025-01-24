import React from 'react'
import InputField from './InputField'

function EditForm() {
  return (
    <>
    <InputField label='Name' name='name' type='text'>Enter your name</InputField>
    <InputField label='Email' name='email' type='text'>Enter email</InputField>
    <InputField label='Education' name='education' type='text'>Enter education detail</InputField>
    <InputField label='About Yourself' name='summary' type='text'>Enter about yourself</InputField>
    
    </>
  )
}

export default EditForm