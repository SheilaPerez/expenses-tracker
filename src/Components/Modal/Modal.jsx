import styles from './Modal.module.css';
import { useState, useContext } from 'react';
import GlobalContextSavings from '../../Context/GlobalContextSavings';

const Modal = ({ handleClickCloseModal, handleClickSave, onChangeMoney, onChangeTypeExpense }) => {
  const [money, setMoney] = useState(0);
  const [expenseType, setexpenseType] = useState();
  const [expenditure, setExpenditure] = useState();
  const { savings, setSavings } = useContext(GlobalContextSavings);

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  const handleChangeMoney = (e) => {
    setMoney(parseInt(e.target.value));
    onChangeMoney(parseInt(e.target.value));
  }

  const handleChangesExpenseType = (e) => {
    setexpenseType(e.target.value);
    onChangeTypeExpense(e.target.value);
  }

  const handleChangesExpenditure = (e) => {
    setExpenditure(e.target.value)
  }

  const handleClickAdd = () => {
    handleClickSave({
      money,
      expenseType,
      expenditure
    })
    setSavings(expenseType === "deposits" ? savings + money : savings - money )
  }

  return (
    <div className={styles.containerModal} onClick={handleClickCloseModal}>
      <div className={styles.modal} onClick={stopPropagation}>
        <div className={styles.operationContainer}>
          <p>Operation</p>
          <div>
            <input type="radio" value="deposits" name="expenseType" onChange={handleChangesExpenseType}></input>
            <label>deposit money</label>
          </div>
          <div>
            <input type="radio" value="expens" name="expenseType" onChange={handleChangesExpenseType}></input>
            <label>Expens</label>
          </div>
        </div>
        <div className={styles.expenditureContainer}>
          <p>Type of expenditure</p>
          <select onChange={handleChangesExpenditure}>
            <option value="Choose">Choose an option</option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="Leisure">leisure</option>
            <option value="Travel">Travels</option>
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
