import React, { useState } from 'react';
import classes from './applications.module.css'
import { useFetch } from '../../../utils/custom-hooks/useFetch';
import Loading from '../../Common/Loading';

import { ColumnType } from '../../../types/tableTypes';
import { IApplications } from '../../../types/dataTypes';
import ApplicationTable from './ApplicationTable';
import DetailModal from './DetailModal';

function Applications() {
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
  console.log(data);
  
  return (
    <div className={classes.container}>
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
    </div>
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
      if(value === null){
        return 'pending'
      }
      if(Boolean(value) === false){
        return 'Rejected'
      }
      return "selected";
    }
  }
]