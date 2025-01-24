import React from 'react'
import classes from './user-account.module.css';
import defaultUser from '../../../assets/dummy-user.jpg'
import { Container } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Profile from './Profile';

function UserAccount() {
    const [ query,setQuery] = useSearchParams();
    const view = query.get('view');
    function handleView(event:React.MouseEvent<HTMLInputElement>){
        let value = (event.target as HTMLInputElement).value ;
        if(value){
            setQuery({view:value})
        }
    }
  return (
    <div className={classes.container}>
        <Container maxWidth={'md'}  className={classes.profile}>
            <div className={classes.image}><img src={defaultUser} alt="default user" /></div>
            <div className={classes.detail}>
                <h2>User Name</h2>
                <p>email@email.com</p>
            </div>
        </Container>
        <Container maxWidth={'md'} className={classes.content}>
            <div className={classes.btn} onClick={handleView}>
                <button value={'profile'}>Profile</button>
                <button value={'update'}>Update Details</button>
                <button value={'setting'}>Settings</button>
            </div>
            <div className={classes.view}>
                {view  === 'profile' && <Profile/>}
                {view  === 'setting' && <div>Setting</div>}
                {view  === 'update' && <div>Update</div>}
            </div>
        </Container>
    </div>
  )
}

export default UserAccount



/*

<div className={classes.container}>
        <div className={classes.section}>
            <div className={classes.header}>
                <h3>Account</h3>
            </div>
            <div className={classes.account}>
                <div className={classes.action}>Options</div>
                <div className={classes.content}>Content</div>
            </div>
        </div>
    </div>

*/