import React from 'react';

import { Container, Wrapper } from './styles';

const Viewers: React.FC = (): JSX.Element => {
	return (
		<Container>
			<Wrapper>
				<img src="/medias/images/viewers-disney.png" alt="" />
				<video autoPlay={true} loop={true} playsInline={true} muted={true}>
					<source src="/medias/videos/1564674844-disney.mp4" type="video/mp4" />
				</video>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-pixar.png" alt="" />
				<video autoPlay={true} loop={true} playsInline={true} muted={true}>
					<source src="/medias/videos/1564676714-pixar.mp4" type="video/mp4" />
				</video>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-marvel.png" alt="" />
				<video autoPlay={true} loop={true} playsInline={true} muted={true}>
					<source src="/medias/videos/1564676115-marvel.mp4" type="video/mp4" />
				</video>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-starwars.png" alt="" />
				<video autoPlay={true} loop={true} playsInline={true} muted={true}>
					<source src="/medias/videos/1608229455-star-wars.mp4" type="video/mp4" />
				</video>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-national.png" alt="" />
				<video autoPlay={true} loop={true} playsInline={true} muted={true}>
					<source src="/medias/videos/1564676296-national-geographic.mp4" type="video/mp4" />
				</video>
			</Wrapper>
		</Container>
	);
};

export default Viewers;
