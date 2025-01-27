import React from 'react'
import { IUser } from '../../../types/dataTypes'

interface ProfileProps{
  user:IUser;
}


function Profile({user}:ProfileProps) {
  return (
    <div>
        <div>
            <div> Personal Information</div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Profile