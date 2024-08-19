import { useState } from 'react';
import './App.css'
import Alert from './components/Alert';
import Button from './components/Button';
import Like from './components/Like';
import ExpendableText from './components/ExpendableText';
import ListGroup from './components/ListGroup';
import Form from './components/Form';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';

function App() {
	let items = [
		'New York',
		'San Francisco',
		'Tokyo',
		'London',
		'Paris',
	];

	const handleItemSelect = (item: string) => {
		console.log(item);
	}

	const [alertVisible, setAlertVisible] = useState(true);


	const [selectedCategory, setSelectedCategory] = useState('');

	const [expenses, setExpenses] = useState([
		{ id: '1', description: 'Lunch', amount: 10, category: 'Groceries' },
		{ id: '2', description: 'Uber', amount: 20, category: 'Utilities' },
		{ id: '3', description: 'Rent', amount: 1000, category: 'Housing' },
		{ id: '4', description: 'Parking', amount: 130, category: 'Housing' },
		{ id: '5', description: 'Electricity', amount: 160, category: 'Utilities' },
		{ id: '6', description: 'Water', amount: 160, category: 'Utilities' },
		{ id: '7', description: 'Dinner', amount: 35, category: 'Groceries' },
	]);

	const filteredExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h1>React Learning</h1>
					</div>
				</div>

				{
					alertVisible && (
						<div className='row'>
							<div className='col'>
								<Alert message='Something is Wrong' type='secondary' onClose={() => setAlertVisible(false)}>
									<p>This is a secondary alert—check it out!</p>
								</Alert>
							</div>
						</div>
					)
				}

				<div className='row'>
					<div className='col-6'>
						<Button onClick={() => setAlertVisible(true)} color='primary'>
							<i className='fa fa-plus'></i> Click
						</Button>
					</div>
					<div className='col-6'>
						<Like />
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col-7'>
						<ListGroup items={items} heading={"Cities"} onItemSelect={handleItemSelect} />
					</div>
					<div className='col-5'>
						<ExpendableText length={50}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
							Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
							Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

							Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
							Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
							massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.


							Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
							torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus
							odio neque euismod.
						</ExpendableText>
					</div>
				</div>

				<div className="row">
					<div className="col-8">
						<Form />
					</div>
				</div>

				<div className="row mt-4">
					<div className="col-12">
						<h2>Expense Tracker</h2>
						<div className='mb-5'>
							<ExpenseForm onAddExpense={(expense) => setExpenses([...expenses, { ...expense, id: (expenses.length + 1).toString() }])} />
						</div>
						<ExpenseFilter onFilterChange={(category) => setSelectedCategory(category)} />
						<ExpenseList
							expenses={filteredExpenses}
							onExpenseDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
