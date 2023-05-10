import ContactPage from '../ContactPage/ContactPage';
import PricingPage from '../Pricing/PricingPage';
import TeamPage from '../TeamPage/TeamPage';
import styles from './homePage.module.scss';

const HomeScreen = () => {
  const _renderHomePage = () => {
    return (
      <div id={'home'} className={styles.homeScreen}>
        <h1>HomeScreen</h1>
      </div>
    )
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageWrapper}>
        {_renderHomePage()}
      </div>
      <div className={styles.pageWrapper}><PricingPage /></div>
      <div className={styles.pageWrapper}><TeamPage /></div>
      <div className={styles.pageWrapper}><ContactPage /></div>
    </div>
  )
}

export default HomeScreen;