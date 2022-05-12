import styles from './List.module.css';

const List = ({ operationList }) => {

    return (
      <div>
        <p>List:</p>
        <ul>
          {operationList.map((operation) => {
            return <li className={styles.operationList}>
                      <span className={operation.expenseType === "deposits" ? styles.greenText : styles.redText}> {operation.money}$ </span>
                      <span className={styles.expenditure}> {operation.expenditure}</span>
                      <button type="button">X</button>
                  </li>
          })}
          
        </ul>
      </div>
    );
}

export default List;
 