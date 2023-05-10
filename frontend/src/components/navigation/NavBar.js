import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from 'react-bootstrap/Tooltip';
import { PersonCheck, PersonSlash } from 'react-bootstrap-icons';
import styles from './navBar.module.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  const renderUserIcon = () => {
    return (
      <OverlayTrigger
        placement={'bottom'}
        overlay={
          <Tooltip id={`tooltip-bottom`} className={'color-white'}>
            {currentUser ? 'Logout' : 'Login'}
          </Tooltip>
        }
      >
        {currentUser ? (
          <PersonCheck color='white' width={24} height={24} />
        ) : (
          <PersonSlash color='white' width={24} height={24} />
        )}
      </OverlayTrigger>
    )
  }

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
        <Nav.Link href='/login' className={styles.links}>
          {renderUserIcon()}
        </Nav.Link>
      </Container>
    </Navbar>
  )
}
