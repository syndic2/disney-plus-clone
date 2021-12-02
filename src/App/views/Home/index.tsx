import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { movies } from '../../../mock-data/movies.json';
import { db, collection, getDocs, addDoc } from '../../../config';
import { setMovies } from '../../../store/movie/slice';

import { Movie } from '../../../models';

import ImgSlider from '../../components/utilities/ImgSlider';
import Viewers from '../../components/Viewers';
import Movies from '../../components/Movies';
import { Container } from './styles';

const Home: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();

	const addBulkMovies = async () => {
		for (const [, value] of Object.entries(movies)) {
			await addDoc(collection(db, 'movies'), value);
		}
	};

	const getMovies = async (): Promise<Movie[]> => {
		const moviesCollection = collection(db, 'movies');
		const moviesSnapshot = await getDocs(moviesCollection);
		const movies = moviesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Movie[];

		return movies;
	};

	useEffect(() => {
		document.title = 'Disney+ Clone | ReactTS';

		const setupMovies = async () => {
			const movies = await getMovies();

			if (!movies.length) {
				await addBulkMovies();
			}

			dispatch(setMovies(movies));
		};
		setupMovies();
	});

	return (
		<main>
			<Container>
				<ImgSlider />
				<Viewers />
				<Movies />
			</Container>
		</main>
	);
};

export default Home;
