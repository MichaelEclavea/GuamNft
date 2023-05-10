// import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import styles from './SignIn.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.rootSignInUp}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}><SignUp /></div>
      </div>
    </div>
  )
}

export default LoginPage;