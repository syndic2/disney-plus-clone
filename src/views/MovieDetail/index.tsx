import React from 'react';

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

const MovieDetail: React.FC = () => {
	return (
		<Container>
			<Background>
				<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
			</Background>
			<Title>
				<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
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
			<SubTitle>
				2018 &#8226; 7m &#8226; Family, Fantasy, Kids, Animation
			</SubTitle>
			<Description>
				A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
			</Description>
		</Container>
	);
};

export default MovieDetail;
