import styles from './Modal.module.css';
import { useState } from 'react';


const Modal = ({ handleClickCloseModal, handleClickSave }) => {
  const [money, setMoney] = useState(0);

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  const handleChangeMoney = (e) => {
    setMoney(e.target.value);
  }

  const handleClickAdd = () => {
    handleClickSave({money})
  }

  return (
    <div className={styles.containerModal} onClick={handleClickCloseModal}>
      <div className={styles.modal} onClick={stopPropagation}>
        <div className={styles.operationContainer}>
          <p>Operation</p>
          <div>
            <input type="radio" value="deposits" name="expenseType"></input>
            <label>deposit money</label>
          </div>
          <div>
            <input type="radio" value="expens" name="expenseType"></input>
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
          <input type="text" onChange={handleChangeMoney}></input>
        </div>
        <button type="button" onClick={handleClickAdd}>Add to list</button>
      </div>
    </div>
  )
};

export default Modal;
