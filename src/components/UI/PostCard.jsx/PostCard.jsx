import React from 'react'

export const PostCard = (props) => {
  return (
    <li key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>user: {props.userId}</p>
    </li>
  )
}
