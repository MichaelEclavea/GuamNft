import HomeScreen from './screens/HomePage/HomePage';
import NavBar from './components/navigation/NavBar';
import PricingPage from './screens/Pricing/PricingPage';
import TeamPage from './screens/TeamPage/TeamPage';
import styles from './app.module.scss';
import ContactPage from './screens/ContactPage/ContactPage';

function App() {
  return (
    <div className={styles.root}>
      <NavBar />
      <div className={styles.pageContainer}>
        <div className={styles.pageWrapper}><HomeScreen /></div>
        <div className={styles.pageWrapper}><PricingPage /></div>
        <div className={styles.pageWrapper}><TeamPage /></div>
        <div className={styles.pageWrapper}><ContactPage /></div>
      </div>
    </div>
  );
}

export default App;
