import React from 'react'
import { IUser } from '../../../types/dataTypes'
import classes from './details.module.css'
import { nameFormatter } from '../../../helper/helperFunctions';
import nameImage from '../../../assets/admin/name.png';
import emailImage from '../../../assets/admin/email.png';
import roleImage from '../../../assets/admin/role.png';

const imageArr = [nameImage,emailImage,roleImage];

interface DetailsProps{
    user:IUser;
}
function Details({user}:DetailsProps) {
    const userData = Object.entries(user)
  return (
    <div className={classes.container}>
      <div className={classes.heading}>ACCOUNT DETAILS</div>
      <div className={classes.detail}>
        {userData.map(([key, value], index) => (
          <div key={index} className={classes.card}>
            <div><img src={imageArr[index]} alt="img for title" /></div>
            <div>
              <h2>{nameFormatter(key)}</h2>
              <p>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details