import React from 'react'
import classes from './PostCard.module.css';

export const PostCard = (props) => {
  return (
    <li className={classes['post-card']} key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </li>
  )
}
