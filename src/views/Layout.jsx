import { Outlet, NavLink, Link } from 'react-router-dom';
import { auth, useAuth, SignInButton, SignOutButton } from '../api';
import { Emoji } from '../components';
import './Layout.css';

export function Layout() {
	const { user } = useAuth();

	return (
		<>
			<div className="Layout">
				<header className="Layout-header">
					<Link to="/" className="Layout-header-name">
						<h1>Aisle Be There</h1>
					</Link>
					<div className="Layout-header-login">
						{!!user ? (
							<div className="Layout-header-signed-in">
								<img
									src={auth.currentUser.photoURL}
									alt="user"
									className="Layout-header-profile"
								/>
								<SignOutButton />
							</div>
						) : (
							<SignInButton />
						)}
					</div>
				</header>
				<nav className="Nav">
					<div className="Nav-container">
						<NavLink to="/" className="Nav-link">
							home
						</NavLink>
						<NavLink to="/list" className="Nav-link">
							lists
						</NavLink>
						<NavLink to="/about" className="Nav-link">
							about
						</NavLink>
					</div>
				</nav>
				<main className="Layout-main">
					<Outlet />
				</main>
				<footer className="Layout-footer">
					<p className="Layout-footer-attribution">
						Crafted with care <Emoji label="purple-heart">💜</Emoji> by{' '}
						<a
							className="Layout-footer-link"
							href="https://github.com/amalyam"
							target="_blank"
							rel="noreferrer"
						>
							Amalya
						</a>
						,{' '}
						<a
							className="Layout-footer-link"
							href="https://github.com/hsiangj"
							rel="noreferrer"
							target="_blank"
						>
							Jessica
						</a>
						,{' '}
						<a
							className="Layout-footer-link"
							href="https://github.com/piecanoe"
							rel="noreferrer"
							target="_blank"
						>
							Karen
						</a>
						, &{' '}
						<a
							className="Layout-footer-link"
							href="https://github.com/krsnamara"
							rel="noreferrer"
							target="_blank"
						>
							Marty
						</a>{' '}
						in partnership with{' '}
						<a
							className="Layout-footer-link"
							href="https://the-collab-lab.codes/"
							rel="noreferrer"
							target="_blank"
						>
							The Collab Lab
						</a>
						.
					</p>
				</footer>
			</div>
		</>
	);
}
