import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	min-height: calc(100vh - 70px);

	&:before {
		content: "";
		background-image: url('/medias/images/login-background.jpg');
		background-position: top;
		background-size: cover;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
`;

export const CTA = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 10px;
	width: 90%;
	max-width: 650px;
	padding: 80px 40px;
`;

export const CTALogoOne = styled.img`

`;

export const CTALogoTwo = styled.img`
	width: 90%;
`;

export const SignUp = styled.a`
	background-color: #0063E5;
	cursor: pointer;
	border-radius: 4px;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	letter-spacing: 1.5px;
	transition: all 250ms;
	width: 100%;
	padding: 17px 0;

	&:hover {

	}
`;

export const Description = styled.p`
	font-size: 11px;
	text-align: center;
	letter-spacing: 1.5px;
	line-height: 1.5;
`;

