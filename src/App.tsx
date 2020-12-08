import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { FormAnimationContext } from './context/FormAnimationContext';
import { Feedback } from './pages/Feedback';
import { Home } from './pages/Home';

const App = () => {
	return (
		<Router>
			<div className='bg-gray-800 text-gray-200 min-h-screen'>
				<Navbar />
				<Switch>
					<Route path='/feedbacks/new' exact>
						<FormAnimationContext>
							<Feedback />
						</FormAnimationContext>
					</Route>
					<Route path='/' exact>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
