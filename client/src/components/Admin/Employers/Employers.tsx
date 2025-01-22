import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import classes from './employers.module.css'
import { useFetch } from '../../../utils/custom-hooks/useFetch'
import { ColumnType } from '../../../types/tableTypes'
import { IEmployer } from '../../../types/dataTypes'
import Loading from '../../Common/Loading'
import OptionButton from './OptionButton'



function Employers() {
  const [data,loading,error] = useFetch('employers');
  const [rows,setRows] = useState<IEmployer[] | null>(null);
  useEffect(()=>{
    setRows(data as IEmployer[]);
  },[data])

  if(loading){
    return <Loading/>
  }

  if(error){
    return <p>Failed to load...</p>
  }

  function handleFilter(option:string){
    let newRows = data as IEmployer[];
    if(option === 'approved'){
      newRows = newRows.filter((entry)=>Boolean(entry.status));
    }
    else if(option === 'rejected'){
      newRows = newRows.filter((entry)=>!Boolean(entry.status));
    }
    setRows(newRows);
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.heading}><h1>Employers</h1></div>
      <OptionButton handleFilter={handleFilter} />
      {!!data && rows && <DataTable columns={EmployerColumn} rows={rows}/>}
    </div>
  )
}

export default Employers



export const EmployerColumn:ColumnType[] = [
  {
    id:'emp_id',
    label:'Emp ID'
  },
  {
    id:'name',
    label:'Name',

  },
  {
    id:'email',
    label:'Email',
    
  },
  {
    id:'phone',
    label:'Phone Number',
  },
  {
    id:'company_name',
    label:'Company Name',
    format:(value)=>{
      if(value === null){
        return 'Not available'
      }
      return value;
    }
  },
  {
    id:'status',
    label:'Current Status',
    format:(value)=>{
      if(value === null){
        return 'Not Approved'
      }
      if(Boolean(value) === false){
        return 'Rejected'
      }
      return "Approved";
    }
  }
]