import React from 'react'
import {
  Table,
  Button,
  Container,
  Row,
  Col,
  Placeholder,
} from 'react-bootstrap'

const SkeletonTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>song name</th>
          <th>album Name</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
        </tr>
        <tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12}size='sm'/></Placeholder></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
        </tr>
        <tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12}size='sm'/></Placeholder></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12}size='sm'/></td>
        </tr>
        <tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder /><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr>
        <tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm' /></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr><tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr><tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr><tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr><tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr><tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr><tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr><tr>
          <td><Placeholder animation='glow'><Placeholder bg='dark' xs={12} size='sm'/></Placeholder></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
          <td><Placeholder animation='glow'/><Placeholder bg='dark' xs={12} size='sm'/></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default SkeletonTable
