import React from 'react';
import s from './TransactionsItem.module.css';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from '../../../redux/transactions/operations';
import { selectTransactionCategories } from '../../../redux/transactions/transactionsSlice';
import sprite from '../../../img/sprite.svg';

const TransactionsItem = ({ transaction }) => {
  const { id, transactionDate, type, categoryId, comment, amount } =
    transaction;

  const isBigScreenOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionCategories);

  function getCategoryName(id) {
    const category = categories.find(category => category.id === id);
    return category ? category.name : 'Unknown Category';
  }

  const handleDeleteTransaction = id => {
    dispatch(deleteTransactionThunk(id));
  };

  const signType = type.toLowerCase() === 'income' ? '+' : '-';

  const transactionBorderColor =
    type.toLowerCase() === 'income' ? s.income_border : s.expense_border;

  const transactionTextColor =
    type.toLowerCase() === 'income' ? s.income_text : s.expense_text;

  return (
    <>
      {isMobile && (
        <li
          key={id}
          className={`${s.transaction_item} ${transactionBorderColor}`}
        >
          <table className={s.transactions_table_mobile}>
            <tbody>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Date</td>
                <td>{transactionDate}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Type</td>
                <td>{signType}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Category</td>
                <td>{getCategoryName(categoryId)}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Comment</td>
                <td>{comment}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Sum</td>
                <td className={transactionTextColor}>{amount}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td>
                  <button
                    className={s.btn_delete}
                    onClick={() => handleDeleteTransaction(id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className={s.btn_edit}>
                    {' '}
                    <svg className={s.icon_edit}>
                      <use xlinkHref={`${sprite}#icon-edit`} />
                    </svg>{' '}
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      )}
      {isBigScreenOrTablet && (
        <tr className={s.transaction_row}>
          <td className={s.transaction_colum}>{transactionDate}</td>
          <td className={s.transaction_colum} style={{ textAlign: 'center' }}>
            {signType}
          </td>
          <td className={s.transaction_colum}>{getCategoryName(categoryId)}</td>
          <td className={s.transaction_colum}>{comment}</td>
          <td
            className={`${s.transaction_colum} ${transactionTextColor}`}
            style={{ textAlign: 'right' }}
          >
            {amount}
          </td>
          <td className={s.transaction_colum}>
            {' '}
            <div className={s.btn_wrapper}>
              <button className={s.btn_edit}>
                {' '}
                <svg className={s.icon_edit}>
                  <use xlinkHref={`${sprite}#icon-edit`} />
                </svg>
              </button>
              <button
                className={s.btn_delete}
                onClick={() => handleDeleteTransaction(id)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TransactionsItem;
