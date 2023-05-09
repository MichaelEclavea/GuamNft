import React, { useState } from 'react'
import FormInput from '../../components/form-input/FormInput';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import styles from './SignIn.module.scss';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = userInfo;
    // if(password !== confirmPassword){
    //   return alert('Passwords do not match')
    // }
    try {
      // const { user } = await auth.createUserWithEmailAndPassword(email, password);
      // createUserProfileDocument(user, { displayName });
      setUserInfo({ displayName: '', email: '', password: '', confirmPassword: '' })
    } catch (error) {
      console.error('ERROR IN SIGN-UP', error);
    }
  }
  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}>Create an Account</h2>
      <form className={styles.signUpForm} id='signUp-form' onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userInfo.displayName}
          onChange={(e) => alert(e)}
          // onChange={(e) => setUserInfo({ ...userInfo, displayName: e.target.value })}
          label='Display Name'
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userInfo.email}
          onChange={(e) => alert(e)}
          // onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          label='Email'
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userInfo.password}
          onChange={(e) => alert(e)}
          // onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          label='Password'
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userInfo.confirmPassword}
          onChange={(e) => alert(e)}
          // onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
          label='Confirm Password'
          required
        />
        <div className={styles.buttonSection}>
          <PrimaryButton className={styles.buttons} type='submit'>Sign Up</PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default SignUp
