import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, Nav, NavMenu, UserImg } from './styles';

const Header: React.FC = () => {

	return (
		<header>
			<Nav>
				<Link to='/'>
					<Logo src="/medias/icons/logo.svg" />
				</Link>
				<NavMenu>
					<Link to='/'>
						<img src="/medias/icons/home-icon.svg" alt="" />
						<span>HOME</span>
					</Link>
					<Link to=''>
						<img src="/medias/icons/search-icon.svg" alt="" />
						<span>SEARCH</span>
					</Link>
					<Link to=''>
						<img src="/medias/icons/watchlist-icon.svg" alt="" />
						<span>WATCHLIST</span>
					</Link>
					<Link to=''>
						<img src="/medias/icons/original-icon.svg" alt="" />
						<span>ORIGINALS</span>
					</Link>
					<Link to=''>
						<img src="/medias/icons/movie-icon.svg" alt="" />
						<span>MOVIES</span>
					</Link>
					<Link to=''>
						<img src="/medias/icons/series-icon.svg" alt="" />
						<span>SERIES</span>
					</Link>
				</NavMenu>
				<UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I5pBJdMw8qakuqT9qh_oypM78wcI5uovQvnIoqX=s32-c-mo" />
			</Nav>
		</header>
	);
};

export default Header;
