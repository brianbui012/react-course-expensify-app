import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom';
//Export a stateless function comp

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <ul>
            <li>Created At: {createdAt}</li>
            <li>Amount: {amount}</li>
            <button
                onClick={() => {
                    dispatch(removeExpense({ id }))
                }}>
                Remove {id}
            </button>
        </ul>
    </div >
);


export default connect()(ExpenseListItem);