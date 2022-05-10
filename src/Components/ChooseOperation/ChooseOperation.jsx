import styles from './ChooseOperation.module.css';

const ChooseOperation = ({ handleClickModal }) => {
  return (
    <>
      <button type="button" onClick={handleClickModal} className={styles.chooseBtn}>Choose Operation</button>
    </>
)};

export default ChooseOperation;

