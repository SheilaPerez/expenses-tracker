import { useContext } from 'react';
import GlobalContextSavings from '../../Context/GlobalContextSavings';
import styles from './Savings.module.css';

const Savings = () => {

  const { savings } = useContext(GlobalContextSavings);
  
  return (
    <div className={styles.savingsContainer}>
      <p>Your Savings: </p>
      <div className={styles.savings}>
        {savings}
      </div>
    </div>
  )
};

export default Savings;
