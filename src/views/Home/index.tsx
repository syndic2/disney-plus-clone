import React from 'react';

import ImgSlider from '../../utilities/ImgSlider';
import Viewers from '../../components/Viewers';
import Movies from '../../components/Movies';

import { Container } from './styles';

const Home: React.FC = () => {
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
