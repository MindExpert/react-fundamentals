import React from 'react';

interface Expense {
    id: string;
    description: string;
    amount: number;
    category: string;
}

interface ExpenseListProps {
    expenses: Expense[];
    onExpenseDelete: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onExpenseDelete }: ExpenseListProps) => {

    if (expenses.length === 0) {
        return <p>No expenses</p>;
    }

    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={() => onExpenseDelete(expense.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}>
                        Total: ${expenses.reduce((acc, currExpenseObject) => acc + currExpenseObject.amount, 0).toFixed(2)}
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExpenseList;