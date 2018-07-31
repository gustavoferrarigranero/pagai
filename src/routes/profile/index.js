import style from './style';

const Profile = ({ user }) => (
	<div class={style.profile}>
		<h1>About: {user}</h1>
		<p>This is an app, makes to force peaples to give our money in favor of goood cause: yours hungry</p>
	</div>
);

export default Profile;