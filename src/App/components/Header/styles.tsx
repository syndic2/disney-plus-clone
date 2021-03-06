import styled from 'styled-components';

export const LoginButton = styled.button`
	background-color: rgba(0, 0, 0, 0.6);
	color: #F9F9F9;
	cursor: pointer;
	border: 1px solid #F9F9F9;
	border-radius: 4px;
	letter-spacing: 1.5px;
	transition: all 0.2s ease 0s;
	padding: 8px 16px;

	&:hover {
		background-color: #F9F9F9;
		color: black;
		border-color: transparent;
	}
`;

export const Logo = styled.img`
	width: 80px;
`;

export const Nav = styled.nav`
	background-color: #090B13;
	display: flex;
	column-gap: 40px;
	align-items: center;
	overflow-x: hidden;
	height: 70px;
	padding: 0 36px;
`;

export const NavMenu = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	column-gap: 25px;

	a {
		color: white;
		display: flex;
		align-items: center;
		column-gap: 5px;
		text-decoration: none;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				content: '';
				background-color: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				height: 2px;
				opacity: 0;
				transform: scaleX(0);
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
			}
		}

		&:hover {
			span:after {
				opacity: 1;
				transform: scaleX(1);
			}
		}
	}
`;

export const UserImg = styled.img`
	border-radius: 50%;
	cursor: pointer;
	width: 40px;
	height: 40px;
`;



