import React from 'react'
import classes from './postcard.module.css'
import { IPost } from '../../../types/dataTypes'

interface PostCardPros{
    data:IPost;
}

function PostCard({data}:PostCardPros) {
  return (
    <div className={classes.card}>
        <div>{data.title}</div>
    </div>
  )
}

export default PostCard