import React from 'react';
import categories from '../categories';

interface ExpenseFilterProps {
    onFilterChange: (category: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ onFilterChange }: ExpenseFilterProps) => {
    // Add your component logic here

    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Filter</span>
                        <select className='form-select' onChange={(event) => onFilterChange(event.target.value)}>
                            <option value=''>All Categories</option>
                            {
                                categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpenseFilter;