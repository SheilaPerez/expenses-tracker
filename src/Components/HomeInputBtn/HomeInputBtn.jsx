import styles from './HomeInputBtn.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContextSavings from '../../Context/GlobalContextSavings';

const HomeInputBtn = () => {
  const { setSavings } = useContext(GlobalContextSavings);
  const navigate = useNavigate();

  const handleChangeSavings = (event) => {
    setSavings(event.target.value);
  }

  const handleClickSave = () => {
    navigate("/list");
  }

  return (
    <div>
      <div className={styles.savingAndBtnContainer}>
        <p className={styles.explanation}>Have your money under control with Expenser Tracker</p>
        <input className={styles.savingInput} placeholder="Introduce yours savings" onChange={handleChangeSavings}></input>
      </div>
      <div className={styles.saveBtnContainer}>
        <button className={styles.saveBtn} type="button" onClick={handleClickSave}>Save and continue</button>
      </div>
    </div>

  )
}

export default HomeInputBtn;