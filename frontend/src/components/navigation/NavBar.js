import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.scss';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' fixed='top' className={styles.navRoot}>
      <Container>
        <Navbar.Brand href='/'>BJJ</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home' className={styles.links}>Home</Nav.Link>
          <Nav.Link href='#pricing' className={styles.links}>Pricing</Nav.Link>
          <Nav.Link href='#team' className={styles.links}>Team</Nav.Link>
          <Nav.Link href='#contact' className={styles.links}>Contact us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;