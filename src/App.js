import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ProductsPage from './components/ProductsPage';
import ProductPage from './components/ProductPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
	return (
		<Router>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
			</ul>
			<Switch>
				<Route path='/' component={HomePage} exact />
				<Route path='/contact' component={ContactPage} exact />
				<Route path='/products' component={ProductsPage} exact />
				<Route path='/products/:id?' component={ProductPage} exact />
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	);
}

export default App;
