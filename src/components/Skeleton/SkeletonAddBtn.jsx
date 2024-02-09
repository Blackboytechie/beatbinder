import React from 'react'
import {Placeholder} from 'react-bootstrap';
const SkeletonAddBtn = () => {
  return (
    // <div className="d-flex gap-3">
    //   <p>Add Song :</p>
    //   <button
    //     className="btn btn-success"
    //     style={{
    //       width: '100px',
    //       height: '30px',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       display: 'flex',
    //     }}
    //   >
    //     Add +
    //   </button>
    // </div>
    <Placeholder as='div' animation='glow' className="d-flex gap-2 mb-3 ms-4">
        <Placeholder xs={2} size='sm' />
        <Placeholder xs={2} size='lg' />
    </Placeholder>
  )
}

export default SkeletonAddBtn
