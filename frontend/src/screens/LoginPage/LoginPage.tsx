import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styles from './SignIn.module.scss';
import { Text } from '@fluentui/react';
import SuiteNav from '../../components/SuiteNav/SuiteNav';

const LoginPage = (): JSX.Element => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className={styles.rootSignInUp}>
      <SuiteNav />
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          {!showSignUp ? <SignIn /> : <SignUp />}
          <Text
            className={styles.signUpText}>
            {!showSignUp ? 'Dont have an account?' : 'Already have an account?'} {' '}
            <span
              role={'button'}
              className={styles.signUpBtnText}
              onClick={() => setShowSignUp(!showSignUp)}
            >
              {!showSignUp ? 'Sign up' : 'Sign in'}
            </span>
          </Text>
        </div>

      </div>
    </div>
  )
}

export default LoginPage;