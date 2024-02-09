import React from 'react'
import { Placeholder } from 'react-bootstrap'
const SkeletonImage = () => {
  return (
    <Placeholder
      animation="glow"
      style={{ width: '200px', height: '200px',borderRadius: "20px", }}
      variant="secondary"
    />
  )
}

export default SkeletonImage
