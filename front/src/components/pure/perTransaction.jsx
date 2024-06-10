import PropTypes from 'prop-types';
import { Transaction } from '../../models/transaction.class';

function PerTransaction({ data }) {

    const formatDate = (dateString) => {
        const options = { 
          year: 'numeric', 
          month: 'short', 
          day: '2-digit', 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit', 
          hour12: false 
        };
        const date = new Date(dateString);
        return date.toLocaleString('en-US', options);
    };

  return (
    <tr>
      <td>{ data.currency}</td>
      <td>{ data.total / data.quantity}</td>
      <td>{ (data.type === 'buy') ? '+':'-' } { data.total }</td>
      <td>{ formatDate(data.transactionDate) }</td>
    </tr>
  )
}

PerTransaction.propTypes = {
  data: PropTypes.instanceOf(Transaction).isRequired,
}

export default PerTransaction
