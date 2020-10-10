import React from 'react';
import './Skeleton.css'
export default function Skeleton(props){
    console.log(props)
    if(props.width){
      return true
    }



    return(
        <div className="skeletonBody">

        </div>
    )
}