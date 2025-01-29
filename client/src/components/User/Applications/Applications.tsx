import React, { useState } from 'react';
import classes from './applications.module.css'
import { useFetch } from '../../../utils/custom-hooks/useFetch';
import Loading from '../../Common/Loading';

import { ColumnType } from '../../../types/tableTypes';
import { IApplications } from '../../../types/dataTypes';
import ApplicationTable from './ApplicationTable';
import DetailModal from './DetailModal';
import { Box, useColorScheme } from '@mui/material';

function Applications() {
  const {mode} =useColorScheme()
  const [data,loading,error] = useFetch<IApplications[]>('users/applications');
  const [selectedRow, setSelectedRow] = useState<IApplications | null>(null);
    const [open, setOpen] = useState(false);
  
    const handleOpen = (row: IApplications) => {
      setSelectedRow(row);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);

  if(loading && !data){
    return <Loading/>
  }
  if(error && !data){
    return <p>Error while loading page.Please try later</p>
  }
  
  
  return (
    <Box className={classes.container} sx={{bgcolor: mode === 'dark' ? '#202020': '',color:'text.primary'}}>
      <div className={classes.header}>Applications</div>
      <div className={classes.table}>
        <ApplicationTable columns={ApplicationsColumn} rows={data!} openModal={handleOpen}/>
      </div>
      {
        selectedRow && (
        <div>
          <DetailModal data={selectedRow!} open={open} handleClose={handleClose}/>
        </div>
        )
      }
    </Box>
  )
}

export default Applications



export const ApplicationsColumn:ColumnType[] = [
  {
    id:'app_id',
    label:'App ID'
  },
  {
    id:'post_id',
    label:'Post ID',

  },
  {
    id:'title',
    label:'Job Title',
    
  },
  {
    id:'company_name',
    label:'Company',
    align:'center',
  },
  {
    id:'app_status',
    label:'Status',
    format:(value)=>{
      let output = "selected"
      if(value === null){
        output = 'pending'
      }
      else if(Boolean(value) === false){
        output = 'rejected'
      }
      return <span className={classes[output]}>{output}</span>;
    }
  }
]