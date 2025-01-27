import React, { useState } from 'react'
import classes from './user-account.module.css';
import defaultUser from '../../../assets/dummy-user.jpg'
import { Container } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Profile from './Profile';
import EditPage from './EditPage/EditPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function UserAccount() {
    const user = useSelector((state:RootState)=>state.userSlice.user);
    const [ query,setQuery] = useSearchParams();
    const [selected,setSelected] = useState('profile')
    const view = query.get('view');
    function handleView(event:React.MouseEvent<HTMLInputElement>){
        let value = (event.target as HTMLInputElement).value ;
        if(value){
            setQuery({view:value})
            setSelected(value);
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
                
                {
                    button.map(({value,label})=>(
                        <button key={value} value={value} className={selected === value ? classes.op : undefined}>{label}</button>
                    ))
                }
            </div>
            <div className={classes.view}>
                {view  === 'profile' && <Profile user={user!}/>}
                {view  === 'setting' && <div>Setting</div>}
                {view  === 'update' && <EditPage/>}
            </div>
        </Container>
    </div>
  )
}

export default UserAccount

const button =[
    {
        value:'profile',
        label:'Profile'
    },
    {
        value:'update',
        label:'Update Details'
    },
    {
        value:'setting',
        label:'Settings'
    },
]



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