import React from 'react';
import Button from './Button';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
    age: z.number({ invalid_type_error: 'Age is required' }).int().positive().min(18, { message: 'Age must be at least 18 years' }),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//     name: string;
//     age: number;
// }

const Form: React.FC = () => {
    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const submitData = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submitData)}>
            <div className="form-group">
                <label className='form-label' htmlFor='name'>Name:</label>
                <input className='form-control' type="text" id='name' {...register('name')} />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            </div>

            <div className="form-group ">
                <label className='form-label' htmlFor='age'>Age:</label>
                <input className='form-control' type="number" id='age' {...register('age', {
                    valueAsNumber: true
                })} />
                {errors.age && <p className='text-danger'>{errors.age.message}</p>}
            </div>

            <div className='mt-2'>
                <Button type='submit' color='primary' dataAttributes={
                    {
                        disabled: !isValid
                    }
                }>Submit</Button>
            </div>
        </form>
    );
};

export default Form;