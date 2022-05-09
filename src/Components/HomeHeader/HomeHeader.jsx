import styles from './HomeHeader.module.css'
//import { Test } from './HomeHeader.styles';

const HomeHeader = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}/>
    </div>
  )
}

export default HomeHeader;
