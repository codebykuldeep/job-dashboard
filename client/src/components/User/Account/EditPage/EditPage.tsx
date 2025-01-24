import React from 'react'
import EditForm from './EditForm'
import classes from './edit-page.module.css';
import { Button } from '@mui/material';


function EditPage() {
  return (
    <div>
        <div>EDIT PAGE</div>
        <div className={classes.form_box}>
            <form className={classes.form}>
                <EditForm/>
                <div>
                    <Button variant='contained'>Update</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditPage