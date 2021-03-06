import styled from 'styled-components';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
	cursor: pointer;
	border: 3px solid rgba(249, 249, 249, 0.1);
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	overflow: hidden;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	&:hover {
		border-color: rgba(249, 249, 249, 0.8);
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-gap: 25px;

	@media(max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;
