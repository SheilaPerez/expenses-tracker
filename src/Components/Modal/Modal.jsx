import styles from './Modal.module.css';

const Modal = ({ handleClickCloseModal }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={styles.containerModal} onClick={handleClickCloseModal}>
      <div className={styles.modal} onClick={stopPropagation}>
        <div className={styles.operationContainer}>
          <p>Operation</p>
          <div>
            <input type="radio" value="deposit"></input>
            <label>deposit money</label>
          </div>
          <div>
            <input type="radio" value="expens"></input>
            <label>Expens</label>
          </div>
        </div>
        <div className={styles.expenditureContainer}>
          <p>Type of expenditure</p>
          <select>
            <option value="choose">Choose an option</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="leisure">leisure</option>
            <option value="travel">Travels</option>
          </select>
        </div>
        <div className={styles.moneyContainer}>
          <p>Money</p>
          <input type="text"></input>
        </div>
      </div>
    </div>
  )
};

export default Modal;
