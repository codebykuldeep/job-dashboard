import React, { useState } from 'react'
import DataTable from './DataTable'
import classes from './employers.module.css'
import Loading from '../../Common/Loading';
import { useFetch } from '../../../utils/custom-hooks/useFetch';
import { EmployerColumn } from './Employers';
import { IEmployer } from '../../../types/dataTypes';
import EmpModal from './EmpModal';

function PendingEmps() {
  const [data,loading,error,update] = useFetch('employers',{
    type:'pending'
  });
  const [selectedRow,setSelectedRow] = useState<IEmployer | null>(null)
  const [open, setOpen] = useState(false);


  const handleOpen = (row:IEmployer) => {
    setSelectedRow(row);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  if(loading){
    return <Loading/>
  }

  if(error){
    return <p>Failed to load...</p>
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.heading}><h1>Pending Employers</h1></div>
      {selectedRow && <EmpModal data={selectedRow} open={open} handleClose={handleClose} update={update}/>}
      {!!data && <DataTable columns={EmployerColumn} rows={data as IEmployer[]} openModal={handleOpen}/>}
    </div>
  )
}

export default PendingEmps;