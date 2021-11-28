import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db, doc, getDoc } from '../../../config';

import { Movie } from '../../../models';

import {
	Container,
	Background,
	Title,
	SubTitle,
	Description,
	Controls,
	PlayButton,
	TrailerButton,
	PlaylistButton,
	GroupWatchButton
} from './styles';

const MovieDetail: React.FC = (): JSX.Element => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		const getMovie = async () => {
			const movieRef = doc(db, 'movies', movieId!!);
			const movieSnapshot = await getDoc(movieRef);

			if (movieSnapshot.exists()) {
				const movie = movieSnapshot.data() as Movie;
				document.title = movie.title;
				setMovie(movie);
			}
		};
		getMovie();
	}, []);

	return (
		<Container>
			<Background>
				<img src={movie?.backgroundImg} alt="" />
			</Background>
			<Title>
				<img src={movie?.titleImg} alt="" />
			</Title>
			<Controls>
				<PlayButton>
					<img src="/medias/icons/play-icon-black.png" alt="" />
					<span>PLAY</span>
				</PlayButton>
				<TrailerButton>
					<img src="/medias/icons/play-icon-white.png" alt="" />
					<span>TRAILER</span>
				</TrailerButton>
				<PlaylistButton>
					<span>+</span>
				</PlaylistButton>
				<GroupWatchButton>
					<img src="/medias/icons/group-icon.png" alt="" />
				</GroupWatchButton>
			</Controls>
			<SubTitle>{movie?.subTitle}</SubTitle>
			<Description>{movie?.description}</Description>
		</Container>
	);
};

export default MovieDetail;
