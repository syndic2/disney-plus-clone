import React from 'react';

import { Logo, Nav, NavMenu, UserImg } from './styles';

const Header: React.FC = () => {

	return (
		<header>
			<Nav>
				<Logo src="/medias/icons/logo.svg" />
				<NavMenu>
					<a>
						<img src="/medias/icons/home-icon.svg" alt="" />
						<span>HOME</span>
					</a>
					<a>
						<img src="/medias/icons/search-icon.svg" alt="" />
						<span>SEARCH</span>
					</a>
					<a>
						<img src="/medias/icons/watchlist-icon.svg" alt="" />
						<span>WATCHLIST</span>
					</a>
					<a>
						<img src="/medias/icons/original-icon.svg" alt="" />
						<span>ORIGINALS</span>
					</a>
					<a>
						<img src="/medias/icons/movie-icon.svg" alt="" />
						<span>MOVIES</span>
					</a>
					<a>
						<img src="/medias/icons/series-icon.svg" alt="" />
						<span>SERIES</span>
					</a>
				</NavMenu>
				<UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I5pBJdMw8qakuqT9qh_oypM78wcI5uovQvnIoqX=s32-c-mo" />
			</Nav>
		</header>
	);
};

export default Header;
