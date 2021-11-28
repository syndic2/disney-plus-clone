import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './views/Login';
import Home from './views/Home';
import MovieDetail from './views/MovieDetail';

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/movies'>
					<Route path=':movieId' element={<MovieDetail />} />
				</Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
