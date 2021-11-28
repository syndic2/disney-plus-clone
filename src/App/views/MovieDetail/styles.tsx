import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
`;

export const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;

export const Title = styled.div`
	width: 30vw;
	min-width: 200px;
	height: 30vh;
	min-height: 170px;
	margin-top: 60px;

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;

export const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 25px;
`;

export const Description = styled.div`
	font-size: 20px;
	line-height: 1.4;
	margin-top: 16px;
	max-width: 750px;
`;

export const Controls = styled.div`
	display: flex;
	align-items: center;
	column-gap: 25px;
	margin-top: 25px;
`;

export const PlayButton = styled.button`
	background-color: rgb(249, 249, 249);
	cursor: pointer;
	display: flex;
	align-items: center;
	border: none;
	border-radius: 4px;
	font-size: 15px;
	letter-spacing: 1.8px;
	height: 56px;
	padding: 8px 24px;

	&:hover {
		background-color: rgb(198, 198, 198);
	}
`;

export const TrailerButton = styled(PlayButton)`
	background-color: rgb(0, 0, 0, 0.3);
	color: rgb(249, 249, 249);
	border: 1px solid rgb(249, 249, 249);
`;

export const PlaylistButton = styled.button`
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid white;
	border-radius: 50%;
	width: 44px;
	height: 44px;

	span {
		color: white;
		font-size: 30px;
	}
`;

export const GroupWatchButton = styled(PlaylistButton)`
	background-color: rgb(0, 0, 0);
`;
