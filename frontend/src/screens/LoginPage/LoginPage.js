import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext'
import { signOutUser } from '../../utils/firebase.utils';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { Button, Form } from 'react-bootstrap';
import styles from './SignIn.module.scss';

const LoginPage = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    setShowSignIn(true);
  }

  const renderSignOut = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <p>User: <strong>{currentUser.email}</strong></p>
        <p>Since: <strong>{currentUser.metadata.creationTime}</strong></p>
        <Button variant='light' onClick={handleSignOut}>Sign out</Button>
      </div>
    )
  }

  return (
    <div className={styles.rootSignInUp}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          {currentUser ? renderSignOut() : showSignIn ? <SignIn /> : <SignUp />}
          {!currentUser && (
            <Form.Text>
              {showSignIn ? 'Dont have an account?' : 'Already have an account?'}{' '}
              <Form.Text
                color='blue'
                role={'button'}
                className='fs-6'
                onClick={() => setShowSignIn(!showSignIn)}>
                {showSignIn ? 'Sign Up' : 'Sign in'}
              </Form.Text>
            </Form.Text>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage;