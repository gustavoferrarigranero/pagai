import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link activeClassName={style.active} href="/"><h1>Pagaí</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">About</Link>
		</nav>
	</header>
);

export default Header;
