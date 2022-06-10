import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
export default function Navbar() {
  return (
      <Nav className='mb-2' fill variant="tabs" defaultActiveKey="/home">
{/*       <Nav.Item>
        <Nav.Link href="/home"><Link to="/">Home</Link></Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to='/'>Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><Link to='/Composition'>Composition</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
