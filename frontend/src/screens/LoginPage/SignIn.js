import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import Button from 'react-bootstrap/Button';
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(createUserDocFromAuth(user));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = userInfo;

    try {
      // await auth.signInWithEmailAndPassword(email, password);
      setUserInfo({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>Sign in</h2>
      <Button
        className={styles.googleButton}
        type='button'
        onClick={logGoogleUser}
        isGoogleSignIn={'google-sign-in'}
      >
        Sign in with Google
      </Button>
      <div className={styles.divider}>
        <span className={styles.dividerText}>{'or'}</span>
        <hr className={styles.line}></hr>
      </div>
      <form onSubmit={handleSubmit}>
        <Form.Control
          name='email'
          type='email'
          label='email'
          onChange={(e) => alert(e)}
          // onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          value={userInfo.email}
          required
        />
        <Form.Control
          name='password'
          type='password'
          label='password'
          onChange={(e) => alert(e)}
          // onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          value={userInfo.password}
          required
        />
        <section className={styles.buttonSection}>
          <Button className={styles.buttons} type='submit' >Sign In</Button>
        </section>
      </form>
    </div>
  )
}
