import PropTypes from 'prop-types';
import { Table, Tr, Th, Td, Tbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>

      <Tbody>
        {items.map(el => (
          <Tr key={el.id}>
            <Td>{el.type}</Td>
            <Td>{el.amount}</Td>
            <Td>{el.currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
