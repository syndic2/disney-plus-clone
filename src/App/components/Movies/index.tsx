import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Movie } from '../../../models';

import { selectMovies } from '../../../store/movie/slice';
import { Container, Wrapper, Content } from './styles';

const Movies: React.FC = () => {
	const movies: Movie[] = useSelector(selectMovies);

	return (
		<Container>
			<h4>Recommended for You</h4>
			<Content>
				{
					movies && movies.map((movie, index) => (
						<Wrapper key={index}>
							<Link to={`/movies/${movie.id}`}>
								<img src={movie.cardImg} alt="" />
							</Link>
						</Wrapper>
					))
				}
			</Content>
		</Container>
	);
};

export default Movies;
