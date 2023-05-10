import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.scss';
import { PersonCircle } from 'react-bootstrap-icons';

export const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' fixed='top' className={styles.navRoot}>
      <Container>
        <Navbar.Brand href='/'>Guam NFT</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home' className={styles.links}>Home</Nav.Link>
          <Nav.Link href='#pricing' className={styles.links}>Tickets</Nav.Link>
          <Nav.Link href='#team' className={styles.links}>Team</Nav.Link>
          <Nav.Link href='#contact' className={styles.links}>Contact</Nav.Link>
        </Nav>
        <Nav.Link href='/login' className={styles.links}><PersonCircle color='white' width={24} height={24} /></Nav.Link>
      </Container>
    </Navbar>
  )
}
