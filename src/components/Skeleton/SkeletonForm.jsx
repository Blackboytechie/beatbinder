import React from 'react'
import {
  Table,
  Button,
  Container,
  Row,
  Col,
  Placeholder,
} from 'react-bootstrap'
import AddSong from '../AddSong'

const SkeletonForm = () => {
  return (
    <Placeholder as="div" animation="glow" className="m-3">
      <Placeholder xs={3} size="sm" className="m-3" />
      <Placeholder as="div" animation="glow" bg="light" className="p-2 rounded">
        <Placeholder xs={3} size="xs" />
        <br />
        <Placeholder xs={6} size="lg" className="mb-3" />
        <br />
        <Placeholder xs={3} size="sm" />
        <br />
        <Placeholder xs={6} size="lg" className="mb-3" />
        <br />
        <Placeholder xs={2} size="lg" className="mb-2" />
      </Placeholder>
    </Placeholder>
  )
}

export default SkeletonForm
