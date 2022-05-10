import Savings from '../../Components/Savings';
import ChooseOperation from '../../Components/ChooseOperation';
import { useState } from 'react';
import styles from './ListExpensesIncome.module.css';
import Modal from '../../Components/Modal';

const ListExpensesIncome = () => {
  const [isOpen, setIsOpne] = useState(false);

  const handleClickOpenModal = () => {
    setIsOpne(true);
  }

  const handleCloseModal = (e) => {
    setIsOpne(false);
  }
  return (
    <div className={styles.listContainer}>
      <Savings></Savings>
      <ChooseOperation handleClickModal={handleClickOpenModal}></ChooseOperation>
      {isOpen && <Modal handleClickCloseModal={handleCloseModal} />}
    </div>
)};

export default ListExpensesIncome;