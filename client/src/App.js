import styles from './App.module.css';
import Landing from './components/organism/landing';


const App = (props) => {
  return (
    <div className={styles.app__outer}>
      <Landing/>
    </div>
  );
}

export default App;
