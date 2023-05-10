import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomePage/HomePage';
import LoginPage from './screens/LoginPage/LoginPage';
import { NavBar } from './components/navigation/NavBar';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomeScreen />} />
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
    </div>
  );
}

export default App;
