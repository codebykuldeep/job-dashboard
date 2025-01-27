import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IUser } from '../../../types/dataTypes';
import classes from './app-modal.module.css'
import { Button } from '@mui/material';
import { nameFormatter } from '../../../helper/helperFunctions';
import CallIcon from '@mui/icons-material/CallMade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 800,
//   maxWidth:600,
  minHeight:400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
};

interface EmpModalProps{
    data:IUser,
    open:boolean;
    handleClose:()=>void;
    update?:()=>void;
}

export default function AppModal({data,open,handleClose,update}:EmpModalProps) {
    const [errorState,setErrorState] = useState(false);
    
    const EmpDetails = ['user_id','name','email','phone','summary'];
    //const status = data.status === null ? "Not Approved" : Boolean(data.status) ? 'approved' : 'rejected';


    async function handleStatusUpdate(status:boolean){
      //const emp_id = data.emp_id;
      const result = true;//await updateEmployerStatus(emp_id,status);
      if(result){
        // update();
        handleClose();
      }
      else{
        setErrorState(true)
      }
    }
  
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className={classes.modal}>
          <Box className={classes.heading}>
            <h1>Applicant Details</h1>
          </Box>
          <Box className={classes.content}>
            <Box className={classes.detail}>
              {EmpDetails.map((key, index) => (
                <p key={key}>
                  <span>{nameFormatter(key)} :</span>
                  <span>{data[key] || "Not Available"}</span>
                </p>
              ))}
              <p>
                  <span>Resume :</span>
                  <span><a href={data.resume} target='_blank' rel="noreferrer"><Button>Open <CallIcon/></Button></a></span>
                </p>
            </Box>
            {errorState && (
              <div className={classes.error}>
                Failed to update employer status right now, Try later.
              </div>
            )}
            <Box className={classes.button}>
              <Button variant="contained" onClick={()=>handleStatusUpdate(true)}>Looks Good</Button>
              <Button variant="contained" onClick={()=>handleStatusUpdate(false)}>Reject</Button>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}