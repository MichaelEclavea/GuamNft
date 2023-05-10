import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    resetFormData();
  }

  const resetFormData = () => {
    setUserInfo({ email: '', password: '' });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = userInfo;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormData();
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('That password is incorrect.')
      } else if (error.code === 'auth/user-not-found') {
        alert('No user associated with this email.')
      }
      console.log(error);
    }
  }

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>Welcom Back!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            type='email'
            label='email'
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            value={userInfo.email}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            label='password'
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            value={userInfo.password}
            required
          />
        </Form.Group>
        <section className={styles.buttonSection}>
          <Button className={styles.buttons} type='submit' variant='primary'>Sign In</Button>
        </section>
        <div className={styles.divider}>
          <span className={styles.dividerText}>{'or'}</span>
          <hr className={styles.line}></hr>
        </div>
        <Button
          className={styles.googleButton}
          variant='light'
          type='button'
          onClick={logGoogleUser}
        >
          Sign in with Google
        </Button>
      </Form>
    </div >
  )
}
