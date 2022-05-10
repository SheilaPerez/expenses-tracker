import Savings from '../../Components/Savings';
import ChooseOperation from '../../Components/ChooseOperation';
import { useState } from 'react';
import styles from './ListExpensesIncome.module.css';
import Modal from '../../Components/Modal';

const ListExpensesIncome = () => {
  const [isModalOpen, setIsModalOpne] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpne(true);
  }

  const handleCloseModal = (e) => {
    setIsModalOpne(false);
  }
  return (
    <div className={styles.listContainer}>
      <Savings></Savings>
      <ChooseOperation handleClickModal={handleOpenModal}></ChooseOperation>
      {isModalOpen && <Modal handleClickCloseModal={handleCloseModal} />}
    </div>
)};

export default ListExpensesIncome;