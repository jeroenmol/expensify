import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <h1>Edit expense '{props.expense.description}'</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.match.params.id, expense))
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
