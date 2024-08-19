import React from 'react';
import categories from '../categories';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
    description: z.string().min(3, { message: 'Description must be at least 3 characters long' }).max(100, { message: 'Description must be at most 100 characters long' }),
    amount: z.number({ invalid_type_error: 'Amount is required' }).int().positive().min(0.01, { message: 'Amount hould be at least 0.01' }).max(100_000, { message: 'Amount should be at most 100000' }),
    category: z.enum(categories, {
        errorMap: () => ({ message: 'Invalid category!' })
    }),
    // category: z.string().refine((category) => categories.includes(category), { message: 'Invalid category' }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
    onAddExpense: (expense: ExpenseFormData) => void;
}


const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
    // React Hook Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm<ExpenseFormData>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(data => {
            onAddExpense(data);
            reset();
        })}>
            <div className='mb-3'>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    className='form-control'
                    {...register('description')}
                />
                {errors.description && <p className='text-danger'>{errors.description.message}</p>}
            </div>
            <div className='mb-3'>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    className='form-control'
                    {...register('amount', {
                        valueAsNumber: true
                    })}
                />
                {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
            </div>

            <div className='mb-3'>
                <label htmlFor="category">Category</label>
                <select className='form-select' id='category' {...register('category')}>
                    <option value=''>Select a category</option>
                    {
                        categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))
                    }
                </select>
                {errors.category && <p className='text-danger'>{errors.category.message}</p>}
            </div>

            <button type="submit" className='btn btn-primary' disabled={!isValid}>Add Expense</button>
        </form>
    );
};

export default ExpenseForm;