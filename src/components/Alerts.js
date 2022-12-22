import React from 'react'

export default function Alerts(props) {

    let upper = (word) =>{
        let value = word.toLowerCase();
      return  value.charAt(0).toUpperCase() + value.slice(1)
    }

  return (
    props.alart && <div class="alert alert-primary" role="alert">
    <strong>{upper(props.alart.type)}</strong> : {props.alart.msg}
  </div>
  )
}
