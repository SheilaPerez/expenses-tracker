import styles from './Home.module.css';

const Home = () => {
  return(
    <div className={styles.divContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles.savingAndBtnContainer}>
        <p className={styles.explanation}>Have your money under control with Expenser Tracker</p>
        <input className={styles.savingInput} placeholder="Introduce yours savings"></input>
      </div>
      <div className={styles.saveBtnContainer}>
        <button className={styles.saveBtn} type="button">Save and continue</button>
      </div>
    </div>
  )
}

export default Home;
