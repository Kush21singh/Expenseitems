import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate'; // Import ExpenseDate
import ExpenseDetails from './ExpenseDetails'; // Import ExpenseDetails

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} /> {/* Display the date using ExpenseDate */}
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      /> {/* Display the details using ExpenseDetails */}
    </div>
  );
}

export default ExpenseItem;
