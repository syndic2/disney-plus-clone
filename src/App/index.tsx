import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../views/Home';
import MovieDetail from '../views/MovieDetail';

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies'>
					<Route path=':movieId' element={<MovieDetail />} />
				</Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
