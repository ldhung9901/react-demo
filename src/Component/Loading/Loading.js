import React from 'react'

import { Spinner } from 'reactstrap'
export default function Loading() {
    return (
        <div>
           <h3>rooms data loading ...</h3> 
           <Spinner animation="border" variant="warning" size='lg' />
        </div>
    )
}
