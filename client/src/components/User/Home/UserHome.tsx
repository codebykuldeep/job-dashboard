import React, { useEffect, useState } from 'react';
import classes from './user-home.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Analytics from './Analytics';
import Chart from './Chart';
import { useFetch } from '../../../utils/custom-hooks/useFetch';
import Loading from '../../Common/Loading';
import { AppStatusCount, UserCountData } from '../../../types/dataTypes';

type ApiRespone ={appStatusData:UserCountData[],companyData:UserCountData[]}

function UserHome() {
    const user = useSelector((state:RootState)=>state.userSlice.user)
    const [data,loading,error] = useFetch<ApiRespone>('users/detail');
    const [applicationData,setApplicationData] = useState<AppStatusCount | null>(null)
    const [compData,setCompData ] = useState<number>(0);
    
   useEffect(()=>{
    if(data){
        const {appStatusData,companyData} = data;
        const appData = getApplicationStatusData(appStatusData);
        setApplicationData(appData);
        setCompData(companyData.length);
    }
   },[data])
   console.log(data?.appStatusData);

   if(error){
    return <p>Error loading page.Please try later</p>
   }
   
    
  return (
    <div className={classes.container}>
        <div className={classes.greeting}>
            Hello, <span>{user!.name}</span>
        </div>
        {
            !data || loading ? <Loading/> : (
                <>
                {applicationData && <Analytics dataArr={[applicationData.total,compData,applicationData.accepted]}/>}
                <div className={classes.chart}>
                    <div className={classes.header}>Chart</div>
                    <div className={classes.pie_chart}>
                        {applicationData && <Chart data={applicationData}/>}
                    </div>
                </div>
                </>
            )
        }
    </div>
  )
}

export default UserHome


function getApplicationStatusData(data:UserCountData[]):AppStatusCount{
    let pending = 0;
    let rejected = 0;
    let accepted = 0;
    let total = 0;
    data.forEach((entry)=>{
        if(entry.app_status=== true){
            accepted = Number(entry.count);
        }
        else if(entry.app_status === null){
            pending = Number(entry.count);
        }
        else{
            rejected = Number(entry.count);
        }
    })
    
    total = pending + accepted + rejected;
    return {pending,accepted,rejected,total}
}