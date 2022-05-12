import Savings from '../../Components/Savings';
import ChooseOperation from '../../Components/ChooseOperation';
import { useState } from 'react';
import styles from './ListExpensesIncome.module.css';
import Modal from '../../Components/Modal';
import List from '../../Components/List';


const ListExpensesIncome = () => {
  const [isModalOpen, setIsModalOpne] = useState(false);
  const [operationList, setOperationList] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpne(true);
  }

  const handleCloseModal = () => {
    setIsModalOpne(false);
  }

  const onModalSave = (operation) => {
    setOperationList([...operationList, operation]);
    handleCloseModal();
  }

  return (

      <div className={styles.listContainer}>
        <Savings></Savings>
        <ChooseOperation handleClickModal={handleOpenModal}></ChooseOperation>
      {isModalOpen && <Modal handleClickCloseModal={handleCloseModal}
                              handleClickSave={onModalSave}/>}
        <List operationList={operationList}></List>
      </div>

)};

export default ListExpensesIncome;