import styles from './ChooseOperation.module.css';

const ChooseOperation = ({ handleClickModal }) => {
  return (
    <div>
      <button type="button" onClick={handleClickModal} className={styles.chooseBtn}>Choose Operation</button>
    </div>
)};

export default ChooseOperation;

