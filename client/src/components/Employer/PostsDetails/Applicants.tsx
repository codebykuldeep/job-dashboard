import React, { useState } from 'react'
import { useFetch } from '../../../utils/custom-hooks/useFetch';
import { IApplicant } from '../../../types/dataTypes';
import Loading from '../../Common/Loading';
import { ColumnType } from '../../../types/tableTypes';
import ApplicantTable from './ApplicantTable';
import classes from './applicants.module.css'
import { Button } from '@mui/material';
import AppModal from './AppModal';

function Applicants({ id }: { id: string }) {
  const [data, loading, error,update] = useFetch<IApplicant[]>(`posts/data/${id}`);
  const [selectedRow, setSelectedRow] = useState<IApplicant | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (row: IApplicant) => {
    setSelectedRow(row);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  if (loading && !data) {
    return <Loading/>;
  }
  if (error && !data) {
    return <p>Error while loading page.Please try later</p>;
  }
  console.log(data);
  
  
  return (
    <div className={classes.container}>
        <div className={classes.table}>
            <ApplicantTable columns={EmployerColumn} rows={data!}  openModal={handleOpen}/>
        </div>
        {selectedRow && <AppModal data={selectedRow} open={open} handleClose={handleClose} update={update}/>}
    </div>
  )
}

export default Applicants



export const EmployerColumn:ColumnType[] = [
  {
    id:'app_id',
    label:'App ID'
  },
  {
    id:'user_id',
    label:'User ID',

  },
  {
    id:'name',
    label:'name',
    
  },
  {
    id:'user_data',
    label:'Profile',
    align:'center',
    format:(value)=>{
      if(value){
        return <Button>View</Button>
      }
      return <Button>View</Button>;
    }
  },
  {
    id:'status',
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