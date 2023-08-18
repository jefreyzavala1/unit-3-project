import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
// import Pic from '../../images/background-pic.jpeg';
export default function AuthPage({ setUser }) {
	const [showLogin, setShowLogin] = useState(true);

	const toggleLogin = () => {
		setShowLogin(!showLogin);
	};
	return (
		<main className={styles.AuthPage}>
			<div>
				<Logo />
				{/* <img src={Pic} alt="hello"></img> */}
			</div>
			{showLogin ? (
				<LoginForm
					setUser={setUser}
					showLogin={showLogin}
					toggleLogin={toggleLogin}
				/>
			) : (
				<SignUpForm setUser={setUser} />
			)}
		</main>
	);
}
