import React from 'react'
import loadingGif from "../images/gif/loading-arrow.gif"
export default function Loading() {
    return (
        <div>
           <h3>rooms data loading ...</h3> 
           <img src={loadingGif}></img>
        </div>
    )
}
