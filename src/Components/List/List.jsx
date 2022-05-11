

const List = ({operationList}) => {

  
  return (
   
      <div>
        <p>List:</p>
      <ul>
        {operationList.map((operation) => {
          return <li>{operation.money}</li>
        })}
          
        </ul>
      </div>
  
)};

export default List;
 