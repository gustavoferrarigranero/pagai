import style from './style';

const users = [
	'Gustavo',
	'Tarsis',
	'Jhonatan'
];

const Home = () => (
	<div class={style.home}>
		<h1>To pay this month</h1>
		<ul>
			{ users.map((user) => (
			    <li>{user}</li>
			))}
		</ul>
	</div>
);

export default Home;
