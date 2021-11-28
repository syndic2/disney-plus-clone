import React from 'react';

import { Container, Wrapper } from './styles';

const Viewers: React.FC = (): JSX.Element => {
	return (
		<Container>
			<Wrapper>
				<img src="/medias/images/viewers-disney.png" alt=""></img>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-pixar.png" alt=""></img>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-marvel.png" alt=""></img>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-starwars.png" alt=""></img>
			</Wrapper>
			<Wrapper>
				<img src="/medias/images/viewers-national.png" alt=""></img>
			</Wrapper>
		</Container>
	);
};

export default Viewers;
