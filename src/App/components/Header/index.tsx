import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { auth, provider, signInWithPopup, onAuthStateChanged } from '../../../config';
import { setSignIn, setSignOut, selectAuthName, selectAuthPhoto } from '../../../store/auth/slice';

import { LoginButton, Logo, Nav, NavMenu, UserImg } from './styles';

const Header: React.FC = (): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authName = useSelector(selectAuthName);
	const authPhoto = useSelector(selectAuthPhoto);

	const onSignIn = async () => {
		const authData = await signInWithPopup(auth, provider);
		const { displayName, email, photoURL } = authData.user;

		dispatch(setSignIn({ name: displayName, email: email, photo: photoURL }));
	};

	const onSignOut = async () => {
		await auth.signOut();
		dispatch(setSignOut());
		navigate('/login');
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { displayName, email, photoURL } = user;
				dispatch(setSignIn({ name: displayName, email: email, photo: photoURL }));
			}
		});
	});

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
				{
					authName === ''
						? <LoginButton onClick={onSignIn}>LOGIN</LoginButton>
						: <UserImg src={authPhoto} onClick={onSignOut} />
				}
			</Nav>
		</header>
	);
};

export default Header;
